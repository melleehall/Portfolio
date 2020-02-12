'use strict'

function quizImageSwap (){
    $('.quiz-app').mouseenter(function(){
        $('.quiz-app').attr('src', 'QuizAppQuestionView.jpg');
    });
    $('.quiz-app').mouseleave(function(){
        $('.quiz-app').attr('src', 'QuizAppStartView.jpg');
    });
}

function economyPumpImageSwap (){
    $('.economy-pump-img').mouseenter(function(){
        $('.economy-pump-img').attr('src', 'EconomyPumpShopView.jpg');
    });
    $('.economy-pump-img').mouseleave(function(){
        $('.economy-pump-img').attr('src', 'EconomyPumpHHIncomeView.jpg');
    });
}

function imageSwaps () {
    quizImageSwap();
    economyPumpImageSwap();
}

$(imageSwaps)