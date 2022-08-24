import { faker } from '@faker-js/faker'

export async function load() {
    const fiftyNames = [...Array(50)].map(() => {
        return {
            name: faker.name.fullName()
        }
    })
    return { allNames: fiftyNames }
}