import { knex } from "knex";
import { attachOnDuplicateUpdate } from "knex-on-duplicate-update";

import { up } from "./creation/20220726_initial_setup";
import config from "./knexfile";

let dbConfig = config.development;

if (process.env.NODE_ENV === "production") {
  dbConfig = config.productionWrite;
} else if (process.env.NODE_ENV === "staging") {
  dbConfig = config.stagingWrite;
}

const _knex = knex(dbConfig);
let _createdKnex = false;

attachOnDuplicateUpdate();

export const asyncKnex = async () => {
  if (!_createdKnex) {
    _createdKnex = true;
    await up(_knex);
  }

  return _knex;
};
