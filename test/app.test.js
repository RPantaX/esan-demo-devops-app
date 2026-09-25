const request = require("supertest");
const { app, sumar } = require("../src/app");

describe("API de mi-app", () => {
  test("GET / responde con el mensaje de bienvenida", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe("¡Hola desde el Grupo 4! 🚀");
  });

  test("GET /health responde ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("Lógica", () => {
  test("sumar(2, 3) devuelve 5", () => {
    expect(sumar(2, 3)).toBe(5);
  });
});
