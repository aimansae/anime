# Anime App

A simple anime app built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This app uses **Server Actions** to fetch and display data dynamically,coded along with JavascriptMastery(https://www.youtube.com/@javascriptmastery).


![Anime Project Preview](public/images/amIResponsive.png)

Please find the deployed version [here](https://anime-blue.vercel.app/?vercelToolbarCode=uUq8TXi4-wjm1RG)

Please find my Github Repository [here](https://github.com/aimansae?tab=repositories&q=anime&type=&language=&sort=)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)
- [Challenges](#challenges)
- [Technologies Used](#technologies-used)
- [Repository Setup](#repository-setup)
- [Deployment on Vercel](#deployment-on-vercel)
- [Future Features](#future-features)
- [Credits](#credits)


## Features

- Fetch and display anime data from an external API.
- Modern user interface styled with Tailwind CSS.
- Built with TypeScript for type safety and better developer experience.
- Utilizes Next.js Server Actions for efficient data fetching.

## Repository Setup

- Go to [GitHub](https://github.com/)
- Click New Repository
- Name your project

In VS Code terminal:

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/react-calculator.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

Run npm run dev 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What I learned

- How to use Server Actions in Next.js App Router.
- Better integration of Tailwind CSS and utility-first styling.
- Stronger understanding of TypeScript in React/Next projects.
- How to achieve infinite scroll and load functionality

## Challenges

- Implementing infinite scroll required careful handling of the `IntersectionObserver` and dynamic API requests. I iterated a few times before getting the experience smooth across devices, .

- Managing the balance between client-side rendering and Server Actions was tricky. Initially, I ran into hydration mismatches. To fix this, I separated the layout into server and client components with better clarity.

- Understanding where and how to run server-side logic in the new App Router took some trial and error:
In app/page.tsx, I used a getAnime server action to fetch the anime list directly. This kept my UI component clean and focused purely on rendering.

```bash
export const getAnime = async () => {
  const res = await fetch("https://shikimori.one/api/animes", {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 }, // ISR
  });
  return res.json();
};
```
I learned that using next: { revalidate: 60 } enables Incremental Static Regeneration, improving performance while still updating data every minute.

- Grid Layout and Image Handling in AnimeCard.tsx:
I used Tailwind’s utility classes (grid, grid-cols-1 md:grid-cols-2 lg:grid-cols-4) to build a responsive image grid.
Each card uses aspect-square to ensure uniform image sizing across rows. Inside the AnimeCard component:

```bash
<div className="relative w-full aspect-square">
  <Image
    fill
    className="object-fill rounded-xl hover:opacity-40 cursor-pointer"
    src={`https://shikimori.one/${anime.image.original}`}
    alt={anime.name}
  />
</div>
```

I had to experiment with object-fit, aspect-ratio, and responsive image props to maintain visual consistency. Image fill + aspect-square gave the best result.

- Animation Timing with Framer Motion:
I wanted cards to fade in sequentially for a better user experience. I calculated delays in batches:

const batchDelay = Math.floor(index / 8) * 2.5; // Each row adds 2.5s
const itemDelay = (index % 8) * 0.25; // Each item in row adds 0.25s

This gave a smooth staggered animation using delay in MotionDiv.

## Technologies Used
- [Next.js App router](https://nextjs.org/docs/app) 
- [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Shikimori  Anime API](https://shikimori.one/)
- [Vercel](https://vercel.com/) (for deployment)

## Future Features

- Search and filter functionality.
- Anime details modal or separate page.
- Dark mode support.

# Credits

- [Js Mastery](https://www.youtube.com/watch?v=FKZAXFjxlJI)
- [Stack Overflow](https://stackoverflow.com/)