import { appDataSource } from '../appDataSource';
import { User } from '../entity/User';

export async function seedUsers(): Promise<void> {
    const userRepository = appDataSource.getRepository(User);

    // Predefined user data
    const users = [
        { name: "Alice" },
        { name: "Bob" },
        { name: "Charlie" },
        { name: "Diana" }
    ];

    for (const user of users) {
        const newUser = userRepository.create(user);
        await userRepository.save(newUser);
    }

    console.log("Loaded users.");
}
