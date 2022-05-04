export interface usersToDo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface usersData {
  adress: Adress;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface Adress {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface Geo {
  lat: string;
  lng: string;
}

export interface stateInStore {
  toDo: Array<usersToDo>;
  inProgress: Array<usersToDo>;
  done: Array<usersToDo>;
  user: Array<usersData>;
  arrayWithColors: Array<object>;
}
