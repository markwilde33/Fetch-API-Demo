// get elements by their id
let getText = document.getElementById('getText')
let outputText =  document.getElementById('outputText');
let getUsers = document.getElementById('getUsers')
let outputUsers =  document.getElementById('outputUsers');
let getPosts = document.getElementById('getPosts')
let outputPosts =  document.getElementById('outputPosts');
let addPost = document.getElementById('addPost')



//fetch sample txt, format result with .text() method, receive the data and output it to the browser, catch any errors
getText.addEventListener('click', () => {
  fetch('sample.txt')
  .then(res =>  res.text())
  .then(data => {
   outputText.innerHTML = data;
  })
  .catch(err => console.log(err))
});

//fetch json file, format result with .json() method, receive the data and cycle through each item and put it in a list, output it to the browser, catch any errors
getUsers.addEventListener('click', () => {
  fetch('users.json')
  .then(res =>  res.json())
  .then(data => {
   users = `<h2 class="mb-4">Users</h2>`;
   data.forEach(user => {
    users += `<ul class="list-group mb-3">
     <li class="list-group-item "><strong>ID:</strong> ${user.id}</li>
     <li class="list-group-item"><strong>Name:</strong> ${user.name}</li>
     <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
     </ul>`;
   });
   document.getElementById('outputUsers').innerHTML = users;
  })
  .catch(err => console.log(err))
});

//fetch api, format result with .json() method, receive the data and cycle through each item and put it in a div, output it to the browser, catch any errors
getPosts.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res =>  res.json())
  .then(data => {
   posts = `<h2 class="mb-4">Posts</h2>`;
   data.forEach(post => {
    posts += `
    <div class="card card-body mb-3">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
     `;
   });
   document.getElementById('outputPosts').innerHTML = posts;
  })
  .catch(err => console.log(err))
});


// function to make a post request to the API
addPost.addEventListener('submit', e => {
// get the elements that we want to inject some data into
let title = document.getElementById('title').value;
let body = document.getElementById('body').value;
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({title:title, body:body})
  })
  .then(res =>  res.json())
  .then(data => console.log(data))
   })