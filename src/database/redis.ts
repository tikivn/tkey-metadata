import log from "loglevel";
import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOSTNAME, REDIS_PASS } = process.env;
const client = createClient({ socket: { host: REDIS_HOSTNAME, port: Number(REDIS_PORT) } });
client.auth({ password: REDIS_PASS });

client.on("error", (error) => {
  log.error(error);
});

client.on("ready", () => {
  log.info("Connected to redis");
});

export default client;
