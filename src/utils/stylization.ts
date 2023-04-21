export const sizeToPixel = (size?: string | number, def = 24) =>
  size ? (typeof size === "string" ? size : size + 7 + "px") : def;
