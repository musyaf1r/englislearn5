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
    judul: "Posisi Benda",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Pada gambar, bola berada di bawah kursi. Kata yang tepat adalah ___.",
        opsi: ["on", "under", "in", "next to"],
        kunci: "B",
        ilustrasi: "ball-under-chair",
      },
      {
        tipe: "pg",
        pertanyaan: "Buku berada di atas meja. Jika dipindahkan ke ruang tepat di bawah meja, posisi barunya adalah ___.",
        opsi: ["on the table", "under the table", "in the table", "behind the table"],
        kunci: "B",
        ilustrasi: "book-under-table",
      },
      {
        tipe: "pg",
        pertanyaan: "Kucing berada di dalam kotak. Kalimat yang sesuai adalah ___.",
        opsi: ["The cat is under the box.", "The cat is in the box.", "The cat is on the box.", "The cat is next to the box."],
        kunci: "B",
        ilustrasi: "cat-in-box",
      },
      {
        tipe: "pg",
        pertanyaan: "Pada gambar, pensil dan buku berdekatan tanpa bertumpuk. Ungkapan posisi yang tepat adalah ___.",
        opsi: ["next to", "under", "in", "behind"],
        kunci: "A",
        ilustrasi: "pencil-next-to-book",
      },
      {
        tipe: "pg",
        pertanyaan: "Lihat gambar kursi dan bola. Jika bola dipindahkan ke atas kursi, kalimat yang benar adalah ___.",
        opsi: ["The ball is under the chair.", "The ball is on the chair.", "The ball is in the chair.", "The ball is behind the chair."],
        kunci: "B",
        ilustrasi: "ball-on-chair",
      },
      {
        tipe: "isian",
        pertanyaan: "Pada gambar, kucing ada di dalam kotak. The cat is ___ the box.",
        kunci: "in",
        ilustrasi: "cat-in-box",
      },
      {
        tipe: "isian",
        pertanyaan: "Pada gambar, buku ada di atas meja. The book is ___ the table.",
        kunci: "on",
        ilustrasi: "book-on-table",
      },
      {
        tipe: "isian",
        pertanyaan: "Bola pada gambar ada di bawah kursi. The ball is ___ the chair.",
        kunci: "under",
        ilustrasi: "ball-under-chair",
      },
      {
        tipe: "matching",
        pertanyaan: "Gunakan gambar untuk memasangkan petunjuk dengan posisi yang tepat.",
        pasangan: [
          { kiri: "The cat is inside the box.", kanan: "in" },
          { kiri: "The ball is below the chair.", kanan: "under" },
          { kiri: "The book is on top of the table.", kanan: "on" },
        ],
        ilustrasi: "position-matching",
      },
      {
        tipe: "matching",
        pertanyaan: "Pilih kata posisi yang cocok dengan hubungan benda pada gambar.",
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
    judul: "Petunjuk Pemilik Benda",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Rani berkata, “This is ___ book.” Buku itu milik Rani. Kata yang tepat adalah ___.",
        opsi: ["my", "your", "his", "her"],
        kunci: "D",
      },
      {
        tipe: "pg",
        pertanyaan: "Budi menunjuk tasnya sendiri dan berkata, “This is ___ bag.”",
        opsi: ["her", "his", "your", "my"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Dina bertanya kepada teman yang sedang memegang pensil, “Is this ___ pencil?”",
        opsi: ["my", "his", "your", "her"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Aku memiliki seekor kucing. Aku berkata, “___ cat likes milk.”",
        opsi: ["My", "Your", "His", "Her"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Ada satu boneka milik Sinta dan satu bola milik Budi. Pasangan kalimat yang benar adalah ___.",
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
        pertanyaan: "Tono membawa tas miliknya sendiri. This is ___ bag.",
        kunci: "his",
      },
      {
        tipe: "isian",
        pertanyaan: "Lina berkata kepada teman yang memiliki penghapus, “Is this ___ eraser?”",
        kunci: "your",
      },
      {
        tipe: "isian",
        pertanyaan: "Aku sedang berbicara tentang ibu milikku. I love ___ mother.",
        kunci: "my",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan petunjuk pemilik dengan kalimat yang sesuai.",
        pasangan: [
          { kiri: "Budi berbicara tentang tas miliknya.", kanan: "This is his bag." },
          { kiri: "Sinta berbicara tentang boneka miliknya.", kanan: "This is her doll." },
          { kiri: "Aku berbicara tentang bukuku.", kanan: "This is my book." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Bayangkan kamu bertanya kepada teman tentang penghapusnya. Pasangkan situasi dengan kata yang hilang.",
        pasangan: [
          { kiri: "“Is this ___ eraser?” (bertanya kepada teman)", kanan: "your" },
          { kiri: "“This is ___ pencil.” (berbicara tentang pensilku)", kanan: "my" },
        ],
      },
    ],
  },
  {
    id: "ongoing-action",
    judul: "Aksi yang Sedang Berlangsung",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Lihat! Lantai basah dan ibu memegang panci di dapur. What is Mother doing?",
        opsi: ["Mother is cooking.", "Mother is sleeping.", "Mother is swimming.", "Mother is drawing."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Dua anak sedang menendang bola sekarang. Kalimat yang paling tepat adalah ___.",
        opsi: ["They are play football.", "They is playing football.", "They are playing football.", "They played football."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Saat ini Sari memegang buku dan matanya melihat halaman. Apa yang mungkin sedang ia lakukan?",
        opsi: ["She is reading.", "She is running.", "She is cooking.", "She is sleeping."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Pilih kalimat yang benar untuk kegiatan yang sedang kamu lakukan sekarang.",
        opsi: ["I is doing my homework.", "I am doing my homework.", "I are doing my homework.", "I doing my homework."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Burung itu sedang bergerak di udara sekarang. Kalimat yang benar adalah ___.",
        opsi: ["The bird is fly.", "The bird are flying.", "The bird is flying.", "The bird flying."],
        kunci: "C",
      },
      {
        tipe: "isian",
        pertanyaan: "Saat ini Riko memegang pena dan menulis pesan. He is ___ a letter.",
        kunci: "writing",
      },
      {
        tipe: "isian",
        pertanyaan: "Kami sedang berjalan menuju sekolah sekarang. We are ___ to school.",
        kunci: "walking",
      },
      {
        tipe: "isian",
        pertanyaan: "Gelasnya ada di tangan Nina dan ia sedang meminumnya. She is ___ water.",
        kunci: "drinking",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan petunjuk kegiatan sekarang dengan kalimat yang tepat.",
        pasangan: [
          { kiri: "A book is open in front of her.", kanan: "She is reading." },
          { kiri: "A ball is at their feet and they are kicking it.", kanan: "They are playing." },
          { kiri: "He is in bed with his eyes closed.", kanan: "He is sleeping." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan subjek dengan bentuk kalimat yang benar untuk kegiatan sekarang.",
        pasangan: [
          { kiri: "I ___ drawing now.", kanan: "am" },
          { kiri: "They ___ running now.", kanan: "are" },
        ],
      },
    ],
  },
  {
    id: "like-can",
    judul: "Kesukaan dan Kemampuan",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Ari bisa berenang, tetapi ia tidak suka air dingin. Kalimat yang benar adalah ___.",
        opsi: ["Ari can't swim.", "Ari likes cold water.", "Ari can swim, but he doesn't like cold water.", "Ari doesn't like swimming."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Bayi itu belum bisa berjalan sendiri. Kalimat yang paling tepat adalah ___.",
        opsi: ["The baby can walk.", "The baby can't walk yet.", "The baby likes walking.", "The baby doesn't like walking."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Mia selalu memilih cokelat dan berkata rasanya enak. Apa yang dapat kita simpulkan?",
        opsi: ["Mia doesn't like chocolate.", "Mia likes chocolate.", "Mia can't eat chocolate.", "Mia can make chocolate."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Seekor ikan hidup di air dan bergerak dengan sirip. Kalimat yang benar adalah ___.",
        opsi: ["A fish can fly.", "A fish can't swim.", "A fish can swim, but it can't fly.", "A fish likes flying."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Dina suka membaca, tetapi hari ini ia tidak membawa buku. Kalimat mana yang hanya menyatakan kesukaannya?",
        opsi: ["Dina can read.", "Dina likes reading.", "Dina can't read.", "Dina doesn't like books."],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Rafa mampu menendang bola. Rafa ___ kick a ball.",
        kunci: "can",
      },
      {
        tipe: "isian",
        pertanyaan: "Sita tidak suka makanan pahit. She ___ like bitter food.",
        kunci: "doesn't",
      },
      {
        tipe: "isian",
        pertanyaan: "Burung memiliki sayap dan dapat terbang. Birds ___ fly.",
        kunci: "can",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan fakta dengan kesimpulan yang tepat.",
        pasangan: [
          { kiri: "Tono memilih apel setiap kali makan.", kanan: "He likes apples." },
          { kiri: "Mira belum bisa mengendarai sepeda.", kanan: "She can't ride a bike." },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Bedakan kesukaan dan kemampuan berdasarkan petunjuk.",
        pasangan: [
          { kiri: "Beni mampu berenang.", kanan: "He can swim." },
          { kiri: "Lala memilih es krim karena rasanya enak.", kanan: "She likes ice cream." },
        ],
      },
    ],
  },
  {
    id: "shadow",
    judul: "Cahaya dan Bayangan",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Pada percobaan di gambar, lampu menyinari benda. Di sisi mana bayangan terbentuk?",
        opsi: ["Di antara lampu dan benda.", "Di belakang benda, menjauhi lampu.", "Di atas lampu.", "Bayangan tidak terbentuk."],
        kunci: "B",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "pg",
        pertanyaan: "Pada gambar, benda menghalangi cahaya lampu. Apa yang terjadi jika benda dipindahkan menjauh dari lampu menuju layar?",
        opsi: ["Bayangan biasanya menjadi lebih kecil.", "Bayangan biasanya menjadi lebih besar.", "Cahaya berubah menjadi air.", "Lampu tidak diperlukan lagi."],
        kunci: "A",
        ilustrasi: "shadow-distance",
      },
      {
        tipe: "pg",
        pertanyaan: "Rani mematikan lampu dan menutup jendela hingga kamar gelap. Mengapa bayangan benda sulit terlihat?",
        opsi: ["Tidak ada cahaya yang cukup untuk membentuk bayangan.", "Benda berubah menjadi cahaya.", "Bayangan selalu berada di langit.", "Kamar gelap membuat benda menghilang."],
        kunci: "A",
        ilustrasi: "shadow-dark",
      },
      {
        tipe: "pg",
        pertanyaan: "Jika lampu pada gambar dipindahkan ke sisi kanan benda, ke mana arah bayangan berpindah?",
        opsi: ["Ke sisi kanan, menjauhi lampu.", "Ke sisi kiri, menjauhi lampu.", "Tetap berada di antara lampu dan benda.", "Bayangan berubah menjadi lampu."],
        kunci: "B",
        ilustrasi: "shadow-reverse",
      },
      {
        tipe: "pg",
        pertanyaan: "Benda mana yang paling mungkin membuat bayangan jelas saat diletakkan di depan lampu?",
        opsi: ["Kaca bening.", "Udara.", "Buku tebal.", "Air jernih."],
        kunci: "C",
        ilustrasi: "shadow-book",
      },
      {
        tipe: "isian",
        pertanyaan: "Pada gambar, cahaya lampu terhalang benda sehingga terbentuk ___.",
        kunci: "shadow",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "isian",
        pertanyaan: "Agar bayangan terlihat di layar, benda harus menghalangi ___.",
        kunci: "light",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "isian",
        pertanyaan: "Jika cahaya datang dari kiri, bayangan terbentuk di sisi ___ benda.",
        kunci: "right",
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "matching",
        pertanyaan: "Gunakan gambar percobaan untuk mencocokkan keadaan dengan hasilnya.",
        pasangan: [
          { kiri: "Benda menghalangi cahaya lampu.", kanan: "A shadow appears." },
          { kiri: "Tidak ada cahaya di ruangan.", kanan: "The shadow is hard to see." },
        ],
        ilustrasi: "shadow-experiment",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan perubahan pada percobaan dengan akibatnya.",
        pasangan: [
          { kiri: "Lampu dipindah ke kanan benda.", kanan: "The shadow moves to the left." },
          { kiri: "Buku tebal diletakkan di depan lampu.", kanan: "A clear shadow can appear." },
        ],
        ilustrasi: "shadow-matching",
      },
    ],
  },
  {
    id: "sky-objects",
    judul: "Mengamati Benda di Langit",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Matahari bersinar terang dan teman-teman sedang berangkat sekolah pagi hari. Benda langit yang memberi cahaya utama adalah ___.",
        opsi: ["the moon", "the stars", "the sun", "the clouds"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Malam ini langit cerah dan gelap. Benda yang mungkin terlihat berkelip adalah ___.",
        opsi: ["stars", "cars", "fish", "trees"],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Awan tebal menutupi matahari. Mengapa halaman terasa lebih teduh?",
        opsi: ["Awan menghalangi sebagian cahaya matahari.", "Matahari berubah menjadi bulan.", "Pesawat mematikan matahari.", "Bintang menyerap semua awan."],
        kunci: "A",
      },
      {
        tipe: "pg",
        pertanyaan: "Benda itu memiliki sayap, membawa penumpang, dan terbang tinggi. Benda apakah itu?",
        opsi: ["a fish", "a plane", "a table", "a moon"],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Kamu melihat burung dan pesawat di langit. Kesimpulan yang paling tepat adalah ___.",
        opsi: ["Only planes can fly.", "Both birds and planes can fly.", "Birds are clouds.", "Planes swim in the sky."],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Benda langit yang terlihat terang pada siang hari dan menghangatkan bumi adalah the ___.",
        kunci: "sun",
      },
      {
        tipe: "isian",
        pertanyaan: "Burung menggunakan sayap untuk ___ di langit.",
        kunci: "fly",
      },
      {
        tipe: "isian",
        pertanyaan: "Saat langit gelap dan bintang mulai terlihat, biasanya hari sudah ___.",
        kunci: "night",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan petunjuk pengamatan dengan benda langit yang sesuai.",
        pasangan: [
          { kiri: "Memberi cahaya terang pada siang hari.", kanan: "the sun" },
          { kiri: "Bisa tampak berkelip pada malam yang cerah.", kanan: "stars" },
          { kiri: "Tampak putih dan bergerak di langit.", kanan: "clouds" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan benda dengan ciri yang paling sesuai.",
        pasangan: [
          { kiri: "Kendaraan yang terbang tinggi membawa penumpang.", kanan: "plane" },
          { kiri: "Hewan bersayap yang dapat terbang.", kanan: "bird" },
        ],
      },
    ],
  },
  {
    id: "past-tense",
    judul: "Menyusun Cerita Masa Lalu",
    soal: [
      {
        tipe: "pg",
        pertanyaan: "Kemarin Bima bermain sepak bola. Kalimat yang menceritakan kejadian itu adalah ___.",
        opsi: ["Bima play football yesterday.", "Bima plays football yesterday.", "Bima played football yesterday.", "Bima is playing football yesterday."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Pagi tadi Sari berjalan ke sekolah. Pilih kata kerja yang tepat untuk melengkapi “Sari ___ to school this morning.”",
        opsi: ["walk", "walks", "walked", "walking"],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Mereka menonton film tadi malam, bukan sekarang. Kalimat yang tepat adalah ___.",
        opsi: ["They watch a movie last night.", "They watched a movie last night.", "They are watching a movie last night.", "They watches a movie last night."],
        kunci: "B",
      },
      {
        tipe: "pg",
        pertanyaan: "Kucing melompati pagar kemarin. Kalimat mana yang menunjukkan kejadian sudah selesai?",
        opsi: ["The cat jumps over the fence.", "The cat is jumping over the fence.", "The cat jumped over the fence yesterday.", "The cat jump over the fence yesterday."],
        kunci: "C",
      },
      {
        tipe: "pg",
        pertanyaan: "Urutkan penanda waktu dari paling lampau ke paling dekat dengan sekarang.",
        opsi: ["today, yesterday, tomorrow", "yesterday, today, tomorrow", "tomorrow, today, yesterday", "today, tomorrow, yesterday"],
        kunci: "B",
      },
      {
        tipe: "isian",
        pertanyaan: "Minggu lalu kami bermain di taman. We ___ in the park last week. (play)",
        kunci: "played",
      },
      {
        tipe: "isian",
        pertanyaan: "Tadi malam Dodi menonton film. He ___ a movie last night. (watch)",
        kunci: "watched",
      },
      {
        tipe: "isian",
        pertanyaan: "Kemarin anak perempuan itu melompat tinggi. The girl ___ high yesterday. (jump)",
        kunci: "jumped",
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan petunjuk waktu dengan bentuk kata kerja yang cocok.",
        pasangan: [
          { kiri: "Yesterday, I ___ football.", kanan: "played" },
          { kiri: "Last night, she ___ TV.", kanan: "watched" },
          { kiri: "Last Sunday, we ___ to the park.", kanan: "walked" },
        ],
      },
      {
        tipe: "matching",
        pertanyaan: "Pasangkan kata dengan arti atau petunjuk waktunya.",
        pasangan: [
          { kiri: "yesterday", kanan: "kemarin" },
          { kiri: "last night", kanan: "tadi malam" },
        ],
      },
    ],
  },
];

export function getLatihanById(id: string): LatihanTopic | undefined {
  return latihanList.find((latihan) => latihan.id === id);
}
