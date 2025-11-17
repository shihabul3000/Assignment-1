

function formateValue(value : string | number | boolean ){
    if ( typeof value == 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'number'){
        return value * 10 ;
    }

    else if(typeof value === 'boolean'){
        return !value;
    }

    else{
      
        return value;
    }
}

const value1 = formateValue(('hello'));
const value2 = formateValue(33);
const value3 = formateValue(false);





function getLength(input : string | any[] ): number {
    if(typeof input === 'string'){
  return input.length;
    }

    else if(Array.isArray(input)) {
        return input.length;
    }

    else{
   
        return 0;

    }
}





class Person {
    name : string;
    age : number;
    constructor (name : string , age : number){
        this.name = name;
        this.age = age;
    }

    getDetails() : string {
    return `Name : ${this.name} , Age : ${this.age}`
}
}

const person1 = new Person('John Doe' , 30);

const person2 = new Person('Alice' , 20);



type Item ={
    title : string;
    rating : number;

};

function filterByRating(items : Item[]) : Item[]{
    return items.filter(item => item.rating >= 4);
}

const books : Item[] =[

    
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },

]



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}


const users: User[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com',   isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com',   isActive: true },
];


interface Book {
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;

}

function printBookDetails(book : Book) : void {
    const availability = book.isAvailable? 'yes' : 'no';

   
}

const myBook : Book = {
    
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,

    }

    printBookDetails(myBook)



    function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];

   
    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];








type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products.reduce((total, product) => {
        let productTotal = product.price * product.quantity;

      
        if (product.discount && product.discount > 0) {
            productTotal -= (productTotal * product.discount) / 100;
        }

        return total + productTotal;
    }, 0);
}


const products: Product[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

