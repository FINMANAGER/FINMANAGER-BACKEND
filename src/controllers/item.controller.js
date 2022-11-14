import  pkg  from "firebase-admin";
const {fireStore } = pkg
export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const itemResponse = await fireStore.collection("user").doc().set(item);
    res.status(201).json(itemResponse);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getItems = async (_req, res) => {
  try {
    const itemResponse = await fireStore.collection("user").get().doc();
    if (!itemResponse) {
      res.status(404).json({ errorMessage: "no items found" });
    }
    res.status(200).json(itemResponse);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = req.body;
    const selectedItem = await collection("user").doc(id);
    if (!selectedItem) {
      res.status(404).json({ errorMessage: "item not found" });
    }
    const updatedItem = await selectedItem.update(item);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateItem = (req, res) => {
  try {
    const id = req.params.id;
    const item = collection("user").doc(id).get().data();
    if (!item) {
      res.status(404).json({ errorMessage: "item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await collection("user").doc(id).delete();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
