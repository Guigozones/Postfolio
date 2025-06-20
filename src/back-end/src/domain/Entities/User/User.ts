import Email from "@domain/valueObject/Email";

export default class User {
  id: string;
  name: string;
  email: Email;
  passWord: string;
  status: string;

  constructor(
    id: string,
    name: string,
    email: string,
    passWord: string,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.email = new Email(email);
    this.passWord = passWord;
    this.status = status;
  }
}
