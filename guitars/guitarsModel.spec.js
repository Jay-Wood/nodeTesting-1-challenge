const Guitars = require("./guitarsModel.js");
const db = require("../data/dbConfig.js");

describe("Guitars model", () => {

    beforeEach(async () => {
        await db("guitars").truncate();
    })

    it("should set env to testing", () => {
        expect(process.env.DB_ENV).toEqual("testing")
    })

    it("inserts new guitar into db", async () => {
        await Guitars.insert({manufacturer: "Gibson", model: "Les Paul", year: 1971 })
        const guitars = await db("guitars")
        expect(guitars).toHaveLength(1);
    })

    it("inserts new guitar and returns correct name", async () => {
        let [id] = await Guitars.insert({manufacturer: "Fender", model: "Custom Strat", year: 1968 })
        
        let newGuitar = await db("guitars").where({ id }).first();
        // console.log("newGuitar :", newGuitar)
        // console.log("newGuitar keys :", Object.keys(newGuitar))
        // console.log("newGuitar id:", newGuitar.id)
        // console.log("newGuitar model:", newGuitar.Model)
        // console.log("newGuitar manufacturer:", newGuitar.Manufacturer)
        expect(newGuitar.Manufacturer).toEqual("Fender")
    })

    it("deletes guitars", async () => {
        let [id] = await Guitars.insert({manufacturer: "Gibson", model: "Les Paul", year: 1971 })
        
        const guitars = await db("guitars")
        expect(guitars).toHaveLength(1);

        await Guitars.remove(id)
        const guitars2 = await db("guitars")
        console.log("guitars after delete: ", guitars2)
        expect(guitars2).toHaveLength(0); 
    })

})