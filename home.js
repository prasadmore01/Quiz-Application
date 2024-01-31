let startQuiz = document.getElementById("start-quiz")

startQuiz.addEventListener("click",start,false)


function start(){

    let quizSelect = document.getElementById("quiz-select").value
    if(quizSelect == "Technology"){
        location.assign("technologyQuiz.html")
    } 

}


