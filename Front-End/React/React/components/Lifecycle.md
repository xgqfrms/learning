# Lifecycle  


## State and Lifecycle

https://facebook.github.io/react/docs/state-and-lifecycle.html



## Referencing Context in Lifecycle Methods 

https://facebook.github.io/react/docs/context.html#referencing-context-in-lifecycle-methods


If contextTypes is defined within a component, the following lifecycle methods will receive an additional parameter, the context object:  

constructor(props, context)
componentWillReceiveProps(nextProps, nextContext)
shouldComponentUpdate(nextProps, nextState, nextContext)
componentWillUpdate(nextProps, nextState, nextContext)
componentDidUpdate(prevProps, prevState, prevContext)



## The Component Lifecycle

https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle




The Component Lifecycle #
Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

## Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

constructor()
componentWillMount()
render()
componentDidMount()

## Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

## Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()

## Other APIs
Each component also provides some other APIs:

setState()
forceUpdate()

## Class Properties

defaultProps
displayName
propTypes

## Instance Properties

props
state



## React components lifecycle diagram  

https://codepen.io/xgqfrms/pen/xgPjrN


http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/


https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/

http://busypeoples.github.io/post/react-component-lifecycle/


https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df#.mjbupgfxh

https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df#.iaj2amt69

https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm



## react2

https://react2.xgqfrms.xyz/docs/tutorial.html

https://github.com/reactjs/react-tutorial

https://react2.xgqfrms.xyz/docs/why-react.html

https://react2.xgqfrms.xyz/docs/top-level-api.html



ReactDOMServer

服务器上渲染








