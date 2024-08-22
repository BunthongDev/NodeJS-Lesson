class SuperHero {
    constructor(name, age){
        this.name =name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    
    setName(name){
        this.name = name;
    }
    
    getAge(){
        return this.age;
    }

    setAge(Age){
        this.age = age;
    }
}

module.exports = new SuperHero("Batman");


