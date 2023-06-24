const app = require("../../app");
const request = require("supertest");

describe("Waxaan tijaabinaa getka post", () => {
  //get method tersting
  it("Get testijng/waxaan doonayaa status code ah 200", async () => {
    const resp = await request(app).get("/client");
    expect(resp.statusCode).toBe(200);
  });
  it("post testijng/waxaan doonayaa status code ah 201", async () => {
    const resp = await request(app).post("/client").send({
      ClientName: "Abraar",
      Logo: "kjgdfghjklhgf",

    });
    expect(resp.statusCode).toBe(201);
    // userId=resp.body.Client._id;
  });
//   it("update client waxaana filayaa status code 200", async () => {
//     const Update = await request(app).put(`/client/${"gdfgo653456789876"}`).send({
//       ClientName: "Abraar",
//       Logo: "kjgdfghjklhgf",
//     });

//     expect(Update.statusCode).toBe(200)
//   });
});
describe("Waxaan tijaabinaa getka post galaryga", () => {
    //get method tersting
    it("Get testijng/waxaan doonayaa status code ah 200", async () => {
      const resp = await request(app).get("/galary");
      expect(resp.statusCode).toBe(200);
    });
    it("post testijng/waxaan doonayaa status code ah 201", async () => {
      const resp = await request(app).post("/galary").send({
        ImageTitle:"Magaadlo",
        ImagePath:"kejwsfhsjkdjs"
  
      });
      expect(resp.statusCode).toBe(201)
    });
  });
  
