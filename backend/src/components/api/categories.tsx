// pages/api/categories.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const categoriesFilePath = path.join(process.cwd(), 'data', 'categories.json');

const getCategories = (): any[] => {
  const categoriesData = fs.readFileSync(categoriesFilePath, 'utf-8');
  return JSON.parse(categoriesData);
};

const saveCategories = (categories: any[]): void => {
  fs.writeFileSync(categoriesFilePath, JSON.stringify(categories));
};

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'GET') {
    const categories = getCategories();
    res.status(200).json(categories);
  } else if (req.method === 'POST') {
    const { body } = req;
    const categories = getCategories();
    saveCategories(body);
    res.status(200).json(body);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    const categoryId = parseInt(id as string, 10);

    if (isNaN(categoryId)) {
      res.status(400).json({ error: 'Invalid category ID' });
      return;
    }

    const categories = getCategories();
    const updatedCategories = categories.filter((category) => category.id !== categoryId);
    saveCategories(updatedCategories);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}