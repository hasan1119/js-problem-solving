// main function
function vaxTrail(informations) {
  let lists = { A: [], B: [], C: [], D: [] };
  informations.forEach((info) => {
    if (info.age >= 20 && info.age <= 30 && info.temperature < 100) {
      lists.A.push(info);
    } else if (info.age >= 31 && info.age <= 40 && info.temperature < 100) {
      lists.B.push(info);
    } else if (info.age >= 41 && info.age <= 50 && info.temperature < 100) {
      lists.C.push(info);
    } else if (info.temperature >= 100) {
      lists.D.push(info);
    }
  });

  function sortByEvenAge(lists) {
    const sortenLists = {};
    for (const list in lists) {
      const line = lists[list];

      const isEven = (num) => num % 2 === 0;

      const sorter = (a, b) => {
        if (isEven(a.age) && !isEven(b.age)) {
          return -1;
        }
        if (!isEven(a) && isEven(b)) {
          return 1;
        }
        return a - b;
      };
      const oddEvenSort = (arr) => {
        arr.sort(sorter);
      };

      oddEvenSort(line);

      sortenLists[list] = line;
    }
    return sortenLists;
  }

  const result = sortByEvenAge(lists);
  return result;
}

// testing
/* const personList = [
  { name: "Biplap", age: 25, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 100 },
  { name: "Labib", age: 60, temperature: 60 },
  { name: "Biplap", age: 40, temperature: 102 },
  { name: "Biplap", age: 22, temperature: 90 },
  { name: "Biplap", age: 83, temperature: 95 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
];

const result = vaxTrail(personList);
console.log(result); */
