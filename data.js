const kampala = {
  city: "Kisenyi",
  country: "Uganda",
  population: 10000000,
};

const people = [
  {
    name: "John",
    age: {
      age: 20,
      realAge: 36,
    },
    city: "New Jersey",
    networth: 100000,
  },
  {
    name: "Jane",
    age: 25,
    city: "Miami",
    networth: 500000,
  },
  {
    name: "Ian",
    age: 25,
    city: {
      city: "Dodoma",
      city2: "Ottawa",
    },
    networth: 178900,
    area: [
      {
        town1: "mjini",
        town2: "vijijini",
        town3: "home",
      },
    ],
    area2: kampala,
  },
  {
    name: "Will",
    age: 85,
    city: "Miami",
    networth: 895000,
  },
  {
    name: "Gotti",
    age: 35,
    city: "New York",
    networth: {
      networth: 100000,
      criminal: true,
      crimes: [
        {
          kills: 12,
          onTrial: false,
          guilty: true,
        },
      ],
    },
  },
];
// console.log(people[4].networth.crimes[0].guilty);
// console.log(people[2]);
// console.log(people[2])

// const bag = "bag";
// const design = bag;
// console.log(design);

const database = "mongo";

const data = database;

// console.log(data);

// "string"
// 4554
// true

// const firstName="John";
// const firstName = "John";
const name1 = firstName;
//console.log(name1);

const fly = "up";
const fly2 = fly;
console.log(fly);
