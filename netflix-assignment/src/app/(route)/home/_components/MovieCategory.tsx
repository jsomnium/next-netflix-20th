"use client"

import { useContentStore } from '@/store/useContentStore';
import {  movieCategories } from '../../../../data/categories';
import ContentRow from './ContentRow';
import { useEffect } from 'react';

export default function MovieCategory() {
    const { fetchAllContents, movies, loading } = useContentStore();

  useEffect(() => {
    fetchAllContents();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <>
      {movieCategories.map((item) => (
        <ContentRow key={item.category} title={item.title} content={movies[item.category]}/>
      ))}
    </>
  );
}
