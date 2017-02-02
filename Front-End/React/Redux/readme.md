# Redux  



Redux to rescue!

Redux allows you to manage the state with a minimal API but completely predictable behaviour.



## Basic Principle

(previousState, action) => newState



## Flux => (Redux & Relay)  

Well, you might heard of Flux. It’s this application concept developed by Facebook which works well with React.

From Flux we evolved into two directions: Redux & Relay







Interestingly since quite some time in Web Development we learned to keep the data in one place. 
We don't store our data somewhere in memory or code. 
No, we have a database and when you do a request the application runs and gives you back a response. 
It's like a big function.

Redux follows the same principle. 
It has one central place for your complete app state. 
That right now might scare the hell out of you.




## Redux Flow  

Let me give you a brief overview about how it works.

The core of redux its the store instance. 
It is responsible to for keeping the application state. 
As you can see here the store provides the state to our react components and they render accordingly. 
When the user triggers an interaction like she clicks on a button we dispatch an actions. 
This action is passed to the reducers which create a new application state and return it to the store. 
That again influences the rendering. 
The cycle is complete.

























