import db from "../config/firebase.js";
import { collection, addDoc } from "firebase";

const productsCollectionRef = collection(db, "products");

const productsSeeders = [
  {
    title: "Teclado Mecánico RGB",
    description:
      "Teclado mecánico con switches tipo Blue, retroiluminación RGB y distribución en español.",
    price: 45000.5,
    stock: 15,
  },
  {
    title: "Mouse Óptico Gamer",
    description:
      "Mouse ergonómico con hasta 10000 DPI configurables y 6 botones programables.",
    price: 22000.0,
    stock: 25,
  },
  {
    title: "Monitor 24' Full HD",
    description:
      "Monitor IPS de 24 pulgadas con tasa de refresco de 75Hz y tecnología AMD FreeSync.",
    price: 135000.99,
    stock: 8,
  },
  {
    title: "Auriculares Inalámbricos",
    description:
      "Auriculares con cancelación de ruido activa y hasta 30 horas de autonomía de batería.",
    price: 58000.0,
    stock: 12,
  },
  {
    title: "Memoria RAM 16GB DDR4",
    description:
      "Módulo de memoria RAM a 3200MHz con disipador de aluminio integrado.",
    price: 38500.75,
    stock: 20,
  },
  {
    title: "Disco Sólido SSD 1TB",
    description:
      "Unidad de almacenamiento NVMe M.2 con velocidades de lectura de hasta 3500 MB/s.",
    price: 62000.0,
    stock: 18,
  },
  {
    title: "Procesador Octa-Core",
    description:
      "Procesador de última generación, ideal para multitasking, streaming y gaming avanzado.",
    price: 245000.0,
    stock: 5,
  },
  {
    title: "Placa de Video 8GB",
    description:
      "Tarjeta gráfica optimizada para jugar en 1080p y 1440p en configuraciones ultra.",
    price: 390000.5,
    stock: 4,
  },
  {
    title: "Gabinete Mid-Tower",
    description:
      "Gabinete con lateral de vidrio templado y 3 ventiladores ARGB incluidos.",
    price: 47000.0,
    stock: 10,
  },
  {
    title: "Fuente Certificada 650W",
    description:
      "Fuente de alimentación con certificación 80 Plus Bronze y protecciones eléctricas completas.",
    price: 33900.25,
    stock: 14,
  },
];

const createProducts = () => {
  productsSeeders.forEach(async (product) => {
    await addDoc(productsCollectionRef, product);
  });
};

createProducts();
