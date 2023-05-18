const Ajv = require("ajv");
const ajv = new Ajv();

let ProductsSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    ingredients: { type: "array", items: { type: "integer" } },
    image: { type: "string" },
    category: { type: "string" },
  },
  required: ["title", "summary", "ingredients", "category", "image"],
  // additionalProperties: false,
};

module.exports = ajv.compile(ProductsSchema);
