# component props  


组件的props是一个对象。它保存有关该组件的信息。


this.props


render: function () {
    console.log("Props object comin' up!");
    console.log(this.props);
    console.log("That was my props object!");
    return <h1>Hello world</h1>;
}



this.props中的大部分信息是相当无用的！但有些是非常重要的。


##  component attribute

<Greeting firstName='xgqfrms' />

## component display passed-in information


{this.props.firstName}


pass a prop from one component to another.



props是存储传入信息的对象的名称。 this.props指的是存储对象。


同时，每条传入的信息也称为prop。
props可以引用两条传入的信息，或者它可以引用存储这些信息的对象


<h1 onClick={this.handleEvent}>
    Hello world
</h1>

## event handler


<Button talk={this.talk} />


π

<button onClick={this.props.talk}>
    Click me!
</button>


当你传递一个事件处理程序作为prop，就像你刚才做的，有两个名称，你必须选择


