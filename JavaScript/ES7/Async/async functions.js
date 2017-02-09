/*

With async functions, all the remaining boilerplate is removed, leaving only the semantically meaningful code in the program text:

使用异步函数，删除所有剩余的样板，只留下程序文本中语义上有意义的代码：


https://tc39.github.io/ecmascript-asyncawait/

*/


async function chainAnimationsAsync(elem, animations) {
    let ret = null;
    try {
        for(const anim of animations) {
            ret = await anim(elem);
        }
    } catch(e) { /* ignore and keep going */ }
    return ret;
}













