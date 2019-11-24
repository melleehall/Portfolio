'use strict'

function quizImageSwap (){
    $('.quiz-app').mouseenter(function(){
        $('.quiz-app').attr('src', 'QuizAppQuestionView.jpg');
    });
    $('.quiz-app').mouseleave(function(){
        $('.quiz-app').attr('src', 'QuizAppStartView.jpg');
    });
}

$(quizImageSwap)