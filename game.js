let user = prompt("Enter S ,W,G ")
// n = Number.parseInt(n)
let cum = Math.floor(Math.random()*3);
 let computer = ["S","W","G"][cum]


 const match =(computer,user)=>{
    if(computer===user){
        return "no boddy win match is tie";
    }
    else if (computer==="S" && user==="W"){
        return "computer" ;
    }
    else if (computer==="W" && user==="G"){
        return "computer";
    }
    else if (computer==="S" && user==="G"){
        return "user" ;
    }
    else if (computer==="W" && user==="S"){
        return "user" ;
    }
    else if (computer==="G" && user==="W"){
        return "user";
    }
    else if (computer==="G" && user==="S"){
        return "computer" ;
    }
 }

 let result=  match(computer,user)

document.write(` computer= ${computer} <br> and user = ${user} <br>`)

document.write(`WINNER IS = ${result}`)







// if(S && W){
// alert("snake")
// }
// else if(S && G){
//     alert("snake")
// }
// else if(G && W){
//     alert("Water")
// }