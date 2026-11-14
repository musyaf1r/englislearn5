export type TipeSoal = "pg" | "isian" | "matching";

export interface SoalPG {
  tipe: "pg";
  pertanyaan: string;
  opsi: string[];
  kunci: string;
  ilustrasi?: IlustrasiSoal;
}

export interface SoalIsian {
  tipe: "isian";
  pertanyaan: string;
  kunci: string;
  ilustrasi?: IlustrasiSoal;
}

export interface SoalMatching {
  tipe: "matching";
  pertanyaan: string;
  pasangan: { kiri: string; kanan: string }[];
  ilustrasi?: IlustrasiSoal;
}

export type IlustrasiSoal =
  | "ball-under-chair"
  | "book-under-table"
  | "cat-in-box"
  | "pencil-next-to-book"
  | "ball-on-chair"
  | "book-on-table"
  | "position-matching"
  | "pencil-ball-matching"
  | "shadow-experiment"
  | "shadow-distance"
  | "shadow-dark"
  | "shadow-reverse"
  | "shadow-book"
  | "shadow-matching";

export type Soal = SoalPG | SoalIsian | SoalMatching;

export interface LatihanTopic {
  id: string;
  judul: string;
  soal: Soal[];
}

export const latihanList: LatihanTopic[] = [
  {
    id: "preposition",
    judul: "Object Positions",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "In the picture, the ball is below the chair. Which word describes its position?",
        opsi: ["on", "under", "in", "next to"],
        kunci: "B",
        ilustrasi: "ball-under-chair",
      },
      {
        tipe: "pg",
        pertanyaan: "A book is on a table. If it is moved to the space directly below the table, where is it?",
        opsi: ["on the table", "under the table", "in the table", "behind the table"],
        kunci: "B",
        ilustrasi: "book-under-table",
      },
      {
        tipe: "pg",
        pertanyaan: "A cat is inside a box. Which sentence describes its position?",
        opsi: ["The cat is under the box.", "The cat is in the box.", "The cat is on the box.", "The cat is next to the box."],
        kunci: "B",
        ilustrasi: "cat-in-box",
      },
      {
        tipe: "pg",
        pertanyaan: "In the picture, the pencil is beside the book, not on it. Which phrase describes their position?",
        opsi: ["next to", "under", "in", "behind"],
        kunci: "A",
        ilustrasi: "pencil-next-to-book",
      },
      {
        tipe: "pg",
        pertanyaan: "Look at the chair and ball. If the ball is moved onto the chair, which sentence is correct?",
        opsi: ["The ball is under the chair.", "The ball is on the chair.", "The ball is in the chair.", "The ball is behind the chair."],
        kunci: "B",
        ilustrasi: "ball-on-chair",
      },
      {
        tipe: "isian",
        pertanyaan: "In the picture, the cat is inside the box. The cat is ___ the box.",
        kunci: "in",
        ilustrasi: "cat-in-box",
      },
      {
        tipe: "isian",
        pertanyaan: "In the picture, the book is on top of the table. The book is ___ the table.",
        kunci: "on",
        ilustrasi: "book-on-table",
      },
      {
        tipe: "isian",
        pertanyaan: "In the picture, the ball is below the chair. The ball is ___ the chair.",
        kunci: "under",
        ilustrasi: "ball-under-chair",
      },
      {
        tipe: "matching",
        pertanyaan: "Use the picture to match each clue with the correct position.",
        pasangan: [
          { kiri: "The cat is inside the box.", kanan: "in" },
          { kiri: "The ball is below the chair.", kanan: "under" },
          { kiri: "The book is on top of the table.", kanan: "on" },
        ],
        ilustrasi: "position-matching",
      },
      {
        tipe: "matching",
        pertanyaan: "Choose the position words that match the objects in the picture.",
        pasangan: [
          { kiri: "The pencil is beside the book.", kanan: "next to" },
          { kiri: "The ball is below the chair.", kanan: "under" },
        ],
        ilustrasi: "pencil-ball-matching",
      },
    ],
  },
  {
    id: "kepemilikan",
    judul: "Clues About Who Owns Things",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Rani says, “This is ___ book.” The book belongs to Rani. Which word completes the sentence?",
        opsi: ["my", "your", "his", "her"],
        kunci: "D",
      },
      {
        tipe: "pg",
        pertanyaan: "Budi points to his own bag and says, “This is ___ bag.”",
        opsi: ["her", "his", "your", "my"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Dina asks a friend who is holding a pencil, “Is this ___ pencil?”",
        opsi: ["my", "his", "your", "her"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "I have a cat. I say, “___ cat likes milk.”",
        opsi: ["My", "Your", "His", "Her"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Sinta owns a doll, and Budi owns a ball. Which pair of sentences is correct?",
        opsi: [
          "His doll is Sinta's; her ball is Budi's.",
          "Her doll is Sinta's; his ball is Budi's.",
          "Your doll is Sinta's; my ball is Budi's.",
          "My doll is Sinta's; your ball is Budi's.",
        ],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Tono is carrying his own bag. This is ___ bag.",
        kunci: "his",
      },
      {
        tipe: "isian",
        pertanyaan: "Lina asks a friend who owns an eraser, “Is this ___ eraser?”",
        kunci: "your",
      },
      {
        tipe: "isian",
        pertanyaan: "I am talking about my own mother. I love ___ mother.",
        kunci: "my",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each owner clue with the correct sentence.",
        pasangan: [
          { kiri: "Budi is talking about his bag.", kanan: "This is his bag." },
          { kiri: "Sinta is talking about her doll.", kanan: "This is her doll." },
          { kiri: "I am talking about my book.", kanan: "This is my book." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Imagine asking a friend about their eraser. Match each situation with the missing word.",
        pasangan: [
          { kiri: "“Is this ___ eraser?” (asking a friend)", kanan: "your" },
          { kiri: "“This is ___ pencil.” (talking about my pencil)", kanan: "my" },
        ],
      },
    ],
  },
  {
    id: "ongoing-action",
    judul: "Actions Happening Now",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Look! The floor is wet, and Mother is holding a pan in the kitchen. What is she doing?",
        opsi: ["Mother is cooking.", "Mother is sleeping.", "Mother is swimming.", "Mother is drawing."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Two children are kicking a ball right now. Which sentence is correct?",
        opsi: ["They are play football.", "They is playing football.", "They are playing football.", "They played football."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Sari is holding a book and looking at its pages. What might she be doing?",
        opsi: ["She is reading.", "She is running.", "She is cooking.", "She is sleeping."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Choose the correct sentence for an activity happening right now.",
        opsi: ["I is doing my homework.", "I am doing my homework.", "I are doing my homework.", "I doing my homework."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "The bird is moving through the air right now. Which sentence is correct?",
        opsi: ["The bird is fly.", "The bird are flying.", "The bird is flying.", "The bird flying."],
        kunci: "C",
      },
      {
        tipe: "isian",
        pertanyaan: "Riko is holding a pen and writing a message. He is ___ a letter.",
        kunci: "writing",
      },
      {
        tipe: "isian",
        pertanyaan: "We are walking to school right now. We are ___ to school.",
        kunci: "walking",
      },
      {
        tipe: "isian",
        pertanyaan: "Nina is holding a glass and drinking from it. She is ___ water.",
        kunci: "drinking",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each clue about an action happening now with the correct sentence.",
        pasangan: [
          { kiri: "A book is open in front of her.", kanan: "She is reading." },
          { kiri: "A ball is at their feet and they are kicking it.", kanan: "They are playing." },
          { kiri: "He is in bed with his eyes closed.", kanan: "He is sleeping." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Match each subject with the correct form of a sentence about an action happening now.",
        pasangan: [
          { kiri: "I ___ drawing now.", kanan: "am" },
          { kiri: "They ___ running now.", kanan: "are" },
        ],
      },
    ],
  },
  {
    id: "like-can",
    judul: "Likes and Abilities",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Ari can swim, but he does not like cold water. Which sentence is correct?",
        opsi: ["Ari can't swim.", "Ari likes cold water.", "Ari can swim, but he doesn't like cold water.", "Ari doesn't like swimming."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The baby cannot walk alone yet. Which sentence is the best choice?",
        opsi: ["The baby can walk.", "The baby can't walk yet.", "The baby likes walking.", "The baby doesn't like walking."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Mia always chooses chocolate and says it tastes good. What can we conclude?",
        opsi: ["Mia doesn't like chocolate.", "Mia likes chocolate.", "Mia can't eat chocolate.", "Mia can make chocolate."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "A fish lives in water and moves with its fins. Which sentence is correct?",
        opsi: ["A fish can fly.", "A fish can't swim.", "A fish can swim, but it can't fly.", "A fish likes flying."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Dina enjoys reading, but she did not bring a book today. Which sentence tells only what she likes?",
        opsi: ["Dina can read.", "Dina likes reading.", "Dina can't read.", "Dina doesn't like books."],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Rafa is able to kick a ball. Rafa ___ kick a ball.",
        kunci: "can",
      },
      {
        tipe: "isian",
        pertanyaan: "Sita does not like bitter food. She ___ like bitter food.",
        kunci: "doesn't",
      },
      {
        tipe: "isian",
        pertanyaan: "Birds have wings and are able to fly. Birds ___ fly.",
        kunci: "can",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each fact with the correct conclusion.",
        pasangan: [
          { kiri: "Tono chooses apples every time he eats.", kanan: "He likes apples." },
          { kiri: "Mira cannot ride a bike yet.", kanan: "She can't ride a bike." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Tell the difference between likes and abilities using the clues.",
        pasangan: [
          { kiri: "Beni is able to swim.", kanan: "He can swim." },
          { kiri: "Lala chooses ice cream because it tastes good.", kanan: "She likes ice cream." },
        ],
      },
    ],
  },
  {
    id: "shadow",
    judul: "Light and Shadows",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "In the picture, a lamp shines on an object. Where does the shadow form?",
        opsi: ["Between the lamp and the object.", "Behind the object, away from the lamp.", "Above the lamp.", "No shadow forms."],
        kunci: "B",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "pg",
        pertanyaan: "The object blocks the lamp's light. What usually happens to its shadow if the object moves away from the lamp and toward the screen?",
        opsi: ["The shadow usually gets smaller.", "The shadow usually gets bigger.", "The light turns into water.", "The lamp is no longer needed."],
        kunci: "A",
        ilustrasi: "shadow-distance",
      },
      {
        tipe: "pg",
        pertanyaan: "Rani turns off the lamp and closes the window, making the room dark. Why is it hard to see an object's shadow?",
        opsi: ["There is not enough light to form a visible shadow.", "The object turns into light.", "Shadows are always in the sky.", "The dark makes objects disappear."],
        kunci: "A",
        ilustrasi: "shadow-dark",
      },
      {
        tipe: "pg",
        pertanyaan: "If the lamp in the picture moves to the object's right side, which way does the shadow move?",
        opsi: ["To the right, away from the lamp.", "To the left, away from the lamp.", "It stays between the lamp and the object.", "The shadow turns into a lamp."],
        kunci: "B",
        ilustrasi: "shadow-reverse",
      },
      {
        tipe: "pg",
        pertanyaan: "Which object is most likely to make a clear shadow when placed in front of a lamp?",
        opsi: ["Clear glass.", "Air.", "A thick book.", "Clear water."],
        kunci: "C",
        ilustrasi: "shadow-book",
      },
      {
        tipe: "isian",
        pertanyaan: "In the picture, the object blocks the lamp's light and makes a ___.",
        kunci: "shadow",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "isian",
        pertanyaan: "For a shadow to appear on the screen, the object must block the ___.",
        kunci: "light",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "isian",
        pertanyaan: "If light comes from the left, the shadow forms on the ___ side of the object.",
        kunci: "right",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "matching",
        pertanyaan: "Use the experiment picture to match each situation with its result.",
        pasangan: [
          { kiri: "An object blocks the lamp's light.", kanan: "A shadow appears." },
          { kiri: "There is no light in the room.", kanan: "The shadow is hard to see." },
        ],
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each change in the experiment with its result.",
        pasangan: [
          { kiri: "The lamp moves to the object's right.", kanan: "The shadow moves to the left." },
          { kiri: "A thick book is placed in front of the lamp.", kanan: "A clear shadow can appear." },
        ],
        ilustrasi: "shadow-matching",
      },
    ],
  },
  {
    id: "sky-objects",
    judul: "Observing Things in the Sky",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "The sun is shining brightly as the children leave for school in the morning. Which object gives us most of our daylight?",
        opsi: ["the moon", "the stars", "the sun", "the clouds"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The sky is clear and dark tonight. Which objects might twinkle?",
        opsi: ["stars", "cars", "fish", "trees"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Thick clouds cover the sun. Why does the yard feel shadier?",
        opsi: ["The clouds block some sunlight.", "The sun turns into the moon.", "A plane turns off the sun.", "The stars absorb all the clouds."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "It has wings, carries passengers, and flies high. What is it?",
        opsi: ["a fish", "a plane", "a table", "a moon"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "You see a bird and a plane in the sky. Which conclusion makes the most sense?",
        opsi: ["Only planes can fly.", "Both birds and planes can fly.", "Birds are clouds.", "Planes swim in the sky."],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "The bright object in the daytime sky that warms Earth is the ___.",
        kunci: "sun",
      },
      {
        tipe: "isian",
        pertanyaan: "Birds use their wings to ___ in the sky.",
        kunci: "fly",
      },
      {
        tipe: "isian",
        pertanyaan: "When the sky gets dark and stars begin to appear, it is usually ___.",
        kunci: "night",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each observation clue with the correct object in the sky.",
        pasangan: [
          { kiri: "It gives bright light during the day.", kanan: "the sun" },
          { kiri: "They may twinkle on a clear night.", kanan: "stars" },
          { kiri: "They look white and move across the sky.", kanan: "clouds" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Match each object with the clue that describes it best.",
        pasangan: [
          { kiri: "A vehicle that carries passengers high in the sky.", kanan: "plane" },
          { kiri: "An animal with wings that can fly.", kanan: "bird" },
        ],
      },
    ],
  },
  {
    id: "past-tense",
    judul: "Telling Stories About the Past",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Bima played football yesterday. Which sentence correctly describes his action?",
        opsi: ["Bima play football yesterday.", "Bima plays football yesterday.", "Bima played football yesterday.", "Bima is playing football yesterday."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Sari walked to school this morning. Choose the correct verb to complete “Sari ___ to school this morning.”",
        opsi: ["walk", "walks", "walked", "walking"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "They watched a movie last night, not now. Which sentence is correct?",
        opsi: ["They watch a movie last night.", "They watched a movie last night.", "They are watching a movie last night.", "They watches a movie last night."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "The cat jumped over the fence yesterday. Which sentence shows a finished action?",
        opsi: ["The cat jumps over the fence.", "The cat is jumping over the fence.", "The cat jumped over the fence yesterday.", "The cat jump over the fence yesterday."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Put these time words in order from earliest to closest to now.",
        opsi: ["today, yesterday, tomorrow", "yesterday, today, tomorrow", "tomorrow, today, yesterday", "today, tomorrow, yesterday"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Complete the sentence: We ___ in the park last week. (play)",
        kunci: "played",
      },
      {
        tipe: "isian",
        pertanyaan: "Complete the sentence: He ___ a movie last night. (watch)",
        kunci: "watched",
      },
      {
        tipe: "isian",
        pertanyaan: "Complete the sentence: The girl ___ high yesterday. (jump)",
        kunci: "jumped",
      },
      {
        tipe: "matching",
        pertanyaan: "Match each time clue with the correct verb form.",
        pasangan: [
          { kiri: "Yesterday, I ___ football.", kanan: "played" },
          { kiri: "Last night, she ___ TV.", kanan: "watched" },
          { kiri: "Last Sunday, we ___ to the park.", kanan: "walked" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Match each word with its meaning.",
        pasangan: [
          { kiri: "yesterday", kanan: "the day before today" },
          { kiri: "last night", kanan: "the night before today" },
        ],
      },
    ],
  },
];

export function getLatihanById(id: string): LatihanTopic | undefined {
  return latihanList.find((latihan) => latihan.id === id);
}
