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
    
    
    let q3 = new Quiz ('What are the odds of me pulling Ari Lennox?',
                                    ['A: 100%', 'B: 50/50', 'C: 0'],
                                                               'B')
    
    
    Quiz.prototype.showQuestions = function () {
        console.log('Question ' + (questionSelect+1) + '. ' + this.question);
         for (let i = 0; i < this.answerChoices.length; i++) {
             console.log(this.answerChoices[i]);
         }
         
    }
    
    Quiz.prototype.rightAnswer = function () {
        if (answer === this.correctAnswer) {
            console.log('Correct! Now for the next question')
        } else {
            console.log('How did you get that wrong... go take a lap')
        }
    } 
    
    const quizQuestions = [q1, q2, q3]
    

    function nextQuestion () {   
        const questionSelect = Math.floor(Math.random(quizQuestions) * quizQuestions.length);                                
        quizQuestions[questionSelect].showQuestions();                                                
        let answer = prompt('Enter in the correct answer choice (CASE SENSITIVE)')                                                
        quizQuestions[questionSelect].rightAnswer();
                                                            
        }
        
    nextQuestion();
    
    

})();
