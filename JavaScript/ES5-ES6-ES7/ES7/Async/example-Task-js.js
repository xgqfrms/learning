/*


Already with promises, the code is much improved from a straight callback style, where this sort of looping and exception handling is challenging.

Task.js and similar libraries offer a way to use generators to further simplify the code maintaining the same meaning:

https://tc39.github.io/ecmascript-asyncawait/

*/



function chainAnimationsGenerator(elem, animations) {
    return spawn(function*() {
        let ret = null;
        try {
            for(const anim of animations) {
                ret = yield anim(elem);
            }
        } catch(e) { /* ignore and keep going */ }
        return ret;
    });
}




