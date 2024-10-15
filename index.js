// Write your solution in this file!
// 1. Declare a global variable `customerName` using `var` and assign it the value `'bob'`
var customerName = 'bob';

// 2. Define a function that uppercases the `customerName` variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Write a function that declares a global variable `bestCustomer` and assigns it `'not bob'`
function setBestCustomer() {
  bestCustomer = 'not bob'; // Note: no `var`, `let`, or `const` keyword here, so it goes to global scope.
}

// 4. Write a function that changes the `bestCustomer` variable to `'maybe bob'`
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant `leastFavoriteCustomer` in global scope and assign it an initial value
const leastFavoriteCustomer = 'initial customer';

// 6. Write a function that attempts to change `leastFavoriteCustomer`
// This will throw an error since `const` values cannot be reassigned
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will cause an error
}
