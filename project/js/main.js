class Catalog {
    data = [];
    // products = [];
    container = null;
    sum = 0;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
        this.sumAll();
    }

    sumAll() {
        for (let element of this.data) {
            this.sum += element.price
        }
        console.log(`Суммарная стоимость всех товаров равна ${this.sum} рублей`)
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
            const product = new ProductCatalog(element);
            // this.products.push(product);
            // console.log(this.products);
            this.container.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class ProductCatalog {
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

const catalog = new Catalog('.products');
