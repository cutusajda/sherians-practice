class Animal{

    constructor(name,legs){
        this.name= name
        this.legs=legs
    }
    breathe() {
        console.log("hy")
    };

}

console.log(new Animal("sajda",2));

class Girl extends Animal{
    constructor(name , age ,gennder){
        super()
        this.name = name;
        this.age = age;
        this.gennder = gennder
    }

    canwalk(){
        console.log("yes she can grow")
    }
}

let a1 = new Girl("sneha",22,"female")
console.log(a1)