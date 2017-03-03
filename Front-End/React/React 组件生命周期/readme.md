# React 组件生命周期





## React 组件生命周期(offical)


https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle



## The Component Lifecycle  

Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

每个组件都有几个“生命周期方法”，您可以覆盖这些方法，以在过程中的特定时间运行代码。

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

















