const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    Date: {
      // Changed from body to content to match the routes
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;