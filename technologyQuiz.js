let div = document.getElementById("container")
let quizArray = []
let count = 0
let submitQuiz = document.getElementById("submitQuiz")

let quiz = new XMLHttpRequest()

quiz.open("GET","quiz.json",true)

quiz.send()

quiz.onload = function(){
    if(quiz.status==200){
        let response = this.responseText;
        let quizArr = JSON.parse(response)
        console.log(quizArr)
        let arrLen = quizArr.results
        
        
        for(let i=0;i<arrLen.length;i++){
            
            quizArray.push(arrLen[i])
        }
        
        display()
    }
}

let choices = []

function display(){

    console.log(quizArray)
    
    
    //-----------------------------------------------------------------------Created MCQ Options array 

    for(let i=0;i<10;i++){
        for(let j=0;j<1;j++){
            mcqArr = quizArray[i].incorrect_answers

            let choice = quizArray[i].incorrect_answers[j]
            choices.push(mcqArr)
        }
    }
   
    for(let i=0;i<10;i++){
        choices[i].push(quizArray[i].correct_answer)
    }

    console.log(choices)


    //--------------------------------------------------------- Displayed Questions and Options on screen

    for(let i=0;i<10;i++){

        let question = document.createElement("h3")
        question.textContent = (i+1)+"] "+quizArray[i].question;
        let mcqBox = document.createElement("div")
        mcqBox.classList.add("mcqBox")
        for(let j=0;j<4;j++){
            let radios = document.createElement("div")
            radios.innerHTML="<input type='radio' name='mcq'>"+choices[i][j]
            question.appendChild(mcqBox)
            mcqBox.appendChild(radios)
        }
        
        div.appendChild(question)

    }

    //--------------------------------------------------------- Implemented the Logic of On checked of option it should give us the answer is right or wrong

    
    let mcqOptions = document.querySelectorAll('input[type=radio]')
    
    for(let i=0;i<(4*10);i++){
        mcqOptions[i].addEventListener("click",funCheck,false)
    }
    
    function funCheck(event){


        for(let i=0;i<(4*10);i++){
            
            for(j=0;j<10;j++){
                if(mcqOptions[i].checked){
                    let selectedValue = mcqOptions[i].parentNode.firstChild.nextSibling.nodeValue;
                   
                    if(selectedValue == quizArray[j].correct_answer){
                        console.log("Answer is Correct")
                        count++;
                    
                    }
                }   
            }
        }

    }
 

}


 //--------------------------------------------------------- After Submit Quiz

 submitQuiz.addEventListener("click",funSubmit,false)

 function funSubmit(){
    window.alert(count + " Answers are Correct out of 10 & you got "+count*10+"% out of 100")
    // let correctAnswer = quizArray.

 }

console.log(quizArray[0].correct_answer)