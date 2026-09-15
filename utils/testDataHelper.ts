import { faker } from "@faker-js/faker";

export class FakerHelper {
  static createUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email({ provider: "gmail.com" }),
      tel: `+90${faker.string.numeric(10)}`,
      passValue: "Test123.",
    };
  }

  static createInvalidUser(){
    return {
        username: faker.internet.username() + "_invalid",
        password: faker.internet.password(),
    }
  }
}
