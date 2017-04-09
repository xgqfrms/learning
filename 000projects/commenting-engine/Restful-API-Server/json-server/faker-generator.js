var faker = require('faker');

function generateEmployees() {
    var employees = {};
    var temp = [];
    var num = 10;
    var firstName = null,
        lastName = null,
        email = null;
    for (var i = 0; i < num; i++) {
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        email = faker.internet.email();

        // Object.assign({}, {
        //     "id" : i,
        //     "firstName" : firstName,
        //     "lastName" : lastName,
        //     "email" : email
        // });
        temp.push({
            "id": i + 1,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        });
    }
    Object.assign(employees, temp);
    return {
        "employees": employees
    }
}

module.exports = generateEmployees;

/*

$ json-server --watch db.json

$ json-server --watch faker-object.js


http://localhost:3000/

http://localhost:3000/db

http://localhost:3000/employees

https://gist.github.com/xgqfrms-GitHub/cb8459af5e7db7af107a25615f738ab5

*/