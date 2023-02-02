export const getBudget = async (collection, db, uid, getDocs) => {
    const colRef = collection(db, "budget", uid, "data");

    const snapshort = await getDocs(colRef);
    return snapshort.docs[0].data();
}

export const getUserSpending = async (collection, db, uid, getDocs) => {
    const colRef = collection(db, "spending", uid, "data");

    const snapshort = await getDocs(colRef);
    const spending = [];
    snapshort.docs.forEach((doc) => {
        spending.push({ ...doc.data() });
      });
    return spending
}

export const getCategories = async (collection, db, uid, getDocs) => {
    const colRef = collection(db, "category", uid, "data");
    const snapshort  = await getDocs(colRef);
    const categories = [];
    snapshort.docs.forEach((doc) => {
        categories.push({ ...doc.data() });
      });
    return categories
}