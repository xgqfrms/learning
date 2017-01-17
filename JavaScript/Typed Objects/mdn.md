日益清晰地是有时候 JavaScript 代码能够快速而且方便地处理原始数据这将会对我们很有帮助. 在以前, 实现这种形式地方式是将这些原始数据当作 string 来用并且使用 charCodeAt() 方法从数据缓冲区(buffer)中来读取字节.

由于需要进行多次地数据转换，原始地方式不仅低效而且容易出错 (特别是假设二进制数据不是实际上的字节格式数据, 例如 32 位整数或者浮点数).

JavaScript typed arrays 提供了一个更加高效的机制来访问和处理原始二进制数据。


文档
ArrayBuffer
ArrayBuffer 这一个数据类型是用来表示一个通用的，固定长度的二进制缓冲区(buffer)。你不能直接操作 ArrayBuffer 里面的数据; 对应的是你需要创建一个 ArrayBufferView 对象来表示一个指定类型缓冲区，然后用它来读写缓冲区里面的内容。

ArrayBufferView
ArrayBufferView 这个类型描述了某一个特定的 ArrayBuffer 的数据内容视图. 要注意的是你可能会给同一个数据缓冲区创建多个视图, 每一个视图查看的是当前缓冲区的一段特定偏移的数据。这就提供了一个功能就是创建多个不同类型的视图来获取 ArrayBuffer 的特定数据偏移的内容。 
DataView
DataView 提供了一些底层的接口来从 ArrayBuffer 中读取和写入数据.

StringView 非原生(native code)
在这篇文章里面我们发布了一个我们自己的库，这个库的主要目标是：
创建一个 类似 C 语言的字符串操作接口 (换而言之. 一个字符数组 — 一个 Javascript 的 ArrayBufferView) 基于 JavaScript 的 ArrayBuffer 的接口，


创建一个 高伸缩性的 库，那样所有人都可以通过给 StringView.prototype 对象添加方法来扩展这个库，
给类似字符串的对象创建一些方法(since now: stringViews) 它严格工作在一个只包含数字的数组内 而不是创建一个不变的 JavaScript 字符串，
和默认 JavaScript 的 UTF-16 {{domxref("DOMString")}}s 编码不一样， 它和其他的 Unicode 编码兼容，
Getting ArrayBuffers or typed arrays from Base64-encoded strings
一个从 Base64 编码 字符串获取 ArrayBuffers 或者 typed arrays 的代码片段。
FileReader.prototype.readAsArrayBuffer()
FileReader.prototype.readAsArrayBuffer() 方法用作从指定的 Blob 或者 File 中开始读取里面的内容。
XMLHttpRequest.prototype.send()
XMLHttpRequest 实例的 send() 方法现在支持 typed arrays and ArrayBuffers 作为其参数传入.




社区
View Mozilla forums... {{ DiscussionList("dev-web-development", "mozilla.dev.web.development") }}
工具
Getting ArrayBuffers or typed arrays from Base64-encoded strings
StringView – a C-like representation of strings based on typed arrays
View All...

相关主题
File
Blob



缓冲区和视图:  typed array 架构
为了达到最大的灵活性和高效性， JavaScript 的 typed array 把实现分成了缓冲区(buffer)和视图(view)。 一个缓冲区 (ArrayBuffer 类的实现) 是一个表示某一个数据片段的对象; 它没有格式可言, 而且它没有能力去访问和操作它自身的数据内容. 为了能够访问缓冲区里所存储的数据，你应该使用一个视图。 一个视图提供了一个上下文—那就是, 一个数据类型, 起始数据偏移量, 和其他一些元素—以上这些把数据转化成实际的 typed array。 视图(Views)都是 ArrayBufferView 类和它的一些子类。





Typed array 的子类
下面的这些子类都提供了对应的缓冲区视图(Buffer Views)来访问对应的数据类型。 要注意的是下面的数据类型都处理超过一个字节的数据 (例如. Int16Array) 使用对应平台默认的字节序. 如果需要处理超过所需要字节数，那么使用 DataView 来代替。

类型  大小  描述  对等 C 类型
Int8Array   1   8-bit twos complement signed integer    signed char
Uint8Array  1   8-bit unsigned integer  unsigned char
Uint8ClampedArray   1   8-bit unsigned integer  unsigned char
Int16Array  2   16-bit twos complement signed integer   short


