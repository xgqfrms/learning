/*
http://t4t5.github.io/sweetalert/  
https://github.com/t4t5/sweetalert  
https://cdnjs.cloudflare.com/ajax/libs/sweetalert  

<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js" integrity="sha256-egVvxkq6UBCQyKzRBrDHu8miZ5FOaVrjSqQqauKglKc=" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" integrity="sha256-iXUYfkbVl5itd4bAkFH5mjMEN5ld9t3OHvXX3IU8UxU=" crossorigin="anonymous" />

*/


 // es6 
//swal("Good job!", "You clicked the button!", "success");
let ok = () => {
    swal("Good job!", "You clicked the button!", "success");
}
let btnok = document.getElementById('btnok');
/*btnok.addEventLisenter("click", () => {
    swal("Good job!", "You clicked the button!", "success");
}, false);*/
const bok = () => {
    swal("Good job!", "You clicked the button!", "success");
}
btnok.addEventListener("click", bok , false);
let error = () => {
    sweetAlert("Oops...", "Something went wrong!", "error");
}

