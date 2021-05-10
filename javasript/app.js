let userScore=0;
let comScore=0;
const userScore_span = document.getElementById('user-score');  //HARUS PAKAI ID
const comScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result >p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');


function toword(word){
    if (word==='r') return "Rock";
    if (word==='p') return "Paper";
    return "Scissor";

}

function game(user){
    //    console.log('you choose ' + user)
        const computer = getcomputer()
        switch (user+computer){
            case "rs":
            case "sp":
            case "pr":
                win(user,computer);
                break;
            case "rp":
            case "ps":
            case "sr":
                lost(user, computer);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(user, computer);
                break;
        }
        
    }


function getcomputer(){
    const choice = ['r','p','s'];
    const  randnum = Math.floor(Math.random()*3);
    return choice[randnum];
}

// console.log(getcomputer()) TEST



function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })

}





function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;

    const usesub = "User".fontsize(2).sub();
    const comsub = "Computer".fontsize(2).sub();
    result_div.innerHTML = `${toword(user)}${usesub} beats ${toword(computer)}${comsub}. You Win!!!`
    const color = document.getElementById(user).classList
    color.add('win');
    setTimeout(function(){
        color.remove('win');
    }, 300)
    
};

function lost(user,computer){
    comScore++;
    comScore_span.innerHTML = comScore;
    const usesub = "User".fontsize(2).sub();
    const comsub = "Computer".fontsize(2).sub();
    result_div.innerHTML = `${toword(user)}${usesub} loses to ${toword(computer)}${comsub}. You Lost!!!`
    const color = document.getElementById(user).classList
    color.add('lose');
    setTimeout(function(){
        color.remove('lose');
    }, 300)

    
};

function draw(user,computer){
    const usesub = "User".fontsize(2).sub();
    const comsub = "Computer".fontsize(2).sub();
    result_div.innerHTML = `${toword(user)}${usesub} equal to ${toword(computer)}${comsub}. It's a Draw!!!`
    const color = document.getElementById(user).classList
    color.add('draw');
    setTimeout(function(){
        color.remove('draw');
    }, 300)

    
};







main()