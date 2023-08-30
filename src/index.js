document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
  e.preventDefault()
  createToDo(e.target.querySelector("#new-task-description").value);
  form.reset();
  })
  document.addEventListener('click', (e) => {
    console.log(e)
  })

});


function createToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  let deleteAll = document.querySelector("#delete-all")
  deleteAll.addEventListener('click', (e) => {
    document.querySelector('li').remove()
  })
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.querySelector('#tasks').append(li)
  if (document.querySelector('#priority').value === 'high-priority') {
    li.style.color = "red";
    li.className = "high-priority";
   // potenitally add filter here, that ranks based on "priority"
  } else if (document.querySelector('#priority').value === 'low-priority') {
    li.style.color = "green"; 
    li.className = "low-priority"; 
  } else if (document.querySelector('#priority').value === 'standard-priority') {
    li.style.color = "black";
    li.className = "standard-priority";
  }
  reorderTasks();
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function fontColorSelector (e) {
  if (document.querySelector('#priority') === 'standard-priority') {
    
  } 
}

function reorderTasks() {
  const tasksList = document.querySelector('#tasks');
  const taskItems = Array.from(tasksList.children);

  taskItems.sort((a, b) => {
    const priorityValues = {
      'high-priority': 3,
      'standard-priority': 2,
      'low-priority': 1,
    };

    const priorityA = priorityValues[a.className];
    const priorityB = priorityValues[b.className];

    return priorityB - priorityA;
  });

  taskItems.forEach(item => tasksList.appendChild(item));
}









