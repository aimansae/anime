"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchData } from "../actions";
import { SingleAnimeTypes } from "../types";
import AnimeCard from "./AnimeCard";

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<SingleAnimeTypes[]>([]);

  useEffect(() => {
    if (inView) {
      fetchData(page).then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        setPage(page + 1);
      });
    }
  }, [inView, page]);
  return (
    <>
      <section className="p-8 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((anime, index) => (
          <AnimeCard key={anime.id} index={index} anime={anime}></AnimeCard>
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref} className="g">
          <Image
            alt="spinner"
            src="/spinner.svg"
            width={56}
            height={56}
            className="object-contain"
          />
          <h2>{`Loading`}</h2>
        </div>
      </section>
    </>
  );
};

export default LoadMore;
