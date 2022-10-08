"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-01-01
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

// 实例化
log(`\n👻 Web Worker self =`, self);

// log(`Web Worker self.name =`, self.name);
// undefined

// 自定义 name
self.name = `web workers`;
log(`\n👻 self.name =`, self.name);
// web workers

// ❌ Uncaught TypeError: self is not iterable
// for (const prop of self) {
//   if(self.hasOwnProperty(prop)) {
//     log(`self.${prop} =`, prop);
//   }
// }

for (const prop in self) {
  if(self.hasOwnProperty(prop)) {
    // log(`self.${prop} =`, prop);
  }
}

/*

self.name = name

self.onmessage = onmessage
self.onmessageerror = onmessageerror

self.close = close

self.postMessage = postMessage

self.requestAnimationFrame = requestAnimationFrame
self.cancelAnimationFrame = cancelAnimationFrame

self.webkitRequestFileSystem = webkitRequestFileSystem
self.webkitRequestFileSystemSync = webkitRequestFileSystemSync

self.webkitResolveLocalFileSystemSyncURL = webkitResolveLocalFileSystemSyncURL
self.webkitResolveLocalFileSystemURL = webkitResolveLocalFileSystemURL

*/

self.addEventListener(`message`, (messageEvent) => {
  // MessageEvent 
  log(`\n✅后台线程 收到 message =`, messageEvent.data);
});
// 等价于
self.onmessage = ((messageEvent) => {
  // MessageEvent 
  log(`✅✅后台程 收到 message =`, messageEvent.data);
});

self.addEventListener(`error`, (err) => {
  log(`\n❌后台线程 收到 error =`, err);
});
// 等价于
self.onerror = ((err) => {
  log(`❌❌后台线程 收到 error =`, err);
});

self.addEventListener(`messageerror`, (err) => {
  log(`\n❌后台线程 收到 messageerror =`, err);
});
// 等价于
self.onmessageerror = ((err) => {
  log(`❌❌后台线程 收到 messageerror =`, err);
});

self.postMessage(`🚀后台线程 发送 message`);
self.postMessage({
  msg: '🚀🚀后台线程 发送 message',
});

// setTimeout(() => {
//   // throw new Error(`手动触发 error`)；
//   log(`手动关闭 后台线程 🔒`)
//   self.close();
// }, 3000);

// setTimeout(() => {
//   // throw new Error(`手动触发 error`)；
//   log(`手动关闭 后台线程 🔒`)
//   self.close();
// }, 4000);


// 手动关闭
// self.close();


