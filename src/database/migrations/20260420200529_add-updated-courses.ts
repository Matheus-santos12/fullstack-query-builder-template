import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.timestamp("update_at").defaultTo(knex.fn.now()).after("create_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.dropColumn("update_at");
  });
}
