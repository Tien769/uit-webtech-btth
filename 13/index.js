document.getElementById('Container').addEventListener('submit', e => {
  e.preventDefault();

  const formValue = {
    name: document.getElementById('Name').value,
  };
  console.log(formValue);
});
