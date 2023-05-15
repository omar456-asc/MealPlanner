const Ajv = require("ajv");
const ajv = new Ajv();

let ProductsSchema = {
  type: "object",
  properties: {
    title: { type: "string", pattern: "^[a-zA-Z]+$" },
    summary: { type: "string", pattern: "^[a-zA-Z]+$" },
  },
  required: ["title" , "summary"],
  // additionalProperties: false,
};

module.exports = ajv.compile(ProductsSchema);
