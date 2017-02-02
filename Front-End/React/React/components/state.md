# this.state  


## Components and Props

https://facebook.github.io/react/docs/components-and-props.html


## The Component Lifecycle

https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle



https://facebook.github.io/react/docs/state-and-lifecycle.html

## State and Lifecycle






https://www.codecademy.com/en/courses/react-101/lessons/this-state/exercises/this-state-intro?action=lesson_resume&link_content_target=interstitial_lesson



## dynamic information  


字典定义告诉我们，“动态”一词的特征是持续的变化，活动或进步。
这是一个“动态信息源”的相当准确的描述。

http://www.teach-ict.com/as_a2_ict_new/ocr/AS_G061/311_data_info_knowledge/static_dynamic_data/miniweb/pg4.htm



Dynamic information is information that can change.

React components will often need dynamic information in order to render. For example, a component displaying a game's score will need to check the score before it can display it.

组件有两种方式获取动态信息：props和state。

除了props和state，组件中的所有内容应始终保持完全相同。

现在是时候了解state。
props和state是你需要建立一个相互作用的React组件的生态系统。


https://www.codecademy.com/courses/react-101/lessons/this-state/exercises/getinitialstate?action=lesson_resume&link_content_target=interstitial_lesson

与props不同，组件的state不会从外部传递。组件决定自己的和state。

getInitialState


var Example = React.createClass({
    getInitialState: function () {
        return { mood: 'decent' };
    },

    render: function () {
        return <div></div>;
    }
});

<Example />


getInitialState: function () {
    return { title: 'Best App' }
},



## read state

this.state.???


var TodayImFeeling = React.createClass({
    getInitialState: function () {
        return { mood: 'decent' };
    },

    render: function(){
        return (
            <h1>
                I'm feeling {this.state.mood}!
            </h1>
        );
    }
});



## set state

this.setState

this.setState有两个参数：一个将更新组件状态的对象和一个回调。
你基本上不需要回调。

``` 
{
    mood: 'great',
    hungry: false
}

+

this.setState({ hungry: true });

=

{
    mood: 'great',
    hungry: true
}

``` 


this.setState接受一个对象，并将该对象与组件的当前状态合并。

如果当前状态中有属性不是该对象的一部分，那么这些属性保持不变。



调用this.setState的最常见的方法是调用一个自定义函数，它包装一个this.setState调用。


var Example = React.createClass({
    getInitialState: function () {
        return { weather: 'sunny' };
    },

    makeSomeFog: function () {
        this.setState({
            weather: 'foggy'
        });
    }
});



你不能从render函数里面调用this.setState！

var green = '#39D1B4';

getInitialState: function () {
    return {
        color: green 
    };
},

不要把green放在引号中！green不应该是字符串，它应该是第4行声明的变量的引用

style={{background: this.state.color}}

确保包括双大括号！我们将在React.js第二部分简介中解释。





任何时候你调用this.setState，一旦状态改变this.setState 就自动立即调用render。


想想this.setState实际上是两件事：this.setState，紧接着是render。

这就是为什么你不能从render函数里面调用this.setState！

this.setState自动调用render。
如果render调用this.setState，你将创建一个无限循环。




