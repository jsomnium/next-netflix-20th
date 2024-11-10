"use client"

import { useContentStore } from '@/store/useContentStore';
import { tvCategories } from '../../../../data/categories';
import ContentRow from './ContentRow';
import { useEffect } from 'react';

export default function TvCategory() {
    const { fetchAllContents, tvShows, loading } = useContentStore();

  useEffect(() => {
    fetchAllContents();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <>
      {tvCategories.map((item) => (
        <ContentRow key={item.category} title={item.title} content={tvShows[item.category]}/>
      ))}
    </>
  );
}
