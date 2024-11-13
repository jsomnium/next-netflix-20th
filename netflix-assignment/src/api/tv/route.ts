import { NextRequest, NextResponse } from 'next/server';
import instance from '@/utils/axiosInstance';

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category') || 'popular';
  try {
    const response = await instance.get(`/tv/${category}`);
    return NextResponse.json(response.data.results);
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return NextResponse.json({ error: 'Failed to fetch TV shows' }, { status: 500 });
  }
}
