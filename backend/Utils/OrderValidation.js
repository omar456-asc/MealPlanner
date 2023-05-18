const Ajv = require("ajv");
const ajv = new Ajv();

const OrderSchema = {
  type: "object",
  properties: {
    userID: { type: "string", format: "objectId" },
    totalPrice: { type: "number" },
    status: { type: "string" },
    date: { type: "string", format: "date-time" },
    meals: {
      type: "array",
      items: {
        type: "object",
        properties: {
          mealID: { type: "string", format: "objectId" },
          ingredients: {
            type: "array",
            items: { type: "string", format: "objectId" },
          },
        },
        required: ["mealID", "ingredients"],
        additionalProperties: false,
      },
    },
  },
  required: ["userID", "totalPrice", "status", "date", "meals"],
  additionalProperties: false,
};

module.exports = ajv.compile(OrderSchema);
