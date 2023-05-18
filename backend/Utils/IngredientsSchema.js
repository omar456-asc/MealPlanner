const Ajv = require("ajv");
const ajv = new Ajv();

const IngredientsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    consistency: { type: "string" },
    image: { type: "string" },
    amount: { type: "integer" },
    price: { type: "number" },
  },
  required: ["id", "name", "consistency", "image", "amount", "price"],
  additionalProperties: false,
};

module.exports = ajv.compile(IngredientsSchema);
