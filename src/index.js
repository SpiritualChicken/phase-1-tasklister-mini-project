document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
  e.preventDefault()
  createToDo(e.target.querySelector("#new-task-description").value);
  form.reset();
  })
});


function createToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.querySelector('#tasks').append(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}