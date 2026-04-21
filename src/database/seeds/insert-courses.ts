import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "Html" },
    { name: "Git" },
    { name: "Angular" },
    { name: "Banco de Dados" },
    { name: "Github" },
    { name: "Node.Js" },
    { name: "React" },
    { name: "Python" },
  ]);
}
