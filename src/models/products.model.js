import db from "../config/firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const collectionProductsRef = collection(db, "products");

export const getAllProductsModel = async () => {
  const snapshot = await getDocs(collectionProductsRef);

  const products = [];

  snapshot.forEach((document) => {
    products.push({
      id: document.id,
      ...document.data(),
    });
  });

  return products;
};

export const getProductsByIdModel = async (id) => {
  const docRef = doc(collectionProductsRef, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const createProductsModel = async (product) => {
  const docRef = await addDoc(collectionProductsRef, product);

  return {
    id: docRef.id,
    product,
  };
};

export const deleteProductsModel = async (id) => {
  const docRef = doc(collectionProductsRef, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  const deletedProduct = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  await deleteDoc(docRef);

  return deletedProduct;
};

export const updateProductsModel = async (id, product) => {
  const docRef = doc(collectionProductsRef, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  await updateDoc(docRef);

  return {
    id: snapshot.id,
    ...product,
  };
};
