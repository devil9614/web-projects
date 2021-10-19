function knowAge(){
    const years = prompt("What is your year of birth??");
    const days = (2021-years)*365;
    var h2 = document.createElement('h2');
    var ans =  document.createTextNode("You are " + days + " days old!!!")
    h2.setAttribute("id","daysold");
    h2.appendChild(ans)
    document.getElementById("d").appendChild(h2)

}
function reset(){
    document.getElementById("daysold").remove();
}
function stonepaper(player){
    const choicces = ["Stone","Paper","Scissor"]
    var ans;
    const option = choicces[(Math.floor(Math.random()*choicces.length))]
    console.log(option)
    if (player == choicces[0]){
        if(option == choicces[2]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Won")
        }
        else if(option == choicces[0]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, Its a Draw")
        }
        else{
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Lose")
        }
    }
    else if (player == choicces[1]){
        if(option == choicces[0]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Won")
        }
        else if(option == choicces[1]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, Its a Draw")
        }
        else{
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Lose")
        }
    }
    else{
        if(option == choicces[1]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Won")
        }
        else if(option == choicces[2]){
            ans = document.createTextNode("The Compuer threw "+ option + " So, Its a Draw")
        }
        else{
            ans = document.createTextNode("The Compuer threw "+ option + " So, You Lose")
        }
    }
    var h2 = document.createElement('h2')
    h2.setAttribute("class","ress")
    h2.appendChild(ans)
    document.getElementById("results").appendChild(h2)
}
function stoneclear(){
    [...document.getElementsByClassName("ress")].map(n => n && n.remove());
}
function createcat(){
    const btn = document.createElement('button')
    btn.setAttribute("class","btn btn-success catbtn")
    var cat = document.createTextNode("cat")
    btn.appendChild(cat)
    document.getElementById("catres").appendChild(btn)
}
function trry(choice){
    
    if (choice.id == "1"){
        console.log(choice)
    }
    else{
        console.log("second")
    }

}