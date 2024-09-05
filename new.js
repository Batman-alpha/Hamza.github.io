/*  
 //functions challenge : 
  let  getData = (...data) => {
    for(let i = 0 ; i < data.length ; i++){
        console.log(data[i]);
     }
    }
 getData('hamza' , 'omar' , 'ahmed' , 'brocode' , 'elzero');
 console.log(` -------------------------------- `)
 // another example : 
 let getInfo = (...info) => {
    for(let j = 0 ; j < info.length ; j++){
        console.log(info[j]);
    }
 }  */
 //getInfo('amo' , 'ali' , "mohammed");
 // Example with html and css and bootstrap : 
 document.getElementById('sbmtBtn').onclick = function () {
    function countAge(){
        let a = document.getElementById('numberInput').value;
        let x = 2024 - a ; 
        document.getElementById('resultText').textContent = x ;
    }
    countAge();
 }