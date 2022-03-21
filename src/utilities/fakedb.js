//use local storage to manage cart data

const addToDb = (id) => {
    let shoppingCart;
    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }


    //add quantity
    let quantity = shoppingCart[id];
    if (quantity) {
        quantity = parseInt(quantity);
        shoppingCart[id] = quantity + 1;
        // localStorage.setItem(id, quantity + 1);
    } else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    console.log(shoppingCart);
    console.log(shoppingCart[id]);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export { addToDb }