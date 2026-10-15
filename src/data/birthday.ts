export type SecretLetter = {
  id: string;
  title: string;
  body: string;
};

export const birthday = {
  girlfriendName: "lananhiudau",
  nickname: "lananhiudau",
  birthdayDate: "2002-10-16",
  boyfriendName: "Anh",
  tagline: "Một thế giới nhỏ, được làm bằng tình yêu, dành riêng cho em.",
  welcomeMessage:
    "Hôm nay là một ngày đặc biệt, vì có một cô gái cực kỳ đáng yêu đã xuất hiện trên thế giới này.",
  gardenNotes: [
    "Em xinh nhất khi em cười.",
    "Mong em có thật nhiều ngày vui.",
    "Hôm nay em là nhân vật chính!",
    "Một chiếc ôm dành cho em.",
    "Mong mọi điều dịu dàng sẽ đến với em.",
    "Luôn vui vẻ và rạng rỡ nhé."
  ],
  reasonsILoveYou: [
    "Vì nụ cười của em luôn làm anh vui hơn.",
    "Vì những lúc em đáng yêu mà chẳng hề biết.",
    "Vì có em, những ngày bình thường cũng trở nên đặc biệt.",
    "Vì anh thích được nghe em kể đủ thứ chuyện.",
    "Vì đơn giản... người đó là lananhiudau."
  ],
  loveLetter: `lananhiudau à,

Anh muốn làm một điều gì đó thật đặc biệt, không cần quá lớn lao, chỉ cần nó khiến em mỉm cười.

Anh mong tuổi mới của em sẽ có thật nhiều niềm vui, nhiều điều may mắn và thật nhiều khoảnh khắc đáng nhớ.

Mong em luôn được là chính mình, được làm những điều em thích và luôn cảm thấy mình được yêu thương.

Chúc mừng sinh nhật, lananhiudau.

Yêu em, hihi ♡`,
  secretLetters: [
    {
      id: "sad",
      title: "Mở khi em buồn",
      body: "anh mong chiếc thư nhỏ này ôm em một chút. Cứ nghỉ một nhịp, hít thở, rồi để anh thương em nhiều hơn."
    },
    {
      id: "miss",
      title: "Mở khi em nhớ anh",
      body: "Khi em nhớ anh, hãy nhớ anh cũng đang nghĩ về em. Một cái nắm tay tạm gửi qua màn hình, chờ ngày được đưa tận tay."
    },
    {
      id: "smile",
      title: "Mở khi em cần một nụ cười",
      body: "Tin nóng: có một người tên Hanh vừa bị phát hiện là thích lananhiudau quá trời. Hình phạt là phải làm em cười thật nhiều."
    }
  ] satisfies SecretLetter[],
  surpriseMessage:
    "Bí mật là: anh vẫn sẽ tiếp tục làm những điều nhỏ xinh cho em, không chỉ hôm nay, mà cả những ngày rất bình thường nữa.",
  music: {
    src: "/audio/birthday-song.mp3",
    title: "Nhạc sinh nhật"
  }
};
