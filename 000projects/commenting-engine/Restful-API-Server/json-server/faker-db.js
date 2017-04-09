const faker = require('faker');

generateEmployees = () => {
    let employees = [],
        num = 30,
        firstName = null,
        lastName = null,
        email = null;
    for (let i = 1; i <= num; i++) {
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        email = faker.internet.email();
        employees.push({
            "id": i,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        });
    }
    return {
        "employees": employees
    }
}

export default generateEmployees;