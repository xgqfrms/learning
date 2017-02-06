# ReactElement  




******************************************************************************



https://facebook.github.io/react/blog/2014/10/14/introducing-react-elements.html

https://facebook.github.io/react/docs/react-api.html


******************************************************************************




## Third-party Languages

The signature of a ReactElement is something like this:


{
    type : string | class,
    props : { children, className, etc. },
    key : string | boolean | number | null,
    ref : string | null
}


Languages with static typing that don't need validation (e.g. Om in ClojureScript), and production level compilers will be able to generate these objects inline instead of going through the validation step. This optimization will allow significant performance improvements in React.







## The Next Step: ES6 Classes

After 0.12 we'll begin work on moving to ES6 classes. We will still support React.createClass as a backwards compatible API. If you use an ES6 transpiler you will be able to declare your components like this:

export class MyComponent {
    render() {
        ...
    }
};

This upcoming release is a stepping stone to make it as easy as this. Thanks for your support.




