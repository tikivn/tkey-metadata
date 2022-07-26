import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("data"))) {
    await knex.schema.createTable("data", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }

  if (!(await knex.schema.hasTable("tkey"))) {
    await knex.schema.createTable("tkey", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("webauthn"))) {
    await knex.schema.createTable("webauthn", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("test"))) {
    await knex.schema.createTable("test", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("oauth_credid_cache"))) {
    await knex.schema.createTable("oauth_credid_cache", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("oauth_userinfo"))) {
    await knex.schema.createTable("oauth_userinfo", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("webauthn_torus_share"))) {
    await knex.schema.createTable("webauthn_torus_share", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
  if (!(await knex.schema.hasTable("webauthn_device_share"))) {
    await knex.schema.createTable("webauthn_device_share", (table) => {
      table.increments("id");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.string("key", 255).notNullable();
      table.text("value", "mediumtext").notNullable().defaultTo("");
      table.index(["key"], "idx_key");
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("data")
    .dropTable("tkey")
    .dropTable("webauthn")
    .dropTable("test")
    .dropTable("oauth_credid_cache")
    .dropTable("oauth_userinfo")
    .dropTable("webauthn_torus_share")
    .dropTable("webauthn_device_share");
}
