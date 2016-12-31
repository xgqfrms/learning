# React  

https://facebook.github.io/react  
https://facebook.github.io/react/tutorial/tutorial.html  

https://github.com/reactjs  
https://github.com/reactjs/react-tutorial  
https://github.com/reactjs/react-router-tutorial  
https://github.com/reactjs/react-art  
https://github.com/reactjs/react-magic  
https://github.com/reactjs/react-future  
https://github.com/reactjs/express-react-views  
https://github.com/reactjs/redux  


https://github.com/reactjs/react-basic  

https://github.com/react-guide/react-basic  



F:\Books\React-all-in-one  


https://egghead.io/courses/building-react-applications-with-idiomatic-redux  
https://egghead.io/react-redux-cheatsheets  






https://online.reacttraining.com/courses/enrolled/reactjsfundamentals  

http://www.reactboilerplate.com/  

https://github.com/reactjsprogram  
https://github.com/ReactjsProgram/React-Fundamentals  
https://github.com/ReactjsProgram/react-fundamentals-curriculum  

https://github.com/ReactjsProgram/React-Fundamentals/tree/video12  






let temp = {
       _id: 7,
       name: "xgqfrms",
       age: 23,
       type: 1,
       status: "A",
       favorites: { artist: "Picasso", food: "pizza" },
       finished: [ 17, 32 ],
       badges: [ "green", "black" ],
       points: [
          { points: 99, bonus: 30 },
          { points: 99, bonus: 30 }
       ]
     }

db.users.insertOne(temp)


db.users.find()
db.users.find().pretty()


db.users.find({"points.points[0]":{$lt:50}}).pretty()


db.users.find({name: "xgqfrms"}).pretty()

show collections









