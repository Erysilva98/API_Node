import {beforeAll, expect, test} from "vitest";
import request from "supertest";
import { app } from "../src/app";

beforeAll( async () => {
   await app.ready();
})

test("Testar o código de Servidor", async () => {
    await request(app.server)
        .post('/')
        .send({
            "name": "teste 01",
            "email": "email@test.com"
        }).expect(201);

})
