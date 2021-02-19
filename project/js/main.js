const products = [
    {title: 'Notebook', id: 1, price: 2000,},
    {title: 'Keyboard', id: 2, price: 200},
    {title: 'Mouse', id: 3, price: 100},
    {title: 'Gamepad', id: 4, price: 87},
];

// поскольку элементы приезжают из базы данных, то id будет в любом случае, да и название должно бы тоже быть, 
// но вдруг все поля могут быть пустыми в таблице
const renderProduct = ({ title = 'Add the product name', price }, img = 'https://placehold.it/200x150') => {
    return `<div class="product-item">
                <img src="${img}" alt="${title}">
                <div class="desc">
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};

const render = (products) => {
    document.querySelector(".products").innerHTML = products.map(item => renderProduct(item)).join('');
};

render(products);