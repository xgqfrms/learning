/**
 * xgqfrms 2017.01.01
 * @copyright xgqfrms 2017-2050
 * @version 1.1.1
 * @link https://cdn.xgqfrms.xyz/plugins/getfullyear.js
 */

const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear');
    spanYear.style.background = "yellow";
    spanYear.style.color = "#000";
    spanYear.innerHTML = `Copyright &copy; ${copyYear} - 2050 xgqfrms`;
    return spanYear;
}
window.onload = copyRightYear();


/*
<span id="spanYear"></span>
https://cdn.xgqfrms.xyz/plugins/getfullyear.js
*/
