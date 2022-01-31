var favouriteBook = 'Pother pachali';
var bookList = ['positioning', 'start with why', 'shoe dog'];
//! array index start with 0
// we can know array index by by using variableName.indexof()
console.log('the index of shoe dog is ' + bookList.indexOf('shoe dog'));
bookList[1] = 'pother pachali'; // we can change the value of the array variable
bookList.push('sky net'); // add in the end of the array
bookList.pop(); // remove the last item of the array.

// conditional
if (bookList[2] == 'shoe dog') {
    console.log('the name of the book is shoe dog');
}
else {
    console.log("the book isn't shoe dog.");
}

// loop
var i = 0;
while (i < 15) {
    console.log(i);
    i++ //! must add increment on decrement else the loop will be infinite.
}


for (i = 0; i < 15; i++) {
    console.log('my name is Muntasir');
}