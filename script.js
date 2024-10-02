// Parent class
class Animal {
    #name;
    constructor(name) {
        this.#name = name;
    }

    speak() {
        return `${this.#name} makes a sound.`;
    }

    getName() {
        return this.#name;
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    dogspeak() {
        return `${this.getName()} barks.`;
    }
}

// Creating objects
const animal = new Animal('Generic Animal');
const dog = new Dog('Rex');

// Displaying the output
document.getElementById('output').innerHTML = `
    <p>${animal.speak()}</p>
    <p>${dog.dogspeak()}</p>
    <p>Also, ${dog.speak()}</p>
`;
