import {
  getAllProductsModel,
  getProductsByIdModel,
  createProductsModel,
  deleteProductsModel,
} from "../models/products.model.js";

export const getAllProductsService = async () => {
  const products = await getAllProductsModel();
  return products;
};

export const getProductsByIdService = async (id) => {
  const product = await getProductsByIdModel(id);
  return product;
};

export const createProductsService = async (product) => {
  const newProduct = await createProductsModel(product);
  return newProduct;
};

export const deleteProductsService = async (id) => {
  const deletedProduct = await deleteProductsModel(id);
  return deletedProduct;
};
