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
.then(data =>displayUsers(data))
}

function displayUsers(data){
        const ul=document.getElementById('users')
        for(const user of data){
        // console.log(user.name); 
const li =document.createElement('li');
// li.innerText=user.name

li.innerHTML=`name: ${user.name} email:${user.email}`
ul.appendChild(li);
        }
}




function loadposts(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data =>console.log(data))
}

// loadposts();







