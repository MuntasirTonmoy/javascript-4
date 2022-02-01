// object property
// key: value,

var laptop = {
    price: 40000,
    storage: 512,
    processor: 'Intel core i5',

};

// for seeing the object 
console.log(laptop);

//if I want to see any specific property like: processor then 
//* objectName.propertyName
console.log(laptop.processor);

var laptopPrice = laptop.price;
console.log('the laptop price is ', laptopPrice);

//* for setting a object property value

laptop.price = 100000;
console.log('the update price is ', laptop.price);

// different ways to set a value of object property;

laptop.price = 2000000;

//or 

laptop["price"] = 2300000000000;
console.log(laptop.price);

//or
var lapPrice = "price";
laptop[lapPrice] = 125435434;
console.log(laptop.price);

// example:
var storageNeed = "storage";
laptop[storageNeed] = 1024;
console.log(laptop.storage);
