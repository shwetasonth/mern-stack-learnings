const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/whatsup`);
}
main()
  .then(() => {
    console.log("connection to mongodb successfull");
  })
  .catch((err) => console.log(err));

const messages = [
  {
    from: "Alice",
    to: "Bob",
    msg: "Hello Bob, how are you?",
    created_At: "2026-08-01T09:00:00"
  },
  {
    from: "Bob",
    to: "Alice",
    msg: "I am good, thank you!",
    created_At: "2026-08-01T09:15:00"
  },
  {
    from: "John",
    to: "David",
    msg: "Are you coming today?",
    created_At: "2026-08-01T10:00:00"
  },
  {
    from: "David",
    to: "John",
    msg: "Yes, I will be there.",
    created_At: "2026-08-01T10:30:00"
  },
  {
    from: "Emma",
    to: "Sophia",
    msg: "Did you complete the project?",
    created_At: "2026-08-02T11:00:00"
  },
  {
    from: "Sophia",
    to: "Emma",
    msg: "Yes, I completed it yesterday.",
    created_At: "2026-08-02T11:20:00"
  },
  {
    from: "Michael",
    to: "James",
    msg: "Let's meet tomorrow.",
    created_At: "2026-08-03T12:00:00"
  },
  {
    from: "James",
    to: "Michael",
    msg: "Sure, what time?",
    created_At: "2026-08-03T12:15:00"
  },
  {
    from: "Olivia",
    to: "Liam",
    msg: "Can you send me the files?",
    created_At: "2026-08-04T13:00:00"
  },
  {
    from: "Liam",
    to: "Olivia",
    msg: "Sure, I will send them soon.",
    created_At: "2026-08-04T13:30:00"
  },
  {
    from: "Daniel",
    to: "Lucas",
    msg: "Have you finished your work?",
    created_At: "2026-08-05T14:00:00"
  },
  {
    from: "Lucas",
    to: "Daniel",
    msg: "Almost finished.",
    created_At: "2026-08-05T14:20:00"
  },
  {
    from: "Mia",
    to: "Noah",
    msg: "What are you doing today?",
    created_At: "2026-08-06T15:00:00"
  },
  {
    from: "Noah",
    to: "Mia",
    msg: "I am working from home.",
    created_At: "2026-08-06T15:15:00"
  },
  {
    from: "Ethan",
    to: "Henry",
    msg: "Let's go for lunch.",
    created_At: "2026-08-07T12:00:00"
  },
  {
    from: "Henry",
    to: "Ethan",
    msg: "Sounds good to me.",
    created_At: "2026-08-07T12:10:00"
  },
  {
    from: "Ava",
    to: "Isabella",
    msg: "Can you help me with this?",
    created_At: "2026-08-08T16:00:00"
  },
  {
    from: "Isabella",
    to: "Ava",
    msg: "Of course, I will help you.",
    created_At: "2026-08-08T16:20:00"
  },
  {
    from: "William",
    to: "Benjamin",
    msg: "See you tomorrow.",
    created_At: "2026-08-09T18:00:00"
  },
  {
    from: "Benjamin",
    to: "William",
    msg: "See you tomorrow!",
    created_At: "2026-08-09T18:10:00"
  }
];
  

 Chat.insertMany(messages).then((data)=>{
  console.log(data)
 }).catch(err=>console.log(err))
