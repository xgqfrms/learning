/**
 * xgqfrms
 * @copyright xgqfrms 2017-2050
 * @version 1.1.1
 * @link https://gist.github.com/xgqfrms-GitHub/9b71f82c921365fb5a469c280d424fa9
 */

let windowObjectReference;
let strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes
`;

function openRequestedPopup() {
    windowObjectReference = 
    window.open(
        "https://cdn.xgqfrms.xyz/", 
        "xgqfrms's CDN website", 
        strWindowFeatures
    );
}
