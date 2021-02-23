const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status !== 200) {
            console.log('some error');
            return;
        }

        cb(xhr.responseText);
    }
};


class Products {
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData()
            .then(() => this._render());
    }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                for (let product of data) {
                    this.products.push(new ProductItem(product));
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';
    rendered = false;

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ product_name: this.title, price: this.price, id_product: this.id } = product);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

class ProductsAll {
    // data - объект со всеми товарами и их данными вида {title1: {price: 140, id: 7, quantity: 59, img: ''}
    //                                                    title2: {price: 300, id: 9, quantity: 5, img: ''}
    //                                                    ...}

    // _fetchData() - метод получает все данные о всех товаров из базы и кладет их в переменную data
}

class Cart {
    // cartItems - cartItems array
    // container - строка в HTML разметке, куда будем вставлять элементы корзины

    // addCartItems() - метод, который будет ловить событие(добавить продукт в корзину) на странице каталога
    // и добавлять этот элемент из ProductsAll.data в переменную this.cartItems

    // _render() - метод будет отображать в корзине продукт, который отрисует класс CartItem
}

class CartItem {
    // title - название продукта
    // price - цена товара
    // id - id товара
    // img - адрес картинки
    // quantity - кол-во товара в корзине(по умолчанию 1)

    // render() - метод отрисовывает товар в корзине
}

class Counter {
    // add() - ловит событае на странице корзины и увеличивает кол-во одного типа продукта и
    // пересчитывает его общую стоимость и сумму всей корзины

    // remove() - ловит событае на странице корзины и уменьшает кол-во одного типа продукта и
    // пересчитывает его общую стоимость и сумму всей корзины

}

class Payment {
    // класс проводит оплату корзины
}

const list = new Products('.products');
console.log(list.calcSum());