Uint16Array 2   16-bit unsigned integer unsigned short
Int32Array  4   32-bit twos complement signed integer   int
Uint32Array 4   32-bit unsigned integer unsigned int
Float32Array    4   32-bit IEEE floating point number   float
Float64Array    8   64-bit IEEE floating point number   double



Typed arrays 的超类
类型  描述
DataView    DataView 提供了一些底层接口从一个 ArrayBuffer 里读写数据。
StringView 非原生  StringView 提供了一些 类C语言的字符串操作接口 (换而言之. 一个字符数组 — 一个 JavaScript 里的 ArrayBufferView) 基于 JavaScript 的  ArrayBuffer 的接口,
把view和buffer结合在一起使用
我们一起来创建一个 16-byte 的缓冲区(buffer):

var buffer = new ArrayBuffer(16);
这个时候，我们就有了一个在内存里面的数据块并且里面的数据都被初始化为0。尽管我们并不能对它进行更多的操作，我们还是可以确认它的长度是 16 个字节，我们也就只能做这么多了:



这个时候，我们就有了一个在内存里面的数据块并且里面的数据都被初始化为0。尽管我们并不能对它进行更多的操作，我们还是可以确认它的长度是 16 个字节，我们也就只能做这么多了:

if (buffer.byteLength == 16) {
  alert("Yes, it's 16 bytes.");
} else {
  alert("Oh no, it's the wrong size!");
} 
在我们可以真正的去操作这个缓冲区的时候，我们需要创建一个视图(view)。让我们来创建一个视图来把缓冲区里面的数据当作一个里面只包含 32-bit signed integers 的数组 :

var int32View = new Int32Array(buffer);




现在我们可以和处理一般数组一样去操作里面的数据了 :

for (var i=0; i<int32View.length; i++) {
  int32View[i] = i*2;
}
上面的操作会填满这个数组里面的四个元素 (4 个 4 字节合起来 16 就有字节) 包含了数据 0, 2, 4, 和 6.

多个视图操作一个数据缓冲区

当你开始想着手创建多个视图来操作一个数据缓冲区的时候一切都会变得有意思起来。例如接着上面的代码, 我们可以这么做 :



var int16View = new Int16Array(buffer);

for (var i=0; i<int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}
这里我们创建了一个 16-bit integer 视图来和一个已经存在的 32-bit 视图共享同一个缓冲区(buffer) 然后我们以 16-bit intergers 的形式输出 buffer 里面的数据。这样的话我们就可以得到输出 0, 0, 2, 0, 4, 0, 6, 0。

当然你可以更进一步，参考下面的代码 :

int16View[0] = 32;
console.log("Entry 0 in the 32-bit array is now " + int32View[0]);
上面代码的输出就成了 "Entry 0 in the 32-bit array is now 32". 换句话说,，两个数组实际上很简单的操作地操作着同一个数据缓冲区地数据，但是以不同地类型方式进行操作。你可以对任何地 view types 做同样的事情。


操作更复杂的数据结构
通过多个不同类型组合起来的共同操作一个数据缓冲区，这些视图在数据缓冲区内的偏移量各不相同, 你可以将数这个据缓冲区中写入包含不同数据类型的对象。这可以让你, 例如, 和 WebGL 进行复杂的数据交互，数据文件, 或者 C 结构体当你需要用到 js-ctypes 的时候。

考虑下面 C 结构体:

struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
你可以以下面形式来访问一个缓冲区里包含的数据 :


var buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
这样你就可以进行数据操作了，例如， 用 amountDueView[0]来操作 amount due .

Note: The data structure alignment in a C structure is platform-dependent. Take precautions and considerations for these padding differences.
转换成普通的数组



在操作完一个 typed array 以后, 有时候我们需要把它转换回一个普通的数组因为我们可以可以从Array 的原型中得到普通数组里面的所有方法。下面就是达成转换目标的方法。

var typedArray = new Uint8Array( [ 1, 2, 3, 4 ] ),
    normalArray = Array.apply( [], typedArray );
normalArray.length === 4;
normalArray.constructor === Array;
兼容性
Typed arrays 已经在 Webkit 中可用了. Chrome 7 支持 ArrayBuffer, Float32Array, Int16Array, 和 Uint8Array. Chrome 9 和 Firefox 15 添加了 DataView 对象的支持. Internet Explorer 10 除了 Uint8ClampedArray 和 ArrayBuffer.prototype.slice 以外都支持.

规范
Typed Array Specification
参见
Int8Array, Int16Array, Int32Array
Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray
Float32Array, Float64Array
DataView
StringView
Getting ArrayBuffers or typed arrays from Base64-encoded strings













