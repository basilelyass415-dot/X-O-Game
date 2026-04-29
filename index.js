let sqers = document.querySelectorAll('.container div ');
let player = "X" ;

sqers.forEach((sqers) => {
  sqers.onclick = function next_Turn() {
    if (sqers.innerText === '' && player ===  "X" && win() == false) {
      sqers.innerText = "X";
      sqers.style.color = 'blue';
      document.body.style.background = 'orange';
      player = "O";
    }
    else if (sqers.innerText === '' && player === "O" && win() == false ){
      sqers.innerText = "O";
      sqers.style.color = 'orange';
      document.body.style.background = ' #2bded0';
      player = "X";
    }
    win();
  }
});
let btn = document.getElementById('btn');
let b1 = document.getElementById('1');
let b2 = document.getElementById('2');
let b3 = document.getElementById('3');
let b4 = document.getElementById('4');
let b5 = document.getElementById('5');
let b6 = document.getElementById('6');
let b7 = document.getElementById('7');
let b8 = document.getElementById('8');
let b9 = document.getElementById('9');


function win() {
  if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b1.innerText !== '') {
    b1.style.background = 'green';  
    b2.style.background = 'green' ; 
    b3.style.background = 'green'  ;
    document.body.style.background='green';
    return true 
  }

  if (b4.innerText == b5.innerText && b5.innerText == b6.innerText && b4.innerText !== '') {
    b4.style.background = 'green';  
    b5.style.background = 'green';  
    b6.style.background = 'green';
    document.body.style.background='green';
    return true 
  }


  if (b7.innerText == b8.innerText && b8.innerText == b9.innerText && b7.innerText !== '') {
    b7.style.background = 'green'  
    b8.style.background = 'green'  
    b9.style.background = 'green'
    document.body.style.background='green';
    return true 
  }
  
  if (b1.innerText == b4.innerText && b4.innerText == b7.innerText && b7.innerText !== '') {
    b1.style.background = 'green'  
    b4.style.background = 'green'  
    b7.style.background = 'green'
    document.body.style.background='green';
    return true 
  }
  
  if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b8.innerText !== '') {
    b2.style.background = 'green'  
    b5.style.background = 'green'  
    b8.style.background = 'green'
    document.body.style.background='green';
    return true 
  }
  
  if (b3.innerText == b6.innerText && b6.innerText == b9.innerText && b9.innerText !== '') {
    b3.style.background = 'green'  
    b6.style.background = 'green'  
    b9.style.background = 'green'
    document.body.style.background='green';
    return true 
  }
  
  if (b1.innerText == b5.innerText && b5.innerText == b9.innerText && b9.innerText !== '') {
    b1.style.background = 'green'  
    b5.style.background = 'green'  
    b9.style.background = 'green' 
    document.body.style.background='green';
    return true 
  }
  
  if (b3.innerText == b5.innerText && b5.innerText == b7.innerText && b7.innerText !== '') {
    b3.style.background = 'green';  
    b5.style.background = 'green';  
    b7.style.background = 'green'; 
    document.body.style.background='green';
    return true 
  }else{
    return false
  }
  
}
btn.onclick = function () {
  let cells = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
  cells.forEach((cell) => {
    cell.innerText = '';
    cell.style.background = '#ffffff';
    player = "X";
    document.body.style.background = ' #2bded0';
  });

}
