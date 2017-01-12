/*
let copyyear = new Date().getFullYear();

const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    return copyYear;
}
copyRightYear();

Copyright © xgqfrms 2017

*/


const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear')
    return spanYear.innerHTML = `Copyright &copy; ${copyYear} xgqfrms`;
}

window.onload = copyRightYear();


// IIFE


/*
<p><span ><mark id="spanYear"></mark></span></p>

https://cdn.xgqfrms.xyz/plugins/getfullyear.js

<script src="https://cdn.xgqfrms.xyz/plugins/getfullyear.js
" aysnc></script>

*/