class Person {
  FirstName = '';
  LastName = '';
  Age = 0;

  constructor(pLastName: string, pFirstName: string, pAge: number) {
    this.LastName = pLastName;
    this.FirstName = pFirstName;
    this.Age = pAge;
  }
}

type Predicate = (pers: Person) => boolean;

export interface IFindStorage {
  FindAll: (func: Predicate) => Array<Person>;
  Add: (p: Person) => void;
}

class ListStorage implements IFindStorage {
  private storage: Array<Person> = [];

  constructor() {
    this.Add(new Person('LastName_1', 'FirstName_1', 55));
    this.Add(new Person('LastName_2', 'FirstName_2', 30));
    this.Add(new Person('LastName_3', 'FirstName_3', 35));
    this.Add(new Person('LastName_4', 'FirstName_4', 40));
    this.Add(new Person('LastName_5', 'FirstName_5', 45));
  }

  FindAll(func: Predicate): Array<Person> {
    return this.storage.filter(func);
  }
  GetPersons() {
    return this.storage;
  }

  Add(p: Person) {
    this.storage.push(p);
  }
}

class SearchByAge {
  storage: IFindStorage;
  constructor(pStorage: IFindStorage) {
    this.storage = pStorage;
  }

  Search(age: number) {
    return this.storage.FindAll((e) => e.Age > age);
  }
}
class SearchByFirstName {
  storage: IFindStorage;
  constructor(pStorage: IFindStorage) {
    this.storage = pStorage;
  }

  Search(name: string) {
    return this.storage.FindAll((e) => e.FirstName.includes(name));
  }
}

// class DictionaryStorage implements IFindStorage {
class DictionaryStorage {
  private curIndex = 0;
  private storage = new Map<number, Person>();

  Add(p: Person) {
    this.storage.set(this.curIndex++, p);
  }

  FindAll(func: Predicate): Array<Person> {
    const resArr: Array<Person> = [];
    const iterator1 = this.storage[Symbol.iterator]();
    for (const storageElement of iterator1) {
      if (func(storageElement[1])) {
        resArr.push(storageElement[1]);
      }
    }
    return resArr;
  }

  constructor() {
    this.Add(new Person('LastName_1', 'FirstName_1', 55));
    this.Add(new Person('LastName_2', 'FirstName_2', 30));
    this.Add(new Person('LastName_3', 'FirstName_3', 35));
    this.Add(new Person('LastName_4', 'FirstName_4', 40));
    this.Add(new Person('LastName_5', 'FirstName_5', 45));
  }
}

function main() {
  const d = new DictionaryStorage();
  function predicate(p: Person) {
    return p.Age > 40;
  }

  console.log(d.FindAll(predicate));
  console.log('==================');
  console.log(new SearchByFirstName(d).Search('2'));

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  const l = new ListStorage();
  console.log(l.FindAll(predicate));
  console.log('==================');
  console.log(new SearchByAge(l).Search(50));
}
main();
