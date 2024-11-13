import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import instance from '@/utils/axiosInstance';


// GET 요청 처리
export async function GET(req: NextRequest) {
    const category = req.nextUrl.searchParams.get('category') || 'popular';
    console.log('API Route Called with category:', category);

  try {
    const response = await instance.get(`/col/movie/${category}`);

    return NextResponse.json(response.data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
