// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';

const data = [
  { id: 1, name: 'Item 1', quantity: 5 },
  { id: 2, name: 'Item 2', quantity: 10 },
  // Add more data as needed
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};