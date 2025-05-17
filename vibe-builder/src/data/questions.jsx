const questions = [
  {
    id: 1,
    question: "You get a text from a group chat, but it’s already 50 messages deep. You:",

    options: [
      { answer: "Scroll through carefully to catch up", vibe: "chaosExplorer" },
      { answer: "Ignore it and reply later", vibe: "ghostMode" },
      { answer: "Wait for someone to summarize before replying", vibe: "chillVibes" },
      { answer: "Mute the chat and reply when ready", vibe: "memeLegend" }
    ],
  },
  {
    id: 2,
    question: "You forgot your charger at home and your phone is at 5%. You:",
   meme: {
    type: "image", // or "gif"
    url: "https://www.bing.com/th/id/OGC.1d4fa5631f9ac76a097611e3f26a7e6c?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2fIeIUUyrIqoIAAAAM%2fphone-charger.gif&ehk=b68KM%2beRSz6lRK%2fXhqaq7erL%2fY%2bJ%2b6iOHbqk%2fjI%2fcG0%3d"
  },
    options: [
      { answer: "Rush to buy a new charger", vibe: "chaosExplorer" },
      { answer: "Keep using your phone till it dies", vibe: "ghostMode" },
      { answer: "Switch on battery saver and relax", vibe: "chillVibes" },
      { answer: "Borrow a charger from a nearby friend", vibe: "memeLegend" },
    ],
  },
  {
    id: 3,
    question: "You’re walking and suddenly realize you forgot your headphones. You:",

    options: [
      { answer: "Go back home to get them", vibe: "chaosExplorer" },
      { answer: "Decide to live with silence", vibe: "ghostMode" },
      { answer: "Enjoy the surrounding sounds calmly", vibe: "chillVibes" },
      { answer: "Listen to music on speaker quietly", vibe: "memeLegend" },
    ],
  },
  {
    id: 4,
    question: "Your favorite show just released a new season, but you’re busy. You:",
    options: [
      { answer: "Stay up all night binge-watching", vibe: "chaosExplorer" },
      { answer: "Wait till you’re free to watch", vibe: "ghostMode" },
      { answer: "Plan a chill weekend to watch it", vibe: "chillVibes" },
      { answer: "Watch a few episodes when you get time", vibe: "memeLegend" },
    ],
  },
  {
    id: 5,
    question: "Your friends invited you to hang out, but you forgot to tell them if you’re coming. You:",
    options: [
      { answer: "Text frantically ‘Can I still come?’", vibe: "chaosExplorer" },
      { answer: "Ignore the message and hope for the best", vibe: "ghostMode" },
      { answer: "Send a polite ‘sorry, can’t make it’", vibe: "chillVibes" },
      { answer: "Ask if you can join last minute", vibe: "memeLegend" },
    ],
  },
  {
    id: 6,
    question: "Your pet does something embarrassing in front of guests. You:",
    options: [
      { answer: "Try to cover it up quickly", vibe: "chaosExplorer" },
      { answer: "Act like nothing happened", vibe: "ghostMode" },
      { answer: "Apologize and laugh it off", vibe: "chillVibes" },
      { answer: "Change the topic smoothly", vibe: "memeLegend" },
    ],
  },
  
 {
    id: 7,
    question: "You wear a new outfit and someone immediately roasts it. You:",
    options: [
      { answer: "You just don’t get fashion.", vibe: "chaosExplorer" },
      { answer: "Stare at them like they owe you rent.", vibe: "ghostMode" },
      { answer: "Say “It’s giving main character” and strut off.", vibe: "chillVibes" },
      { answer: "Say: “Bold of you to speak in that outfit.”", vibe: "memeLegend" }, // NEW
    ],
  },
  {
    id: 8,
    question: "You hear your voice in a video recording. You:",
    options: [
      { answer: "Nah, that’s AI. I don’t sound like that.", vibe: "chaosExplorer" },
      { answer: "Throw your phone like it betrayed you.", vibe: "ghostMode" },
      { answer: "Okay, maybe I’m a podcast person now.", vibe: "chillVibes" },
      { answer: "Set it as your alarm tone and own it.", vibe: "memeLegend" }, // NEW
    ],
  },


  {
    id: 9,
    question: "You accidentally send a text meant for a friend to your boss. You:",
    options: [
      { answer: "Apologize immediately", vibe: "chaosExplorer" },
      { answer: "Pretend it never happened", vibe: "ghostMode" },
      { answer: "Send a professional follow-up", vibe: "chillVibes" },
      { answer: "Clarify and make it right", vibe: "memeLegend" },
    ],
  },
  {
    id: 10,
    question: "Your internet goes down mid-Netflix. You:",
    options: [
      { answer: "Reset the router multiple times", vibe: "chaosExplorer" },
      { answer: "Give up and stare at the wall", vibe: "ghostMode" },
      { answer: "Wait patiently for it to come back", vibe: "chillVibes" },
      { answer: "Use phone data temporarily", vibe: "memeLegend" },
    ],
  },
  {
    id: 11,
    question: "Your phone screen cracks. You:",
    options: [
      { answer: "Rush to the repair shop", vibe: "chaosExplorer" },
      { answer: "Ignore the crack and keep using", vibe: "ghostMode" },
      { answer: "Order repair and wait calmly", vibe: "chillVibes" },
      { answer: "Use a case to cover the crack", vibe: "memeLegend" },
    ],
  },
  {
    id: 12,
    question: "You realize you left your wallet at home. You:",
     options: [
      { answer: "Run back to get it", vibe: "chaosExplorer" },
      { answer: "Try to borrow money quietly", vibe: "ghostMode" },
      { answer: "Call someone to help", vibe: "chillVibes" },
      { answer: "Pay digitally instead", vibe: "memeLegend" },
    ],
  },
  {
    id: 13,
    question: "You spill coffee on your favorite shirt. You:",
    options: [
      { answer: "Try to clean it immediately", vibe: "chaosExplorer" },
      { answer: "Ignore it and keep wearing", vibe: "ghostMode" },
      { answer: "Plan to clean it later calmly", vibe: "chillVibes" },
      { answer: "Change shirt quickly", vibe: "memeLegend" },
    ],
  },
  {
    id: 14,
    question: "You wake up 10 minutes before an important appointment. You:",
    options: [
      { answer: "Rush to get ready quickly", vibe: "chaosExplorer" },
      { answer: "Skip and reschedule", vibe: "ghostMode" },
      { answer: "Get ready calmly", vibe: "chillVibes" },
      { answer: "Call to delay the appointment", vibe: "memeLegend" },
    ],
  },
  {
    id: 15,
    question: "You accidentally like a 3-year-old post while stalking someone’s profile. You:",

    options: [
      { answer: "Delete the app immediately", vibe: "chaosExplorer" },
      { answer: "Pretend nothing happened", vibe: "ghostMode" },
      { answer: "Act casual and move on", vibe: "chillVibes" },
      { answer: "Send a quick apology message", vibe: "memeLegend" },
    ],
  },
];

export default questions;
