# requestAnimationFrame  



http://www.webhek.com/requestanimationframe

HTML5探秘：用requestAnimationFrame优化Web动画







http://www.webhek.com/using-requestanimationframe


使用requestAnimationFrame()优化JavaScript动画性能






在JavaScript里曾经只有一种方法来设定定时循环任务：setInterval()。如果你想快速的重复有些动作(但又不是像直接调用for循环那样立即执行)，你就需要用到定时调度。最常见的就是动画绘制过程，当动画的绘制速度达到每秒钟60帧时，动画会显得非常的流畅，于是，你需要允许像下面这样一个定时循环任务：

setInterval(function() {
  // 做某些动画任务
}, 1000/60);
但现在有了一个新的、性能更好的方法可以实现这个任务。之前我们曾讲过requestAnimationFrame() 这个方法。那篇文章里是一个系统的介绍，今天将在这里举2个实际例子和用法。








为什么requestAnimationFrame()更好？

浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果。
在一个浏览器标签页里运行一个动画，当这个标签页不可见时，浏览器会暂停它，这会减少CPU，内存的压力，节省电池电量。
最简单的一个使用requestAnimationFrame()的例子

function repeatOften() {
  // 做某些事情
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
这个方法一旦启动，它就会递归的调用自己。






requestAnimationFrame 函数能返回一个ID，根据这个ID，你可以停止它的允许，这就像 setTimeout 和 setInterval 的用法一样。下面是一个实际可运行的例子：

var globalID;

function repeatOften() {
  document.getElementsByTagName("body").appendChild('#');;
  globalID = requestAnimationFrame(repeatOften);
}

$("#start").on("click", function() {
  globalID = requestAnimationFrame(repeatOften);
});

$("#stop").on("click", function() {
  cancelAnimationFrame(globalID);
});








