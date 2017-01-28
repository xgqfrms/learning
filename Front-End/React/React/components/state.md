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








