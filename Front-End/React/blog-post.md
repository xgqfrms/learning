Getting Started with React and JSX

By Sandeep Panda  April 14, 2016

This article was updated on 14th April, 2016. Specifically: installation instructions, code samples, ES5/ES6 syntax, precompiling JSX.

React is an open source library for building user interfaces. It lets you create views easily while making sure your UI stays in sync with the underlying data model. This article, targeted towards beginners, covers the basics of React and JSX syntax.

Getting Started with React
Probably, the easiest way to get started with React, is to include the necessary libraries from a CDN (we will do this in our examples). Alternatively, you can use npm or download the React starter kit from the official website.

To kick things off, let’s create a directory for our project which contains a file named index.html:

mkdir react-test && cd react-test
touch index.html
Open index.html in your favorite editor and add the following:

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First React Example</title>
  </head>
  <body>
    <div id="greeting-div"></div>

    <script src="https://fb.me/react-15.0.0.js"></script>
    <script src="https://fb.me/react-dom-15.0.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
    <script type="text/babel">
      var Greeting = React.createClass({
        render: function() {
          return (
            <p>Hello, Universe</p>
          )
        }
      });

      ReactDOM.render(
        <Greeting/>,
        document.getElementById('greeting-div')
      );
    </script>
  </body>
</html>
Let’s have a look at what’s going on.

React follows component oriented development. The general idea is to break your whole UI into a set of components. In our case we have just one component named Greeting. In React, you create a component by calling React.createClass(). Every component has a render() method which returns markup to render. In the above snippet we simply returned <p>Hello, Universe</p>, which is then displayed in the view.
A component doesn’t do anything until it’s rendered. To render a component you call ReactDOM.render() with the component to render as the first argument. The second argument is the HTML element in which you would like to render your component. In our case we render our Greeting component into the <div> with an ID of greeting-div.
You might be wondering what <greeting> really is? This syntax is known as JSX (JavaScript XML) which lets you build DOM nodes with HTML-like syntax. JSX is completely optional and you don’t need it in order to use React, but it has a lot of nice features and there is no reason not to take advantage of it.
Since the browser doesn’t understand JSX natively, we need to transform it to JavaScript first. This is handled by including Babel 5’s in-browser ES6 and JSX transformer called browser.js. Babel will recognize JSX code in <script type="text/babel"></script> tags and transform it into JavaScript on the fly. Transforming JSX in the browser works quite well during development. However, you will need to pre-compile your JSX code into JS before deploying to production so that your app renders faster. We will see how to do that later on.
Now you can open index.html in your browser and see the message “Hello, Universe” displayed (exciting, huh?).

Show me what the above snippet would look like without JSX.

Introducing Properties
React relies on unidirectional data flow. This means that data flow occurs in only one direction i.e. from parent to child via properties. These properties are passed to child components via attributes in JSX. Inside the component you can access the passed properties via the props property of the component. When the properties change, React makes sure to re-render your component so that your UI is up-to-date with the data model. Let’s modify the previous snippet to show a random message every two seconds.

var Greeting = React.createClass({
  render: function() {
    return (
      <p>{this.props.message}</p>
    );
  }
});

setInterval(function() {
  var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
  var randomMessage = messages[Math.floor((Math.random() * 3))];

  ReactDOM.render(
    <Greeting message={randomMessage}/>,
    document.getElementById('greeting-div')
  );
}, 2000);
The above code chooses a random message from an array and re-renders our component every two seconds. The chosen message is passed as a property called message. You also need to use pair of curly braces {} to pass the variable. Now inside the Greeting component, we access the passed value via this.props.message.

If you run the above snippet, it will display a random message every two seconds (assuming a different message is chosen each time).

Just note that the passed props are immutable. You just pass various properties to a component via props. Inside the component you never write to this.props. This keeps data flow unidirectional and it’s easier to understand how the data change affects the whole application.

Introducing State and Events
In React each component is encapsulated and maintains its own state (if stateful). A stateful component can store a value in its state and pass it to its child components via props. This ensures that whenever a component’s state changes, the props also change. As a result the child components that depend on these props re-render themselves automatically.

To reinforce this concept let’s modify our previous snippet so that a random message is displayed when a button is clicked. For this we will have two components:

RandomMessage: This is the parent component which maintains a randomly chosen message in its state.
MessageView: This is a child component which deals with displaying the randomly selected message.
Let’s take a look at each component in detail.

