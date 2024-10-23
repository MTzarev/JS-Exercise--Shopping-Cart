function solve() {

    let output = document.querySelector(`textarea`);
    let cart = [];

    document.querySelector(`.shopping-cart`).addEventListener(`click`, (ev) => {
        if (ev.target.tagName == `BUTTON` && ev.target.className == `add-product`) {
            let product = ev.target.parentNode.parentNode;
            let title = (product.querySelector(`.product-title`).textContent);
            let price = Number(product.querySelector(`.product-line-price`).textContent);
            cart.push({ title, price })
            output.value += (`Added ${title} for ${price.toFixed(2)} to the cart.\n`);

        }
    });
    document.querySelector(`.checkout`).addEventListener(`click`, () => {
        let result = cart.reduce((acc, c) => {
            acc.items.push(c.title);
            acc.total += c.price;
            return acc;
        }, { items: [], total: 0 });

        output.value += `You bought ${result.items.join(`, `)} for ${result.total.toFixed(2)}.`
    });
};
