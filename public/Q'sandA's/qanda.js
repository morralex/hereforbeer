// Questions and answers array
$(document).ready(function () {
    const questions = [

        {
            prompt: "What is the use of isNaN function?",
            option1: 'A - isNan function returns true if the argument is not a number otherwise it is false.',
            option2: 'B - isNan function returns false if the argument is not a number otherwise it is true.',
            option3: 'C - isNan function returns true if the argument is not a name otherwise it is false.',
            option4: 'D - isNan function returns flase if the argument is not a number otherwise it is true.',
            answer: "A"
        },
        {
            prompt: "Which company developed JavaScript?",
            option1: 'A - Microsoft',
            option2: 'B - Netscape',
            option3: 'C - Apple',
            option4: 'D - Redgate Software',
            answer: "B"
        },
        {
            prompt: "Which symbol is used for comments in Javascript?",
            option1: 'A - ||',
            option2: 'B - --',
            option3: 'C - < >',
            option4: 'D - //',
            answer: "D"
        },
        {
            prompt: "What is an example of a looping structure in JavaScript?",
            option1: 'A - .then',
            option2: 'B - for',
            option3: 'C - const',
            option4: 'D - function',
            answer: "B"
        },
        {
            prompt: "var x = 5;\nvar y = 2;\nvar z = x + y;\nWhat is the value of var z?",
            option1: 'A - 7',
            option2: 'B - 52',
            option3: 'C - 10',
            option4: 'D - 25',
            answer: "A"
        },
        {
            prompt: "var legth = 16\nvar lastName = Johnson\n var x = {firstName:John, lastName:Doe};\nWhat is var x?",
            option1: 'A - String',
            option2: 'B - Object',
            option3: 'C - Operator',
            option4: 'D - Function',
            answer: "B"
        },
        {
            prompt: "var x = myFunction(4, 3);\nfunction myFunction(a, b) {\nreturn a * b;\n} What will the result of this function be?",
            option1: 'A - 7',
            option2: 'B - 1',
            option3: 'C - 12',
            option4: 'D - ab',
            answer: "C"
        },
        {
            prompt: "Given x = 5\n what will x == '5' return?",
            option1: 'A - false',
            option2: 'B - not equal',
            option3: 'C - equal',
            option4: 'D - true',
            answer: "D"
        },
        {
            prompt: "Fill in the blanks; \nif _x > y_ _ \n alert ('Hello World!') \n_",
            option1: 'A - [,],{,}',
            option2: 'B - {,},(,)',
            option3: 'C - (,),{,}',
            option4: 'D - (,),[,]',
            answer: "C"
        },
        {
            prompt: "What is the only way to communicate with the server?",
            option1: 'A - HTTP request',
            option2: 'B - The answer is A',
            option3: 'C - The answer is A',
            option4: 'D - The answer is A',
            answer: "A"
        }
    ]
    //set a five second timer
    // setTimeout(fiveSeconds, 1000 * 5);

    // function timesUp () {

    // }

    // Score Keeping Variable

      
    //loop through the questions array and if the user answer matches the correct answer then add 1 to score
    //if its wrong alert wrong
    // for (var i = 0; i < questions.length; i++) {
    var questionsContainer = document.getElementById("question-container")
    var option1Container = document.getElementById("A");
    var option2Container = document.getElementById("B");
    var option3Container = document.getElementById("C");
    var option4Container = document.getElementById("D");

    questionsContainer.textContent = questions[0].prompt;

    option1Container.textContent = questions[0].option1;
    option2Container.textContent = questions[0].option2;
    option3Container.textContent = questions[0].option3;
    option4Container.textContent = questions[0].option4;

    $(".options").on("click", function () {

    });

    $("#answers").on('click', 'button', function (e) {
        var idClicked = e.target.id
        console.log(idClicked)
        if (idClicked === questions[0].answer) {
            alert("correct")
        } else {
            alert("wrong")
        }
    });
});
