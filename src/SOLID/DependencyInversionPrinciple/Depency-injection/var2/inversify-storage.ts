import { injectable, inject, Container } from 'inversify';
import 'reflect-metadata';

let container: Container;

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

@injectable()
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

@injectable()
class MapStorage implements IFindStorage {
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

@injectable()
class SearchByAge {
  constructor(@inject('storage') private storage: IFindStorage) {}

  Search(age: number) {
    return this.storage.FindAll((e) => e.Age > age);
  }
}

@injectable()
class SearchByFirstName {
  constructor(@inject('storage') private storage: IFindStorage) {}

  Search(name: string) {
    return this.storage.FindAll((e) => e.FirstName.includes(name));
  }
}

function bindings() {
  container = new Container();
  /*container
    .bind<IFindStorage>('storage')
    .to(ListStorage)
    .whenTargetNamed('storageList');*/

  container.bind<IFindStorage>('storage').to(ListStorage);
  /* container
    .bind<IFindStorage>('storage')
    .to(MapStorage)
    .whenTargetNamed('storageMap');*/
  container.bind<SearchByFirstName>('SearchByFirstName').to(SearchByFirstName);
  container.bind<SearchByAge>('SearchByAge').to(SearchByAge);
}

function main() {
  bindings();

  function predicate(p: Person) {
    return p.Age > 40;
  }

  const d = container.get<IFindStorage>('storage');
  // const d = container.getNamed<IFindStorage>('storage', 'storageList');

  const s = container.get<SearchByFirstName>('SearchByFirstName');
  // const d = new MapStorage();

  console.log('DictionaryStorage');
  console.log(d.FindAll(predicate));
  console.log('==================');
  // console.log(new SearchByFirstName(d).Search('2'));

  /*console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('ListStorage');
  const l = new ListStorage();
  console.log(l.FindAll(predicate));
  console.log('==================');
  console.log(new SearchByAge(l).Search(50));*/
}
main();
