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
        console.log(quizArr)
        for(let i=0;i<arrLen;i++){
            
            quizArray.push(quizArr.results[i])
        }
        
        display()
    }
}



function display(){
    for(let i=0;i<10;i++){

        let question = document.createElement("h3")
        question.innerHTML= quizArray[i].question;



    }

}

