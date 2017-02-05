# Redux  


*******************************************************************************


http://redux.js.org/

https://github.com/reactjs/redux



https://github.com/reactjs/react-redux

http://redux.js.org/docs/basics/UsageWithReact.html



https://egghead.io/courses/getting-started-with-redux




https://github.com/gaearon/redux-devtools

https://www.youtube.com/watch?v=xsSnOQynTHs


*******************************************************************************


https://reduxframework.com/

What is Redux?
Redux is a simple, truly extensible options framework for WordPress themes and plugins.

*******************************************************************************




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



## actions



Let’s look at the building blocks. How does the code look like.

First we have actions. Pretty simple just an JS object. 
The only thing important is that an action must have a type.
Data is optional.



const action = {
    type: 'ADD_TODO',
    text: 'Call Mom',
}


## action creators

We use action creators to create these actions an ideally do something with the data.

API calls also come here.


function addTodo(text) {
    const trimmedText = text.trim();
    return {
        type: 'ADD_TODO',
        text: trimmedText,
    }
}


<button onClick={ dispatch( addTodo('Call Mom')}>
    Add Todo
</button>



## Reducer 


In the reducers we get the state passed in and then depending on the action type we manipulate the data. Get from one state to the next.

Think about we reducing the passed state + the action to the new state. 
In this case we simply create a new arrays with the an action appended to it.
By default it is marked as not completed. You can see we leverage the text of the actions here.


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
    default:
        return state
    }
}



## Store  

The last pice in the puzzle is the store. 
It is initialised with the reducers , In our case the todo.
You can subscribe to it and when you dispatch a new action it will inform the subscribers.


import { createStore } from 'redux'
import todoReducer from '../reducers'

let store = createStore(todoReducer);

store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Call Mom'));


## Connect React with Redux  

To make it work we need to wrap our App with a custom Provider component.


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './containers/App';

let store = createStore(todoApp);
let exampleNode = document.getElementById('example');

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    exampleNode
);




To connect the store with our react components we wrap our root App component with a connect. 
Then you get the dispatch function from the store + state.

To be honest that’s a bit of magic I don’t want to dive into too deep, but it works like a charm.



import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions.js';

const App = ({dispatch, state}) => {
    return (
        <button onClick={ dispatch(addTodo('Call Mom') }>
            Add Todo
        </button>
    );
};

export default connect(App);









- Redux allows you to manage the state with predictable behaviour.
- (previousState, action) => newState




## Why this Stack?

- Reusable Components
- Predictable Code (functional)
- TimeTravel
- Performant & lightweight


## Is it production ready?


React
- used by Facebook, Firefox, Airbnb and many more

Redux
- used by Firefox, Docker, Technical University of Vienna, Mattermark and many more
- “Love what you’re doing with Redux”  Jing Chen, creator of Flux





## Vienna React Meetup

http://www.meetup.com/Vienna-ReactJS-Meetup/


https://github.com/nikgraf

https://twitter.com/nikgraf 

































