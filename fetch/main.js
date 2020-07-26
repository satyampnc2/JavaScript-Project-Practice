var container = document.getElementsByClassName('container')[0];
var btn = document.getElementsByClassName('submit')[0];

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        var content = '<h2>Posts</h2>'
        data.forEach( post => {
            content+= `<ul class="box">
                <li>id: ${post.id} </li>
                <li>title: ${post.title} </li>
                <li>body: ${post.body} </li>
            </ul>`
        });
        container.innerHTML = content;
    });    
})

var submitbtn = document.getElementById('submit');
var title = document.getElementById('title');
var body = document.getElementById('body');
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    var data = {
        title : title.value,
        body : body.value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(resdata => console.log(resdata))
})
