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
const webWorker = new Worker(`./web-workers.js`);

log(`\nwebWorker =`, webWorker);
// log(`\nwebWorker name =`, webWorker.name);
// undefined

webWorker.addEventListener(`message`, (msg) => {
  log(`\n✅主线程 收到 message =`, msg);
});
// 等价于
webWorker.onmessage = ((msg) => {
  log(`✅✅主线程 收到 message =`, msg);
});

webWorker.addEventListener(`error`, (err) => {
  log(`\n❌主线程 收到 error =`, err);
});
// 等价于
webWorker.onerror = ((err) => {
  log(`❌❌主线程 收到 error =`, err);
});

webWorker.addEventListener(`messageerror`, (err) => {
  log(`\n❌主线程 收到 messageerror =`, err);
});
// 等价于
webWorker.onmessageerror = ((err) => {
  log(`❌❌主线程 收到 messageerror =`, err);
});

webWorker.postMessage(`🚀主线程 发送 message`);
webWorker.postMessage({
  msg: '🚀🚀主线程 发送 message',
});

setTimeout(() => {
  // throw new Error(`手动触发 error`)；
  log(`主线程 手动终止 后台线程 🔒`)
  webWorker.terminate();
}, 3000);

// setTimeout(() => {
//   // throw new Error(`手动触发 error`)；
//   log(`主线程 手动终止 后台线程 🔒`)
//   webWorker.terminate();
// }, 4000);

// 手动终止后台线程
// webWorker.terminate();
