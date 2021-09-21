var input = document.getElementById('JsInput');
var btn = document.getElementById('JsBtn');
var result = document.getElementById('JsCard');
var todos = [];
 btn.addEventListener('click', function(e){
     todos.push(input.value);
     result.textContent = todos;
 })