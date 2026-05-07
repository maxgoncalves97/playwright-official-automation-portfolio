import { test, expect } from '@playwright/test';

test.describe('Product API Tests', () => {
  test('should return product details successfully', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('price');
    expect(body).toHaveProperty('category');
  });

  test('should return a list of products', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toHaveProperty('title');
    expect(body.products[0]).toHaveProperty('price');
  });

test('should search for products by keyword', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products/search?q=phone');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body.products)).toBeTruthy();
  expect(body.products.length).toBeGreaterThan(0);

  for (const product of body.products) {
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
  }
});

  test('should return 404 for an invalid product endpoint', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/invalid-product-id');

    expect(response.status()).toBe(404);
  });
});