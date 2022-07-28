import log from "loglevel";
import { createClient } from "redis";

const { REDIS_PORT, REDIS_HOSTNAME, REDIS_PASS } = process.env;
// const client = createClient({ socket: { host: REDIS_HOSTNAME, port: Number(REDIS_PORT) } });
const url =
  REDIS_PASS && REDIS_PASS.length !== 0
    ? `redis://:${REDIS_PASS}@${REDIS_HOSTNAME}:${Number(REDIS_PORT)}`
    : `redis://${REDIS_HOSTNAME}:${Number(REDIS_PORT)}`;
const client = createClient({ url });

client.on("error", (error) => {
  log.error(error);
});

client.on("ready", () => {
  log.info("Connected to redis");
});

export default client;

export const redisConnect = async () => {
  try {
    await client.connect();
  } catch (e) {
    log.error(e);
  }
};

export const redisDisconnect = async () => {
  try {
    await client.disconnect();
  } catch (e) {
    log.error(e);
  }
};
