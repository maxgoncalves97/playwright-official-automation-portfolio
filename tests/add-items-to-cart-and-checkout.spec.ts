import { Page, test, expect } from "@playwright/test";
import { CheckoutCart } from "../pages/addToCart";

test('add iphone X to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('iphone X');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 100000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})

test('add Samsung Note 8 to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('Samsung Note 8');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 85000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})

test('add Nokia Edge to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('Nokia Edge');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 65000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})

test('add Blackberry to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('Blackberry');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 50000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})

test('add all items on home page to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('iphone X');
    await checkoutCart.addProductToCart('Samsung Note 8');
    await checkoutCart.addProductToCart('Nokia Edge');
    await checkoutCart.addProductToCart('Blackberry');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 300000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})

test('remove item from cart', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    await checkoutCart.gotoShop();
    await checkoutCart.addProductToCart('iphone X');
    await checkoutCart.addProductToCart('Samsung Note 8');
    await checkoutCart.addProductToCart('Nokia Edge');
    await checkoutCart.gotoCheckout();
    await checkoutCart.totalPrice('₹. 250000');
    await checkoutCart.removeProduct('iphone X');
    await checkoutCart.totalPrice('₹. 150000');
    await checkoutCart.checkout('Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})
