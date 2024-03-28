export const competitors = [
  {
    id: 1,
    name: "Competitor 1",
    school: "UCLA",
    experience: "Beginner",
    gender: "Male",
  },
  {
    id: 2,
    name: "Competitor 2",
    school: "USC",
    experience: "Advanced",
    gender: "Female",
  },
];

export const events = [
  {
    id: "AMA101",
    name: "adult longfist",
    competitors: [
      {
        name: "henry",
        place: "100th",
        "final score": "100",
        "score 1": "2",
        "score 2": "2",
        "score 3": "3",
      },
      { name: "rachel", place: "1st", "final score": "200" },
    ],
  },
  {
    id: "AMA102",
    name: "adult straightsword",
    competitors: [
      { name: "trevor", place: "void", "final score": "100" },
      { name: "justin", place: "-10th", "final score": "200" },
    ],
  },
];

export const teams = [
  {
    id: "",
    totalscore: "",
    competitors: [],
  },
];

//EVENT competitors array is an array of their name, place, final score, score 1-5
//TEAM competitors array is an array of their name, top 2 events, contributing score