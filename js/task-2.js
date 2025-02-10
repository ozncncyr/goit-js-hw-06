// Depo

class Storage {
    #items;
    
    constructor(initialItems) {
        this.#items = initialItems;
    }
    getItems() { 
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(removingItem) {
        this.#items = this.#items.filter(item => item !== removingItem);
    }
}

const storage = new Storage(["Nanitoid", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoid", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoid", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoid", "Antigravitator", "Droid"]