/**
 * 
 * xgqfrms
 * 
 * 
 */

let form_Post_Data = document.querySelector('#formPostData');
form_Post_Data.addEventListener('submit', postData);

function postData(e) {
    let post_result = document.querySelector('data-postData="data-postData"'),
        todoTitle = document.getElementById('#todoTitle').value;
    post_result.innerHTML = '';
    axios.post('http://jsonplaceholder.typicode.com/todos', {
            userID: '1',
            title: todoTitle,
            completed: false
        })
        .then(fuction(reponse) {
            post_result.innerHTML = getSuccessDataHTML(response);
        })
        .then(fuction(error) {
            post_result.innerHTML = getErrorDataHTML(error);
        })
    e.preventDefualt();
}

/*
// todo methods

getDataRequest()

clearData()

getDataRequestID()

postData()

getSuccessDataHTML(response)

getErrorDataHTML(error)

*/