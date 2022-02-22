console.log('api');


function loaddata(){

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response())
.then(json=>console.log(json))


}