import { createServer, Model } from "miragejs";

import { TProduct } from "@/interfaces/Server";

import { getRandomNumber } from "@/utils/generator";

import dataMock from "./mock";

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  models: {
    product: Model as TProduct,
  },

  async seeds(server) {
    dataMock.products.forEach((i) => server.create("product", i));
  },

  routes() {
    this.namespace = "api";
    this.timing = getRandomNumber(200, 900);

    this.get("/products", async (schema) => {
      return Array.from(schema.db.products);
    });
  },
});
