import { createServer, Model } from "miragejs";

import { TProduct } from "@/interfaces/Server";

import { getRandomNumber } from "@/utils/generator";

import dataMock from "./mock";
import { IProduct, TProductFilter } from "@/interfaces/product";

if (window.server) {
  window.server.shutdown();
}

const filters = dataMock.products.reduce((acc, item) => {
  return {
    brand: Array.from(new Set([...(acc.brand || []), item.brand])),
    size: Array.from(new Set([...(acc.size || []), item.size])),
    categoryName: Array.from(
      new Set([...(acc.categoryName || []), item.categoryName])
    ),
    surface: Array.from(new Set([...(acc.surface || []), item.surface])),
  };
}, {} as TProductFilter);

window.server = createServer({
  models: {
    product: Model as TProduct,
  },

  async seeds(server) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let dump_data: any = null;
    try {
      dump_data = JSON.parse(
        window.localStorage.getItem("@mirage_dump:db") || "{}"
      );
    } catch (err) {
      null;
    }

    if (!(dump_data?.products && Array.isArray(dump_data.products)))
      dump_data = [];
    else dump_data = dump_data.products;

    dataMock.products.forEach((i) => {
      const val = i;
      const dumpVal = dump_data?.find((e: typeof i) => e.id === i.id);
      if (dumpVal) {
        val.totalBookmarks = dumpVal.totalBookmarks || 0;
        val.totalDownloads = dumpVal.totalDownloads || 0;
        val.totalLikes = dumpVal.totalLikes || 0;
      }
      server.create("product", val);
    });
  },

  routes() {
    this.namespace = "api";
    this.timing = getRandomNumber(400, 900);

    this.get("/products", async (schema, request) => {
      if (Object.keys(request.queryParams).length === 0)
        return Array.from(schema.db.products);

      const { search = "", ...rest } = request.queryParams;
      const brand = [] as string[];

      for (const i in rest) {
        if (i.match("brand")) {
          brand[parseInt(i.replace(/\D/g, ""))] = rest[i];
          delete rest[i];
        }
      }

      const normalizedQuery = search
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return schema.db.products.where((product: IProduct) => {
        let result = false;
        if (normalizedQuery) {
          for (const key of Object.keys(product) as Array<keyof IProduct>) {
            const val = String(product[key])
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            if (val.includes(normalizedQuery)) {
              result = true;
              break;
            }
          }
        } else {
          result = true;
        }

        if (brand.length > 0 && result) {
          if (brand.length > 0 && brand.indexOf(product.brand) > -1 && result) {
            result = true;
          } else {
            result = false;
          }
        }

        if (result) {
          for (const key in rest) {
            if (!(key in product)) {
              result = false;
              break;
            }
            const val = product[key as keyof IProduct];
            if (rest[key] === val) {
              result = true;
            } else {
              result = false;
              break;
            }
          }
        }

        return result;
      });
    });

    this.put("/product/:id", async (schema, request) => {
      const { id } = request.params;
      const product = schema.db.products.find(id);
      product[request.requestBody]++;
      const { id2, ...rest } = product;
      schema.db.products.update(id, rest);

      window.localStorage.setItem(
        "@mirage_dump:db",
        JSON.stringify(schema.db.dump())
      );

      return "";
    });
    this.get("/filters", async () => {
      return filters;
    });
  },
});
