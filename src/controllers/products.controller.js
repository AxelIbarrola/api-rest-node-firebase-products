import {
  getAllProductsService,
  getProductsByIdService,
  createProductsService,
  deleteProductsService,
} from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Error interno en el servidor al procesar la solicitud.",
    });
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  if (!id || id.length !== 20) {
    return res.status(400).json({ message: "Formato de id inválido." });
  }

  try {
    const product = await getProductsByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error interno en el servidor al procesar la solicitud.",
    });
  }
};

export const createProducts = async (req, res) => {
  const { title, description, price, stock } = req.body;
  const product = {
    title,
    description,
    price: Number(price),
    stock: Number(stock),
  };

  if (!title || !description || !price || stock === null) {
    return res.status(400).json({
      message:
        "Ausencia de datos necesarios para crear un producto. Datos requeridos: title, description, price, stock",
    });
  }

  try {
    const newProduct = await createProductsService(product);

    res
      .status(201)
      .json({ message: "Producto creado con éxito.", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al procesar la solicitud." });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;

  if (!id || id.length !== 20) {
    return res.status(400).json({ message: "Formato de id inválido." });
  }

  try {
    const deletedProduct = await deleteProductsService(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    res
      .status(200)
      .json({
        message: "Producto eliminado con éxito.",
        product: deletedProduct,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al procesar la solicitud." });
  }
};
