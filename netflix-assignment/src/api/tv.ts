import type { NextApiRequest, NextApiResponse } from 'next';
import instance from '@/utils/axiosInstance';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const category = req.query.category || 'popular';
  try {
    const response = await instance.get(`/tv/${category}`);
    res.status(200).json(response.data.results);
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    res.status(500).json({ error: 'Failed to fetch TV shows' });
  }
}
