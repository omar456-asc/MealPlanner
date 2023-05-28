const Ajv = require("ajv");
const ajv = new Ajv();

let ProductsSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    ingredients: { type: "array" },
    // image: { type: "string" },
    category: { type: "string" },
    price: { type: "number" },
  },
  required: ["title", "summary", "ingredients", "category", "price"],
  additionalProperties: true,
};


module.exports = ajv.compile(ProductsSchema);
