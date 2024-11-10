"use client"

import { useContentStore } from "@/store/useMovieStore";
import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";
import NavBar from "./NavBar";
import Top10 from "../../../../assets/svg/Top10.svg";

export default function Header() {
    const { movies, fetchMovies } = useContentStore();
    const [randomIndex, setRandomIndex] = useState<number>(0);
    const [randomMovie, setRandomMovie] = useState<Movie | null>(null);


    // 랜덤한 영화를 선택하는 함수
    const getRandomMovie = () => {
        if (movies.length > 0) {
            setRandomIndex(Math.floor(Math.random() * (movies.length/2)));
            return movies[randomIndex];
        }
        return null;
    };
    useEffect(() => {
        fetchMovies();

      }, []);
    useEffect(() => {
        setRandomMovie(getRandomMovie());
    }, [movies]);

    
    return (
        <header 
            className="relative w-full h-[415px] bg-cover bg-center"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path})`,
              }}
            >
            {/* 그림자 그라데이션 추가 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <NavBar/>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-[5px]">
              <Top10/>
              <span className="text-[13.72px] font-bold text-center">
                #{randomIndex+1} in Korea Today
              </span>
            </div>
        </header>
    );
}
