import { Request, Response } from "express";
import { Product } from "../models/productModel";

// Dummy database for now
const products: Product[] = [
  {
    id: "1",
    name: "Broccoli",
    price: 2.99,
    description: "Fresh broccoli from the local farm.",
    image:
      "https://github.com/deanagan/seed-collection/blob/main/frontend/public/images/product-image-1.jpg?raw=true",
  },
  {
    id: "2",
    name: "Kale",
    price: 1.99,
    description: "Organic kale, packed with nutrients.",
    image:
      "https://github.com/deanagan/seed-collection/blob/main/frontend/public/images/product-image-2.jpg?raw=true",
  },
  {
    id: "3",
    name: "Nasturtium",
    price: 3.49,
    description: "Edible flowers with a peppery flavor.",
    image:
      "https://github.com/deanagan/seed-collection/blob/main/frontend/public/images/product-image-3.jpg?raw=true",
  },
];

export const getProducts = (req: Request, res: Response): void => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response): void => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
