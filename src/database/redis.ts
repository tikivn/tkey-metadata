import log from "loglevel";
import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOSTNAME, REDIS_PASS } = process.env;
const client = createClient({ socket: { host: REDIS_HOSTNAME, port: Number(REDIS_PORT) } });

client.on("error", (error) => {
  log.error(error);
});

client.on("ready", () => {
  log.info("Connected to redis");
});

export default client;

export const tryAuth = async () => {
  if (REDIS_PASS && REDIS_PASS.length !== 0) {
    const res = await client.auth({ password: REDIS_PASS });
    log.info("tryAuth", res);
    return;
  }
  log.info("no need to tryAuth");
};
