
let btn1 = document.querySelector('.btn1');


function inputValid() {
  let inp1 = document.getElementById('inp1')
  let inp2 = document.getElementById('inp2')
  let inp3 = document.getElementById('inp3')
  let inp4 = document.getElementById('inp4')

  if(inp1 === " " || inp2 === " " || inp3 === " " || inp4 === " ") {
    btn1.addEventListener('click', function() {
        alert('Please fill all value')
    })
  }
}


function sent() {
    btn1.addEventListener('click', function() {
        alert('Message sent succesfully')
        console.log('Message sent succesfully');
        
    })
}