// Write your solution in this file
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob'; //global because we didn't use var, let or const
}
function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anyone else';
}
