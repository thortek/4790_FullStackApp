import { faker } from "@faker-js/faker";
async function load() {
  const fiftyNames = [...Array(50)].map(() => {
    const lastName = faker.name.lastName();
    return {
      lastName,
      avatar: `https://avatars.dicebear.com/api/adventurer/${lastName}.svg`
    };
  });
  return { allNames: fiftyNames };
}
export {
  load
};
