
// function game(){
function countDown(secs){
    var myInterval = setInterval(function(){
        $("#timer").text(secs);
        if(secs===0){
            clearInterval(myInterval);
            $("#timerResult").text("Timer: Time Up!!");
            $("#result").toggle();
            $("#quiz").hide();
            $("#result").show();
            var testResults = $("#testResults");
            testResults.html("<h2> You got "+correct+" of "+questions.length+" questions correct </h2>");
            testResults.append("<h2>Test Completed</h2>");
            questionNum = 0;
            correct = 0;
            return false;

        } else {
            secs --;
        }
    }, 1000);
    

};
countDown(20);


var questionNum = 0;
var test = 0;
var test_status = 0;
var eachQuestion = 0;
var userChoice = 0;
var choices = 0;
var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
var correct = 0;
var questions = [
    ["Inside which HTML element do we put the JavaScript?", "scripting", "script", "javascript", "B"],
    ["The external JavaScript file must contain the 'script' tag", "False", "True", "Maybe", "B"],
    ["How do you write 'Hello World' in an alert box?", "msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "C"],
    ["How do you create a function in JavaScript?", "function = myFunction()", "function myFunction()", "function:myFunction()", "B"],
    ["How to write an IF statement for executing some code if 'i' is NOT equal to 5?", "if (i <> 5)", "if i =! 5 then", "if (i != 5)", "C"]

];


function renderQuestion(){
    var test1 = $("#test");
    var testResults = $("#testResults");
    // test1.text("hello");
    if(questionNum >= questions.length){
    
        $("#timerResult").text("Time Up!!");
        $("#result").toggle();
        $("#quiz").hide();
        $("#result").show();
        testResults.html("<h2> You got "+correct+" of "+questions.length+" questions correct </h2>");
        testResults.append("Test Done");
        questionNum = 0;
        correct = 0;
        return false;
    };
    // $("#restart").on("click", function(){
    // alert("hi");
    // });
    $("#test_status").text("Question "+ (questionNum+1) + " of "+ questions.length);
    eachQuestion = questions[questionNum][0];
    choice1 = questions[questionNum][1];
    choice2 = questions[questionNum][2];
    choice3 = questions[questionNum][3];
    test1.html("<h3>" + eachQuestion + "</h3>");
    test1.append("<input type='radio' name='choices' value='A' class='chButton'> "+choice1+" <br>");
    test1.append("<input type='radio' name='choices' value='B' class='chButton'> "+choice2+" <br>");
    test1.append("<input type='radio' name='choices' value='C' class='chButton'> "+choice3+" <br>");
    // test1.append("<button onclick='checkAnswer()'> Submit </button>");

  $("#sub").on("click", function(evt){
      evt.preventDefault();
      checkAnswer();
  });



    // alert(" hello");

};
// $("#sub").on("click", function(evt){
//     evt.preventDefault();
//     alert("jello");
//     checkAnswer();
// });
  
  
function checkAnswer(){
    // alert ('from check answer');
    choices = $("[name='choices']");
    // console.log(choices.length);

    for (var i=0; i<choices.length; i++){
    // console.log(choices[i]);
        if(choices[i].checked){
            console.log(i);
            console.log(choices[i].value);
            //  console.log(choices[i]);
            userChoice = choices[i].value;
            // console.log("from array" + choices[i].value);
        // console.log(" ***************************************** ");
            // console.log("i clicked "+ userChoice);
        };
    }
    if (userChoice == questions[questionNum][4]){
        // alert("yues");
        // alert(questions[questionNum][4]);
        correct++;
        console.log("Correct " + correct);
    } 
    questionNum++;
    // console.log(" QuesNum " + questionNum);
    renderQuestion();
};
  
  // function checkAnswer(){
  // 	choices = document.getElementsByName("choices");
  //   console.log(choices);
  // 	for(var i=0; i<choices.length; i++){
  //     // console.log(choices[i]);
  // 		if(choices[i].checked){
  // 			userChoice = choices[i].value;
  //       console.log(choices[i]);
  //       console.log(choices[i].value);
  // 		}
  // 	}
  // 	if(userChoice == questions[questionNum][4]){
  // 		correct++;
  // 	}
  // 	questionNum++;
  // 	renderQuestion();
  // };
  
window.addEventListener("load", renderQuestion, false);
  
  
  // $(window ).load(function() {
  //     renderQuestion();
  // });
  
  
  
// };
// game();

  