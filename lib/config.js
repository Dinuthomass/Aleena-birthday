// ✏️ EDIT THIS FILE to personalise the whole website.

export const CONFIG = {
  // Her name (shown on the intro + celebration screens)
  name: "Aleena Kochee",

  // Your name (shown at the bottom of the final message)
  fromName: "Me",

  // Final birthday message
  birthdayMessage:
    "Happy Birthday! 🎂 You make every ordinary day feel special. Thank you for being you, and for saying yes. I love you more than words (and way more than this silly website) can say! 💖",

  // 💌 The letter inside the envelope (opens as a popup).
  // The treasure-hunt picture is /public/photos/treasure-hunt.jpg
  letter: {
    eyebrow: "A surprise awaits",
    greeting: "My Dear",
    paragraphs: [
      "There is a little surprise hidden somewhere just for you, and it is a very special one.",
      "To find it, follow the pictures below, one clue at a time. Each moment will lead you a step closer to your gift.",
    ],
    image: "/photos/treasure-hunt.jpg",
    imageAlt: "Treasure hunt clues: flowers, our ride, and a mystery gift box",
    imageCaption: "Follow the clues",
    signoff: "Happy hunting,",
    signoffName: "the gift", // shown after the signoff: "Happy hunting, the gift"
    buttonLabel: "Start the hunt",

    // ⏱️ Shown after she taps "Start the hunt"
    huntMinutes: 10, // ✏️ countdown length in minutes
    huntTitle: "Reach the location!",
    huntMessage:
      "Use the clue pictures above to find the location, then reach there before the timer runs out. Your gift is waiting for you there!",
    timesUp: "Time's up! Hurry, your gift is still waiting for you at the location 🎁",
  },

  // 📸 Photos shown under "Our little memories" (files live in /public/photos).
  // Example: { src: "/photos/1.jpg", caption: "Our first trip ✈️" }
  photos: [
    { src: "/photos/memory-1.jpg" },
    { src: "/photos/memory-2.jpg" },
    { src: "/photos/memory-3.jpg" },
    { src: "/photos/memory-4.jpg" },
    { src: "/photos/memory-5.jpg" },
    { src: "/photos/memory-6.jpg" },
  ],
};

// Each question: the text, the "Yes" reply, and the messages that appear
// (one after another) every time she tries to hover / tap the "No" button.
export const QUESTIONS = [
  {
    id: "like",
    emoji: "🥰",
    text: "Do you like me?",
    yesLabel: "Yes",
    noLabel: "No",
    noMessages: [
      "Hey, why are you going for that button? 🤨",
      "Nice try! It ran away 😜",
      "Are you sure? Think again... 🥺",
      "That button is shy, leave it alone! 🙈",
      "Okay stop, you're hurting my feelings 😭",
      "Your finger is slipping, the Yes button is right there 👉",
      "I can do this all day, can you? 😎",
      "Fine, I'll make Yes bigger. Now click it! 😤",
      "Pleeeease say yes 🥹",
      "Resistance is futile 💖",
    ],
  },
  {
    id: "love",
    emoji: "😍",
    text: "Do you love me?",
    yesLabel: "Obviously",
    noLabel: "Nope",
    noMessages: [
      "Wrong button again, bestie 😏",
      "Ohh, you really think you can catch it? 😂",
      "I know you love me, don't lie 🥰",
      "Stop chasing it, you'll get tired 🏃‍♀️",
      "The No button has left the chat 👋",
      "Your heart says yes, I can hear it 💓",
      "Come ooon, just one little yes 🥺",
      "Why so stubborn? Still love you though 😘",
    ],
  },
  {
    id: "forgive",
    emoji: "🙏",
    text: "Will you forgive me for all my silly mistakes?",
    yesLabel: "Forgiven",
    noLabel: "Never",
    noMessages: [
      "I promise to bring chocolates 🍫",
      "Hmm, what if I buy you pizza? 🍕",
      "The button doesn't forgive you for clicking it 😂",
      "Sorry, sorry, sorry! 🥺",
      "Please? I'll be good for a whole week 🤞",
      "That's it, I'm doing puppy eyes 🐶",
      "Okay okay, you're too fast for me 😅",
    ],
  },
  {
    id: "date",
    emoji: "💌",
    text: "Will you spend your birthday with me, today and forever?",
    yesLabel: "Yes, always",
    noLabel: "Maybe",
    noMessages: [
      "'Maybe' is not an option here 😤",
      "Wow, rejected by a button 😭",
      "Try the other one, it's prettier ✨",
      "You can't catch it, it's too clever 🧠",
      "Last chance before I send a sad emoji 😢",
      "Okay, this is getting serious 💘",
    ],
  },
];
