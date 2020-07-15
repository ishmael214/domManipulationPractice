(function () {
    let Quiz = function(question, answerChoices, correctAnswer) {
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
    }
    
    let q1 = new Quiz ('How many licks does it take to get to the tootsie roll center of a tootsie pop?',
                                                                          ['A: 7', 'B: Please Shut Up '],
                                                                                                    'B' );
    
                                                                                                
    let q2 = new Quiz ('True or False: You can\'t finesse a finesser',
                                              ['A: TRUE', 'B: FALSE'],
                                                                 'A');
    
    
    let q3 = new Quiz ('What are the odds of me pulling Ari Lennox',
                                    ['A: 100%', 'B: 50/50', 'C: 0'],
                                                               'B')
    
    const showQuestionsVariable = Quiz.prototype.showQuestions = function () {
        console.log('Question ' + (questionSelect+1) + '. ' + this.question);
    
         for (let i = 0; i < this.answerChoices.length; i++) {
             console.log(this.answerChoices[i]);
         }
         
    }
    
    var nextQuestion = Quiz.prototype.rightAnswer = function () {
        if (answer === this.correctAnswer) {
            console.log('Correct! Now for the next question')
        } else {
            console.log('How did you get that wrong... go take a lap')
        }
    } 

    /* var keepItGoing = Quiz.prototype.keepGoing = function () {
        if (2+2 === 4) {
            console.log('WORKING');
        } else {
            console.log('Not')
        }

    } 
    */
    
    const quizQuestions = [q1, q2, q3]
    
    const questionSelect = Math.floor(Math.random(quizQuestions) * quizQuestions.length);
    
    console.log(questionSelect);
    
    /* function something() {
        for (i = 0; i < quizQuestions.length; i++) {
            console.log(quizQuestions[i*questionSelect]);
        }
    
    }
    
    something(); */
    
    quizQuestions[questionSelect].showQuestions();
    
    let answer = prompt('Enter in the correct answer choice (CASE SENSITIVE)')
    
    quizQuestions[questionSelect].rightAnswer();

    let score = 0;
    
 /*   Quiz.prototype.mathFunction = () => {
        if (nextQuestion) {
        showQuestionsVariable();
        score += 1
        console.log('Score: ' + score);
        } else {
            console.log('NOT WORKING');
        }
    }
    
    mathFunction(); */
    
})();
