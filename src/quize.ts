export type Option = {
  option: string;
  isRight: boolean;
};
export type Question = {
  question: string;
  points: number;
  negativePoints: number;

  options: Option[];
};
export type Quize = {
  quizeName: string;
  questions: Question[];

  quizeImage: string;
};

const quize: any = {
  quizeName: "marvel",
  questions: [
    {
      question: "who is loki",
      points: 5,
      negativePoints: 3,
      options: [
        {
          option: "god of mischefe",
          isRight: true,
        },
        {
          option: "god of thunder",
          isRight: false,
        },
        {
          option: "god of hammers",
          isRight: false,
        },
        {
          option: "god of weed",
          isRight: false,
        },
      ],
    },
    {
      question: "who is jane foster ?",
      points: 10,
      negativePoints: 5,
      options: [
        {
          option: "gf of tony stark",
          isRight: false,
        },
        {
          option: "gf of thor",
          isRight: true,
        },
        {
          option: "black widdow ",
          isRight: false,
        },
        {
          option: "scarlet witch",
          isRight: false,
        },
      ],
    },
    {
      question: "who is batman",
      points: 5,
      negativePoints: 2,
      options: [
        {
          option: "howard stark",
          isRight: false,
        },
        {
          option: "bruce williams",
          isRight: false,
        },
        {
          option: "bruce wayne",
          isRight: true,
        },
        {
          option: "alferd penny worth",
          isRight: false,
        },
      ],
    },
    {
      question: "whon is robin",
      points: 10,
      negativePoints: 6,
      options: [
        {
          option: "jason tod",
          isRight: false,
        },
        {
          option: "taila al gul",
          isRight: false,
        },
        {
          option: "rasal gul",
          isRight: false,
        },
        {
          option: "damian wayne",
          isRight: true,
        },
      ],
    },
  ],
};

export default quize;
