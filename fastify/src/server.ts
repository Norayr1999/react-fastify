import Fastify from "fastify";
import "dotenv/config";
import { User } from "./entity/User";
import { appDataSource } from "./appDataSource";
import { seedUsers } from "./seeds/seedUsers";

const fastify = Fastify({ logger: true });

fastify.get("/api/usercount", async (request, reply) => {
  try {
    const userRepository = appDataSource.getRepository(User);
    const userCount = await userRepository.count();
    return { totalUsers: userCount };
  } catch (error) {
    fastify.log.error(error);
    return reply.status(500).send({ error: "Failed to fetch user count" });
  }
});

const start = async () => {
  try {
    await appDataSource.initialize();
    fastify.log.info("Data Source has been initialized!");

    await seedUsers();

    await fastify.listen({ port: +process.env.PORT || 6776, host: "0.0.0.0" });
    fastify.log.info(
      `Server is running at http://localhost:${process.env.PORT || 6776}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
