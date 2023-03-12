document.addEventListener('DOMContentLoaded',()=> {
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  });
})

function handleToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
  console.log(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}