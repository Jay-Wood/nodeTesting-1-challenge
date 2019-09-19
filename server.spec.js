const request = require("supertest");
const server = require("./server.js");
const Guitars = require("./guitars/guitarsModel.js");

describe("server.js", () => {

    describe("GET /", () => {
        it("returns 200", () => {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })


})