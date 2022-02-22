console.log('api');


function loaddata(){

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response())
.then(json=>console.log(json))


}

function loadusers(){

        // console.log('users')
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data =>console.log(data))
}

function loadposts(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data =>displayUsers(data))
}

// loadposts();
function displayUsers(data){
console.log(data);
}






