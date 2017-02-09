/*

Examples#

Take the following example, first written using Promises. 
This code chains a set of animations on an element, stopping when there is an exception in an animation, and returning the value produced by the final succesfully executed animation.


https://tc39.github.io/ecmascript-asyncawait/

*/


function chainAnimationsPromise(elem, animations) {
    let ret = null;
    let p = currentPromise;
    for(const anim of animations) {
        p = p.then(function(val) {
            ret = val;
            return anim(elem);
        })
    }
    return p.catch(function(e) {
        /* ignore and keep going */
    }).then(function() {
        return ret;
    });
}















