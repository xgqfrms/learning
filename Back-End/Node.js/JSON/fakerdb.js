var faker = require('faker');

function generateEmployees(){
    var employees = [];
    var num = 30;
    var firstName = null,
        lastName = null,
        email = null;
    for( var i = 0; i < num; i++){
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        email = faker.internet.email();

        employees.push({
            "id" : i,
            "firstName" : firstName,
            "lastName" : lastName,
            " email" : email
        });
    }
    return {
        "employees" : employees
    }
}

module.exports = generateEmployees;

/*

$ json-server --watch db.json

$ json-server --watch fakerdb.js

*/


/*

    var firstName = null;
    // undefined
    firstName;
    // null
    typeof(firstName);
    // "object"


    var lastName;
    // undefined
    lastName;
    // undefined
    typeof(lastName);
    // "undefined"


    var firstName = "";
    // undefined
    firstName;
    // ""
    typeof(firstName);
    // "string"


    var lastName = undefined;
    // undefined
    lastName;
    // undefined
    typeof(lastName);
    // "undefined"

    var firstName = 0;
    // undefined
    firstName;
    // 0
    typeof(firstName);
    // "number"


    var firstName = [];
    // undefined
    firstName;
    // []
    typeof(firstName);
    // "object"

    var firstName = {};
    // undefined
    firstName;
    // Object {}
    typeof(firstName);
    // "object"


    var firstName = NaN;
    // undefined
    firstName;
    // NaN
    typeof(firstName);
    // "number"


    var firstName = false;
    // undefined
    firstName;
    // false
    typeof(firstName);
    // "boolean"

    var firstName = Symbol();
    // undefined
    firstName;
    // Symbol()
    typeof(firstName);
    // "symbol"

    var firstName = Symbol("this is a symbol");
    // undefined
    firstName;
    // Symbol(this is a symbol)
    typeof(firstName);
    // "symbol"

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol

*/
