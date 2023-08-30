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
    li.style.color = "red"  
   // potenitally add filter here, that ranks based on "priority"
  } else if (document.querySelector('#priority').value === 'low-priority') {
    li.style.color = "green"  
  } else if (document.querySelector('#priority').value === 'standard-priority') {
    li.style.color = "black"
  }
  
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function fontColorSelector (e) {
  if (document.querySelector('#priority') === 'standard-priority') {
    
  } 
}

/*



function handleSort () {
  const list = document.querySelector("#list")
  const listItems = Array.from(list.getElementsByTagName('li'))
  const listItemObjects = listItems.map(function(item) {
    const color = getComputedStyle(item).color;
    return { element: item, color: color }})
  listItemObjects.sort(function(a, b) {
    return a.color.localeCompare(b.color);
  });
  list.innerHTML = '';
  listItemObjects.forEach(function(itemObject) {
    list.appendChild(itemObject.element);
  });
  } */