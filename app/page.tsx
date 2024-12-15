import { fetchData } from "./actions";
import AnimeCard from "./components/AnimeCard";
import Hero from "./components/Hero";
import LoadMore from "./components/LoadMore";
import { SingleAnimeTypes } from "./types";

export default async function Home() {
  const data: SingleAnimeTypes[] = await fetchData(1);

  return (
    <main className=" flex flex-col gap-10">
      <Hero />
      <h2 className="text-2xl md:text-3xl text-white font-bold px-8">
        Explore Anime
      </h2>

      <section className="p-8  gap-10 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center">
        {data.map((anime, index) => (
          <AnimeCard key={anime.id} index={index} anime={anime}></AnimeCard>
        ))}
      </section>
      <LoadMore />
    </main>
  );
}
