import { test, expect } from "@playwright/test";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
}

const url = "https://jsonplaceholder.typicode.com/users";

test("GET user by ID", async ({ request }) => {
  const response = await request.get(`${url}/1`);
  expect(response.status()).toBe(200);

  const result: User = await response.json();

  expect(result.id).toBe(1);
  expect(typeof result.name).toBe("string");
  expect(result.name.length).toBeGreaterThan(0);
  expect(typeof result.username).toBe("string");
  expect(result.email).toContain("@");

  expect(result).toMatchObject({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    address: {
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
  });
});

test("get all users", async ({ request }) => {
  const response = await request.get(url);
  expect(response.status()).toBe(200);

  const result: User[] = await response.json();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(10);
  result.forEach((user) => {
    expect(typeof user.id).toBe("number");
    expect(typeof user.email).toBe("string");
    expect(user.email).toContain("@");
  });

  expect(result.find((user) => user.username === "Bret")?.username).toBe("Bret");
});

test("POST create user", async ({ request }) => {
  const newUser = {
    name: "Anna Smith",
    username: "annasmith",
    email: "anna@example.com",
  };
  const response = await request.post(url, {
    data: newUser,
  });
  expect(response.status()).toBe(201);

  const result = await response.json();

  expect(result).toMatchObject(newUser);
  expect(typeof result.id).toBe("number");
});

test("PATCH update user email", async ({ request }) => {
  const updatedUser = {
    email: "updated@example.com",
  };
  const response = await request.patch(`${url}/1`, {
    data: updatedUser,
  });
  expect(response.status()).toBe(200);

  const result = await response.json();

  expect(result.id).toBe(1);
  expect(result).toMatchObject(updatedUser);
});

test("DELETE user by ID", async ({ request }) => {
  const response = await request.delete(`${url}/1`);
  expect(response.status()).toBe(200);

  const result = await response.json();

  expect(result).toEqual({});
});
