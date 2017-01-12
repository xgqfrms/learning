// functions



// DON'T
function getUserRouteHandler (req, res) {  
  const { userId } = req.params
  // inline SQL query
  knex('user')
    .where({ id: userId })
    .first()
    .then((user) => res.json(user))
}

// DO
// User model (eg. models/user.js)
const tableName = 'user'  
const User = {  
  getOne (userId) {
    return knex(tableName)
      .where({ id: userId })
      .first()
  }
}

// route handler (eg. server/routes/user/get.js)
function getUserRouteHandler (req, res) {  
  const { userId } = req.params
  User.getOne(userId)
    .then((user) => res.json(user))
}







// DON'T
/**
 * Invite a new user with its email address
 * @param {String} user email address
 */
function inv (user) { /* implementation */ }

// DO
function inviteUser (emailAddress) { /* implementation */ } 






// DON'T
function getRegisteredUsers (fields, include, fromDate, toDate) { 
    /* implementation */ 
}  
getRegisteredUsers(['firstName', 'lastName', 'email'], ['invitedUsers'], '2016-09-26', '2016-12-13')

// DO
function getRegisteredUsers ({ fields, include, fromDate, toDate }) { 
    /* implementation */ 
}  

getRegisteredUsers({  
  fields: ['firstName', 'lastName', 'email'],
  include: ['invitedUsers'],
  fromDate: '2016-09-26',
  toDate: '2016-12-13'
})





// DON'T
function addItemToCart (cart, item, quantity = 1) {  
  const alreadyInCart = cart.get(item.id) || 0
  cart.set(item.id, alreadyInCart + quantity)
  return cart
}

// DO
// not modifying the original cart
function addItemToCart (cart, item, quantity = 1) {  
  const cartCopy = new Map(cart)
  const alreadyInCart = cartCopy.get(item.id) || 0
  cartCopy.set(item.id, alreadyInCart + quantity)
  return cartCopy
}

// or by invert the method location
// you can expect that the original object will be mutated
// addItemToCart(cart, item, quantity) -> cart.addItem(item, quantity)
const cart = new Map()  
Object.assign(cart, {  
  addItem (item, quantity = 1) {
    const alreadyInCart = this.get(item.id) || 0
    this.set(item.id, alreadyInCart + quantity)
    return this
  }
})





// DON'T
// "I need the full name for something..."
function getFullName (user) {  
  return `${user.firstName} ${user.lastName}`
}

function renderEmailTemplate (user) {  
  // "oh, here"
  const fullName = getFullName(user)
  return `Dear ${fullName}, ...`
}

// DO
function renderEmailTemplate (user) {  
  // "I need the full name of the user"
  const fullName = getFullName(user)
  return `Dear ${fullName}, ...`
}

// "I use this for the email template rendering"
function getFullName (user) {  
  return `${user.firstName} ${user.lastName}`
}