RandomMessage
var RandomMessage = React.createClass({
  getInitialState: function() {
    return { message: 'Hello, Universe' };
  },
  onClick: function() {
    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
    var randomMessage = messages[Math.floor((Math.random() * 3))];

    this.setState({ message: randomMessage });
  },
  render: function() {
    return (
      <div>
        <MessageView message={ this.state.message }/>
        <p><input type="button" onClick={ this.onClick } value="Change Message"/></p>
      </div>
    );
  }
});
Our component RandomMessage maintains a message property in its state. Every React component has a getInitialState function which sets the initial state of the component. In our case we initialize the message property to the value Hello, Universe.

Next, we need to display a button which, when clicked, updates the message property with a new value. The following is the markup returned by our component:

<div>
  <MessageView message={ this.state.message }/>
  <p><input type="button" onClick={ this._onClick } value="Change Message"/></p>
</div>
As you can see, this component renders a second component, MessageView, and an input button. Do note that message property of the component’s state is passed to the child component as an attribute in the JSX syntax. Our component also handles the button’s click event by attaching an event listener, this.onClick. Pay attention to camel casing here. In HTML the event names are written in lowercase i.e. onclick. But, in JSX you need to use camel case for event names.

Our click event handler chooses a random message and updates the component’s state by calling:

this.setState({ message:randomMessage });
The setState function is a way to inform React about a data change. This method updates the current state of the component and re-renders it. As a result the passed props are also recomputed and the child components which depend on these props also re-render themselves.

MessageView
var MessageView = React.createClass({
  render: function() {
    return (
      <p>{ this.props.message }</p>
    );
  }
});
This component just outputs the passed message property to the UI. You should note that this is a stateless component and is rendered by the stateful component RandomMessage.

Now that we have created the required components, it’s time to render the top level component RandomMessage. This is done as follows:

ReactDOM.render(
  <RandomMessage />,
  document.getElementById('greeting-div')
);
That’s it! Each time you click on the button you will see a different message (in so far as a new number is selected).

See the Pen bpaxvJ by SitePoint (@SitePoint) on CodePen.

Keeping JSX Separate
Until now we have been writing JSX inside script tags in our HTML. To keep your app structured you should keep each component in its own .jsx file. This means we can put the above snippet in a file called random-message.jsx and include it in HTML as shown below:

<script type="text/babel" src="src/random-message.jsx"></script>
So, the new HTML markup is:

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First React Example</title>
  </head>
  <body>
    <div id="greeting-div"></div>

    <script src="https://fb.me/react-15.0.0.js"></script>
    <script src="https://fb.me/react-dom-15.0.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
    <script type="text/babel" src="src/random-message.jsx"></script>
  </body>
</html>
Important note
Some browsers (e.g. Chrome) will fail to load the file unless it’s served via HTTP, which means that you’ll now need a server to view your page. A good one is http-server which can be installed from npm with the following command:

npm install -g http-server
And started frpm your project’s root directory like so:

http-server
Your page will now be viewable at http://127.0.0.1:8080/.

Precompiling JSX
As I mentioned earlier, it’s a good practice to precompile JSX for production usage. To do so you can use the babel-cli which you can also install via npm. As the current version of Babel (version 6) doesn’t include any transforms by default, additional packages must be installed. These bundle together a number of transforms, called presets:

npm init -y
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015 babel-preset-react
After that create a dist directory:

mkdir dist
And run:

babel --presets es2015,react --watch src/ --out-dir dist
Your JSX file will then be compiled and the compiled JavaScript written to a file of the same name in the dist directory. The compiled JavaScript can be included directly in your page, meaning that you no longer need to include browser.js. Also, specifying the --watch option will cause Babel to watch the src directory for further changes and recompile things if any are detected.

Note: we’re not actually taking advantage of ES2015 syntax in our simple example, but I’ve included the es2015 preset for those that are.

A Word on the Virtual DOM
React is very fast because of a technique called virtual DOM. It maintains a fast, in-memory representation of the DOM and never directly talks to the real DOM. A component’s render function tells React what the DOM should look like at any given time. You have seen me returning React components and HTML elements from components’ render function, but that doesn’t produce a real DOM! Rather it’s just a description of the DOM. React calculates the diff between this description and the in-memory DOM representation to compute the fastest way to update the browser.

Further Reading
This article provided an overview of React and JSX. Apart from being a rich view technology, React has many other benefits. You can read about many of them here: Forget Angular & Ember, React Has Already Won the Client-Side War.

If you want more information on React in general, check out our archives—we have plenty of great articles. If you’re interested in using React without JSX, you might like: Learn Raw React — no JSX, no Flux, no ES6, no Webpack…, or if you want to go ahead and learn something advanced you can read my previous tutorial Creating a Note Taking App with React and Flux.

Thanks for reading. If you have any questions do let me know in comments.











https://www.sitepoint.com/getting-started-react-jsx/





do not clear Chrome browsercache  (page cache)  










