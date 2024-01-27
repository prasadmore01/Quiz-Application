let div = document.getElementById("container")
let quizArray = []


let quiz = new XMLHttpRequest()

quiz.open("GET","quiz.json",true)

quiz.send()

quiz.onload = function(){
    if(quiz.status==200){
        let response = this.responseText;
        let quizArr = JSON.parse(response)
        let arrLen = quizArr.results
        
        
        for(let i=0;i<arrLen.length;i++){
            
            quizArray.push(arrLen[i])
        }
        
        display()
    }
}



function display(){

    console.log(quizArray)
    let choices = []
    // let options = []

    // for(let i=0;i<4;i++){

    
    //     options.push(quizArray[i].incorrect_answers)
    //     options.push(quizArray[i].correct_answer)
    // }

    // console.log(options)
    // choices.push(quizArray[j].inccorrect_answers[j])
    for(let j=0;j<4;i++){
        
    }


    for(let i=0;i<10;i++){

        let question = document.createElement("h3")
        question.textContent = quizArray[i].question;

        let radios = document.createElement("div")
        radios.innerHTML="<input type='radio' value='mcq'>"+quizArray[i].cor
        for(let j=0;j<4;j++){
            div.innerHTML="<input type='radio' value='mcq'>"+quizArray[i].question
        }

        div.appendChild(question)

    }

}

