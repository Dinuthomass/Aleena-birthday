# Birthday Surprise 💖

A funny, romantic birthday website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

- Asks a series of questions ("Do you like me?" ...)
- The **No** button runs away whenever she hovers or taps it, and a new funny message appears under it every time
- The **Yes** button keeps growing
- Clicking Yes moves to the next question; after the last one, a birthday celebration with falling confetti appears
- Photo gallery ready to be filled later

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customise

Everything is in `lib/config.js`:

- `name`, `fromName`, `birthdayMessage`
- `QUESTIONS`: edit questions, button labels and the "No" messages

## Add her photos later

1. Copy images into `public/photos/` (e.g. `1.jpg`, `2.jpg`)
2. In `lib/config.js` fill the list:

```js
photos: [
  { src: "/photos/1.jpg", caption: "Our first trip ✈️" },
  { src: "/photos/2.jpg", caption: "That smile 😍" },
],
```

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) (free), then share the link with her.
