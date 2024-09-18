import { ProductRepository } from "../repository/productRepository";
import { Request, Response } from 'express';


const productRepository = new ProductRepository();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  
  try {
    const prouct = await productRepository.addProduct(name, price);
    res.status(201).json(prouct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};

