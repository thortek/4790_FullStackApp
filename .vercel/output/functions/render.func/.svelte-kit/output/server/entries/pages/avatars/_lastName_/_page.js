import { faker } from "@faker-js/faker";
async function load({ params }) {
  const { lastName } = params;
  const firstName = faker.name.firstName();
  console.log(params);
  return {
    lastName,
    firstName,
    avatar: `https://avatars.dicebear.com/api/adventurer/${lastName}.svg`,
    title: faker.name.jobTitle(),
    phone: faker.phone.number(),
    email: faker.internet.email(`${firstName}`, `${lastName}`)
  };
}
export {
  load
};
