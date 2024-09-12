const Item = require("../models/item");

// Get all items
const getAllItems = (req, res) => {
  Item.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to fetch items" });
      console.error(err.message);
    });
};

// Get item by ID
const getItemById = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to fetch item" });
      console.error(err.message);
    });
};

// Add a new item
const addItem = async (req, res) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({ message: "Name and date are required" });
  }

  try {
    const item = new Item({
      name,
      date: new Date(date),
    });

    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: "Failed to create item" });
    console.error(err.message);
  }
};

// Update an existing item
const updateItem = async (req, res) => {
  const updates = req.body;

  try {
    const item = await Item.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: "Failed to update item" });
    console.error(err.message);
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete item" });
    console.error(err.message);
  }
};

module.exports = {
  getAllItems,
  addItem,
  getItemById,
  updateItem,
  deleteItem,
};
