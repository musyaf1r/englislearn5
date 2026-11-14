// ============================================================
//  DATA MATERI & SOAL — di-hardcode PERSIS sesuai konten yang
//  diberikan. JANGAN mengubah atau menambah isi file ini.
// ============================================================

export type TipeSoal = "pg" | "isian" | "matching";

export interface SoalPG {
  tipe: "pg";
  pertanyaan: string;
  opsi: string[];
  kunci: string; // "A" | "B" | "C" | "D"
}

export interface SoalIsian {
  tipe: "isian";
  pertanyaan: string;
  kunci: string;
}

export interface SoalMatching {
  tipe: "matching";
  pertanyaan: string;
  pasangan: { kiri: string; kanan: string }[];
}

export type Soal = SoalPG | SoalIsian | SoalMatching;

export interface Materi {
  id: string;
  judul: string;
  penjelasan: string;
  contoh: string[];
  vocabulary: { kata: string; arti: string }[];
  soal: Soal[];
}

export const materiList: Materi[] = [
  // ========================================================
  //  Materi 1
  // ========================================================
  {
    id: "preposition",
    judul: "Preposition 📦",
    penjelasan:
      "Preposition adalah kata yang menunjukkan tempat. Kita pakai: in (di dalam), on (di atas), under (di bawah), behind (di belakang), next to (di sebelah).",
    contoh: [
      "The cat is in the box.",
      "The book is on the table.",
      "The ball is under the chair.",
    ],
    vocabulary: [
      { kata: "in", arti: "di dalam" },
      { kata: "on", arti: "di atas" },
      { kata: "under", arti: "di bawah" },
      { kata: "behind", arti: "di belakang" },
      { kata: "next to", arti: "di sebelah" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "The bird is ___ the tree.",
        opsi: ["in", "on", "behind", "under"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The cat is ___ the box.",
        opsi: ["on", "in", "under", "next to"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "The ball is ___ the table.",
        opsi: ["under", "in", "on", "behind"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "My pencil is ___ my book.",
        opsi: ["behind", "under", "next to", "in"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The dog is ___ the door.",
        opsi: ["in", "next to", "on", "under"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "The fish is ___ the aquarium. (in/on)",
        kunci: "in",
      },
      {
        tipe: "isian",
        pertanyaan: "The apple is ___ the plate. (on/under)",
        kunci: "on",
      },
      {
        tipe: "isian",
        pertanyaan: "I hide ___ the door. (behind/next to)",
        kunci: "behind",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "in", kanan: "di dalam" },
          { kiri: "on", kanan: "di atas" },
          { kiri: "under", kanan: "di bawah" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "behind", kanan: "di belakang" },
          { kiri: "next to", kanan: "di sebelah" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 2
  // ========================================================
  {
    id: "kepemilikan",
    judul: "Kepemilikan (My, Your, His, Her) 🎒",
    penjelasan:
      "Kata ganti kepemilikan menunjukkan pemilik benda. My = milikku, your = milikmu, his = milik dia (laki-laki), her = milik dia (perempuan).",
    contoh: [
      "This is my bag.",
      "Is this your pencil?",
      "His ball is red.",
      "Her doll is pretty.",
    ],
    vocabulary: [
      { kata: "my", arti: "milikku" },
      { kata: "your", arti: "milikmu" },
      { kata: "his", arti: "miliknya (laki-laki)" },
      { kata: "her", arti: "miliknya (perempuan)" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "This is ___ book. (aku)",
        opsi: ["my", "your", "his", "her"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "___ name is Budi. (Budi = laki-laki)",
        opsi: ["Her", "His", "My", "Your"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Sinta lost ___ doll. (Sinta = perempuan)",
        opsi: ["his", "your", "her", "my"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Is this ___ eraser? (temanmu)",
        opsi: ["my", "his", "your", "her"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "I love ___ mother very much.",
        opsi: ["his", "her", "my", "your"],
        kunci: "C",
      },
      {
        tipe: "isian",
        pertanyaan: "Ana brushes ___ teeth every day. (her/his)",
        kunci: "her",
      },
      {
        tipe: "isian",
        pertanyaan: "Father drives ___ car. (his/my)",
        kunci: "his",
      },
      {
        tipe: "isian",
        pertanyaan: "___ bag is heavy! (milikku)",
        kunci: "my",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "my", kanan: "milikku" },
          { kiri: "your", kanan: "milikmu" },
          { kiri: "his", kanan: "miliknya (laki-laki)" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "her", kanan: "miliknya (perempuan)" },
          { kiri: "my", kanan: "milikku" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 3
  // ========================================================
  {
    id: "ongoing-action",
    judul: "Ongoing Action 🏃",
    penjelasan:
      "Untuk bilang aksi yang sedang terjadi sekarang, pakai is/are + kata kerja + ing. He/She is reading. They are playing.",
    contoh: [
      "She is reading a book.",
      "They are playing football.",
      "I am eating rice.",
    ],
    vocabulary: [
      { kata: "reading", arti: "membaca" },
      { kata: "playing", arti: "bermain" },
      { kata: "eating", arti: "makan" },
      { kata: "running", arti: "berlari" },
      { kata: "sleeping", arti: "tidur" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Look! The baby is ___.",
        opsi: ["sleep", "sleeping", "slept", "sleeps"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "They are ___ football now.",
        opsi: ["play", "plays", "playing", "played"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Mother is ___ in the kitchen.",
        opsi: ["cooking", "cooks", "cook", "cooked"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "I ___ doing my homework.",
        opsi: ["is", "are", "am", "be"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The bird is ___ in the sky.",
        opsi: ["fly", "flying", "flies", "flew"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "He is ___ a letter. (write → writing/writes)",
        kunci: "writing",
      },
      {
        tipe: "isian",
        pertanyaan: "We are ___ to school. (walk → walking/walks)",
        kunci: "walking",
      },
      {
        tipe: "isian",
        pertanyaan: "She is ___ water. (drink)",
        kunci: "drinking",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "reading", kanan: "membaca" },
          { kiri: "cooking", kanan: "memasak" },
          { kiri: "sleeping", kanan: "tidur" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "playing", kanan: "bermain" },
          { kiri: "running", kanan: "berlari" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 4
  // ========================================================
  {
    id: "like-can",
    judul: "Like / Don't Like / Can / Can't ❤️",
    penjelasan:
      "I like... = aku suka. I don't like... = aku tidak suka. I can... = aku bisa. I can't... = aku tidak bisa.",
    contoh: [
      "I like ice cream.",
      "I don't like spicy food.",
      "She can swim.",
      "He can't ride a bike.",
    ],
    vocabulary: [
      { kata: "like", arti: "suka" },
      { kata: "don't like", arti: "tidak suka" },
      { kata: "can", arti: "bisa" },
      { kata: "can't", arti: "tidak bisa" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "I ___ chocolate. It is sweet!",
        opsi: ["don't like", "like", "can't", "am"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "A baby ___ walk.",
        opsi: ["can", "can't", "like", "likes"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Cats ___ fish.",
        opsi: ["don't like", "can't", "like", "am"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "I ___ like vegetables. (tidak suka)",
        opsi: ["can", "am", "don't", "is"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "A fish ___ fly.",
        opsi: ["can", "can't", "like", "likes"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "I ___ play football. (bisa)",
        kunci: "can",
      },
      {
        tipe: "isian",
        pertanyaan: "She ___ like bitter food. (tidak)",
        kunci: "doesn't",
      },
      {
        tipe: "isian",
        pertanyaan: "Birds ___ fly high. (can/can't)",
        kunci: "can",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "like", kanan: "suka" },
          { kiri: "don't like", kanan: "tidak suka" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "can", kanan: "bisa" },
          { kiri: "can't", kanan: "tidak bisa" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 5
  // ========================================================
  {
    id: "shadow",
    judul: "Shadow 🌗",
    penjelasan:
      "A shadow (bayangan) muncul ketika cahaya terhalang benda. Bayangan berubah bentuk dan bisa panjang atau pendek.",
    contoh: [
      "The tree has a big shadow.",
      "My shadow follows me everywhere.",
      "At night, the shadow is long.",
    ],
    vocabulary: [
      { kata: "shadow", arti: "bayangan" },
      { kata: "light", arti: "cahaya" },
      { kata: "dark", arti: "gelap" },
      { kata: "long", arti: "panjang" },
      { kata: "short", arti: "pendek" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "A shadow appears when light is ___.",
        opsi: ["bright", "blocked", "blue", "big"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "My shadow ___ me when I walk.",
        opsi: ["follows", "eats", "sleeps", "flies"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "The shadow is ___ at noon. (pendek)",
        opsi: ["long", "short", "big", "tall"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "A shadow needs ___ to appear.",
        opsi: ["rain", "light", "snow", "wind"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "At sunset, shadows are ___.",
        opsi: ["short", "long", "gone", "blue"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "A shadow is ___ at night. (long/short)",
        kunci: "long",
      },
      {
        tipe: "isian",
        pertanyaan: "No light, no ___.",
        kunci: "shadow",
      },
      {
        tipe: "isian",
        pertanyaan: "The lamp makes a ___ on the wall.",
        kunci: "shadow",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "shadow", kanan: "bayangan" },
          { kiri: "light", kanan: "cahaya" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "long", kanan: "panjang" },
          { kiri: "short", kanan: "pendek" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 6
  // ========================================================
  {
    id: "sky-objects",
    judul: "Objects at the Sky ☁️",
    penjelasan:
      "Benda-benda di langit: the sun shines in the day, the moon and stars shine at night, clouds are white, a plane flies high.",
    contoh: [
      "The sun is bright.",
      "The moon is out at night.",
      "The plane flies in the sky.",
    ],
    vocabulary: [
      { kata: "sun", arti: "matahari" },
      { kata: "moon", arti: "bulan" },
      { kata: "stars", arti: "bintang" },
      { kata: "clouds", arti: "awan" },
      { kata: "plane", arti: "pesawat" },
      { kata: "bird", arti: "burung" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "The ___ shines in the day.",
        opsi: ["moon", "stars", "sun", "owl"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "We can see the ___ at night.",
        opsi: ["sun", "moon", "rainbow", "plane"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "___ are white and float in the sky.",
        opsi: ["Stars", "Clouds", "Birds", "Kites"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "A ___ flies very high.",
        opsi: ["fish", "car", "plane", "cat"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The ___ twinkle at night.",
        opsi: ["clouds", "stars", "sun", "rain"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "The ___ is round and yellow.",
        kunci: "sun",
      },
      {
        tipe: "isian",
        pertanyaan: "Birds ___ in the sky. (fly/swim)",
        kunci: "fly",
      },
      {
        tipe: "isian",
        pertanyaan: "The moon is out at ___. (night/day)",
        kunci: "night",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "sun", kanan: "matahari" },
          { kiri: "moon", kanan: "bulan" },
          { kiri: "stars", kanan: "bintang" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "clouds", kanan: "awan" },
          { kiri: "plane", kanan: "pesawat" },
        ],
      },
    ],
  },

  // ========================================================
  //  Materi 7
  // ========================================================
  {
    id: "past-tense",
    judul: "Past Tense 🕰️",
    penjelasan:
      "Past tense dipakai untuk kegiatan yang sudah selesai kemarin. Tambahkan -ed: play → played, walk → walked, jump → jumped, watch → watched.",
    contoh: [
      "I played football yesterday.",
      "She walked to school this morning.",
      "They watched TV last night.",
    ],
    vocabulary: [
      { kata: "played", arti: "bermain (lampau)" },
      { kata: "walked", arti: "berjalan" },
      { kata: "jumped", arti: "melompat" },
      { kata: "watched", arti: "menonton" },
      { kata: "yesterday", arti: "kemarin" },
    ],
    soal: [
      {
        tipe: "pg",
        pertanyaan: "I ___ football yesterday.",
        opsi: ["play", "plays", "played", "playing"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "She ___ to school this morning.",
        opsi: ["walk", "walks", "walked", "walking"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "They ___ TV last night.",
        opsi: ["watch", "watches", "watched", "watching"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "The cat ___ over the fence.",
        opsi: ["jump", "jumps", "jumped", "jumping"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: '"Yesterday" means ___.',
        opsi: ["today", "tomorrow", "kemarin", "sekarang"],
        kunci: "C",
      },
      {
        tipe: "isian",
        pertanyaan: "We ___ in the park last Sunday. (play)",
        kunci: "played",
      },
      {
        tipe: "isian",
        pertanyaan: "He ___ a movie last night. (watch)",
        kunci: "watched",
      },
      {
        tipe: "isian",
        pertanyaan: "The girl ___ high. (jump → kemarin)",
        kunci: "jumped",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "played", kanan: "bermain" },
          { kiri: "walked", kanan: "berjalan" },
          { kiri: "jumped", kanan: "melompat (lampau)" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata berikut dengan artinya.",
        pasangan: [
          { kiri: "watched", kanan: "menonton (lampau)" },
          { kiri: "yesterday", kanan: "kemarin" },
        ],
      },
    ],
  },
];

export function getMateriById(id: string): Materi | undefined {
  return materiList.find((m) => m.id === id);
}
