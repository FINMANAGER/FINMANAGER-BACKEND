import  pkg  from "firebase-admin";
const {fireStore } = pkg
export const createBudget = async (req, res) => {
  try {
    const budget = req.body;
    const budgetResponse = await fireStore.collection("user").doc().set(budget);
    res.status(201).json(budgetResponse);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getBudgets = async (_req, res) => {
  try {
    const budgetResponse = await fireStore.collection("user").get().doc();
    if (!budgetResponse) {
      res.status(404).json({ errorMessage: "no budgets found" });
    }
    res.status(200).json(budgetResponse);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getBudget = async (req, res) => {
  try {
    const id = req.params.id;
    const budget = req.body;
    const selectedbudget = await collection("user").doc(id);
    if (!selectedbudget) {
      res.status(404).json({ errorMessage: "budget not found" });
    }
    const updatedbudget = await selectedbudget.update(budget);
    res.status(200).json(updatedbudget);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateBudget = (req, res) => {
  try {
    const id = req.params.id;
    const budget = collection("user").doc(id).get().data();
    if (!budget) {
      res.status(404).json({ errorMessage: "budget not found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const id = req.params.id;
    await collection("user").doc(id).delete();
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
