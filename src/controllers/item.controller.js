export const createItem = (req, res) => {
  const item = req.body;
  try {
    // add logic for saving the item that i user is spendding on
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getItems = (req, res) => {
  try {
    // add logic for retrieving items the user spent on
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateItem = (req, res) => {
  const id = req.body.id;
  try {
    // add logic for updating the item
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteItem = (req, res) => {
  const id = req.params.id;
  try {
    // add logic for deleting an item the item
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
