import fastify from "fastify";
import { knex } from "./database.js";
import {randomUUID} from "node:crypto";

export const app = fastify();

app.get('/', () =>{  
    const users = knex('users').select();
    return users;
})

app.post('/', async (req, res) => {
    const {name, email} = req.body;
       
    const user = {
        id: randomUUID(),
        name,
        email
    };

    await knex('users').insert(user);
    return res.status(201).send("Cadastrar de Usuário")
})

app.put('/', async (req, res) => {
    const {id, name, email} = req.body;

    await knex('users').where('id',id).update({name,email});

    return res.status(201).send("Edição Concluida")
})

app.delete('/', async (req, res) => {
    const {id} = req.body;

    await knex('users').where('id',id).delete()
    return res.status(201).send("Remoção Concluida")
})