import { createStore } from 'redux'
import todoReducer from '../reducers'

let store = createStore(todoReducer);

store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Call Mom'));
