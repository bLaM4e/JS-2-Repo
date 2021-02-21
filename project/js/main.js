class Catalog {
    data = [];
    // products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
    }

    _fetchData() {
        this.data = [
            {title: 'Notebook', id: 1, price: 2000,},
            {title: 'Keyboard', id: 2, price: 200},
            {title: 'Mouse', id: 3, price: 100},
            {title: 'Gamepad', id: 4, price: 87},
        ];
    }

    _render () {
        for (let element of this.data) {
            const product = new Product(element);
            // this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class Product {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(data, img='https://placehold.it/200x150') {
        ({title: this.title, price: this.price, id: this.id} = data);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src=${this.img} alt=${this.title}>
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price}</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}

const catalog = new Catalog('.products');
