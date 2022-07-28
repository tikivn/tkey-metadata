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
  if (/*! client.isReady && */ !client.isOpen) {
    await client.connect();
  }
};

export const redisDisconnect = async () => {
  if (/* client.isReady || */ client.isOpen) {
    await client.disconnect();
  }
};
