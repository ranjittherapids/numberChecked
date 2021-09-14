var number;
const chechkedNumber=(e)=>{
    number=(e.value)
    for(let i=2;i<number/2;i++)
    if(number%i==0){  
       document.getElementById('h1').innerHTML=`that no ${number} is not a prime no`
       break;
    }
    else{
        document.getElementById('h1').innerHTML=`that no ${number}a prime no`
    }
}

        
    



