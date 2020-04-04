let getText = document.getElementById('getText')

let output =  document.getElementById('output');

// function get() {
//   fetch('sample.txt')
//   .then(res =>  res.text())
//   .then(data => {
//    output.innerHTML = data;
//   })
// }

getText.addEventListener('click', () => {
  fetch('sample.txt')
  .then(res =>  res.text())
  .then(data => {
   output.innerHTML = data;
  })
  .catch(err => console.log(err))
});