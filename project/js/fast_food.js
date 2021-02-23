class MiniHamburger{
    constructor() {
        this.price = 50;
        this.calories = 20;
        this.title = 'Маленький гамбургер'
        this.render();
    }

    render() {
        console.log(`${this.title}:\nЦена - ${this.price} рублей\nКалорийность - ${this.calories} калорий`)
    }
}

class BigHamburger {
    constructor() {
        this.price = 100;
        this.calories = 40;
        this.title = 'Большой гамбургер'
        this.calculation();
        this.render();
    }

    calculation() {}

    render() {
        console.log(`${this.title}:\nЦена - ${this.price} рублей\nКалорийность - ${this.calories} калорий`)
    }
}

class BigHamburgerCheese extends BigHamburger{
    constructor() {
        super();
    }

    calculation() {
        this.price += 10;
        this.calories += 20;
    }

    render() {
        this.title = 'Большой гамбургер с сыром';
        super.render();
    }
}

class BigHamburgerSalad extends BigHamburger{
    constructor() {
        super();
    }

    calculation() {
        this.price += 20;
        this.calories += 5;
    }

    render() {
        this.title = 'Большой гамбургер с салатом';
        super.render();
    }
}

class BigHamburgerPotatoes extends BigHamburger{
    constructor() {
        super();
    }

    calculation() {
        this.price += 15;
        this.calories += 10;
    }

    render() {
        this.title = 'Большой гамбургер с картошкой';
        super.render();
    }
}

class Spice {
    constructor(hamburgerObj) {
        ({price: this.price, calories: this.calories, title: this.title} = hamburgerObj);
        this.calculation();
        this.render();
    }

    calculation() {
        this.price += 15;
    }

    render() {
        console.log(`${this.title} и приправой:\nЦена - ${this.price} рублей\nКалорийность - ${this.calories} калорий`)
    }
}

class Mayonnaise {
    constructor(hamburgerObj) {
        ({price: this.price, calories: this.calories, title: this.title} = hamburgerObj);
        this.calculation();
        this.render();
    }

    calculation() {
        this.price += 20;
        this.calories += 5;
    }

    render() {
        console.log(`${this.title} и майонезом:\nЦена - ${this.price} рублей\nКалорийность - ${this.calories} калорий`)
    }
}

const miniHamburger = new MiniHamburger();
const bigHamburgerCheese = new BigHamburgerCheese();
const bigHamburgerSalad = new BigHamburgerSalad();
const bigHamburgerPotatoes = new BigHamburgerPotatoes();

const spice = new Spice(bigHamburgerCheese);
const mayonnaise = new Mayonnaise(bigHamburgerSalad);
