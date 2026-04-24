import { faker } from "@faker-js/faker";

export const generateCheckout = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  zip: faker.location.zipCode(),
});
