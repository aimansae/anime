"use server";
export async function fetchData(page: number) {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();
  console.log("DATA", data);

  return data;
}
