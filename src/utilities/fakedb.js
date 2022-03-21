//use local storage to manage cart data

const addToDb = (id) => {
    let quantity = localStorage.getItem(id);

    if (quantity) {
        quantity = parseInt(quantity);
        localStorage.setItem(id, quantity + 1);
    } else {
        localStorage.setItem(id, 1);
    }

}

export { addToDb }