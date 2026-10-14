export type Memory = {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
};

export type SecretLetter = {
  id: string;
  title: string;
  body: string;
};

export const birthday = {
  girlfriendName: "Lan Anh",
  nickname: "lananhiudau",
  birthdayDate: "2026-10-14",
  boyfriendName: "Anh",
  tagline: "A tiny world, made with love, just for you.",
  welcomeMessage:
    "Hôm nay là một ngày đặc biệt, vì có một cô gái cực kỳ đáng yêu đã xuất hiện trên thế giới này.",
  gardenNotes: [
    "Em xinh nhất khi em cười.",
    "Mong em có thật nhiều ngày vui.",
    "Hôm nay em là nhân vật chính!",
    "Một chiếc ôm dành cho em."
  ],
  memories: [
    {
      id: "memory-1",
      title: "Ảnh tụi mình số 1",
      caption: "Thay ảnh và caption này bằng một khoảnh khắc thật của hai đứa nhé.",
      src: "/photos/placeholder-1.svg",
      alt: "Placeholder ảnh kỷ niệm thứ nhất"
    },
    {
      id: "memory-2",
      title: "Một ngày rất xinh",
      caption: "Một chỗ nhỏ để kể lại điều anh muốn em nhớ mãi.",
      src: "/photos/placeholder-2.svg",
      alt: "Placeholder ảnh kỷ niệm thứ hai"
    },
    {
      id: "memory-3",
      title: "Tiny favorite moment",
      caption: "Điền một caption thật riêng, thật của hai người vào đây.",
      src: "/photos/placeholder-3.svg",
      alt: "Placeholder ảnh kỷ niệm thứ ba"
    }
  ] satisfies Memory[],
  reasonsILoveYou: [
    "Vì nụ cười của em luôn làm anh vui hơn.",
    "Vì những lúc em đáng yêu mà chẳng hề biết.",
    "Vì có em, những ngày bình thường cũng trở nên đặc biệt.",
    "Vì anh thích được nghe em kể đủ thứ chuyện.",
    "Vì đơn giản... người đó là Lan Anh."
  ],
  loveLetter: `Lan Anh à,

Hôm nay là sinh nhật em rồi.

Anh muốn làm một điều gì đó thật đặc biệt, không cần quá lớn lao, chỉ cần nó khiến em mỉm cười.

Anh mong tuổi mới của em sẽ có thật nhiều niềm vui, nhiều điều may mắn và thật nhiều khoảnh khắc đáng nhớ.

Mong em luôn được là chính mình, được làm những điều em thích và luôn cảm thấy mình được yêu thương.

Cảm ơn em vì đã xuất hiện trong cuộc sống của anh.

Chúc mừng sinh nhật, lananhiudau.

Anh thương em ♡`,
  secretLetters: [
    {
      id: "sad",
      title: "Open when you're sad",
      body: "Nếu hôm nay của em hơi nặng lòng, anh mong chiếc thư nhỏ này ôm em một chút. Em không cần phải luôn mạnh mẽ đâu. Cứ nghỉ một nhịp, hít thở, rồi để anh thương em nhiều hơn."
    },
    {
      id: "miss",
      title: "Open when you miss me",
      body: "Khi em nhớ anh, hãy nhớ là ở đâu đó anh cũng đang nghĩ về em. Một cái nắm tay tạm gửi qua màn hình, chờ ngày được đưa tận tay."
    },
    {
      id: "smile",
      title: "Open when you need a smile",
      body: "Tin nóng: có một người tên anh vừa bị phát hiện là thích Lan Anh quá trời. Hình phạt là phải làm em cười thật nhiều."
    }
  ] satisfies SecretLetter[],
  surpriseMessage:
    "Bí mật là: anh vẫn sẽ tiếp tục làm những điều nhỏ xinh cho em, không chỉ hôm nay, mà cả những ngày rất bình thường nữa.",
  finalPhoto: {
    src: "/photos/final-placeholder.svg",
    alt: "Placeholder ảnh đặc biệt của hai người"
  },
  music: {
    src: "/audio/birthday-song.mp3",
    title: "Birthday song"
  }
};
