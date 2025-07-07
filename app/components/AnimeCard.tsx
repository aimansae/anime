import React from "react";
import { AnimeDataTypes } from "../types";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
/* eslint-disable @next/next/no-img-element */
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimeCard = ({ anime, index }: AnimeDataTypes) => {
  console.log("Image Path:", anime.image.original);
  const batchDelay = Math.floor(index / 8) * 2.5; // Delay increases by 2s for every batch of 8
  const itemDelay = (index % 8) * 0.25; // Delay for items within the batch
  const totalDelay = batchDelay + itemDelay;
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: totalDelay, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="object-fill rounded-xl hover:opacity-40 cursor-pointer"
          src={`https://shikimori.one/${anime.image.original}`}
          alt={anime.name}
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
