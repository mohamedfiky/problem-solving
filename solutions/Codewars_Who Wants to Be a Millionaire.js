/*
    Link: https://www.codewars.com/kata/6384c9ec84c67000230a15f1

    Description:

      Introduction

        Everybody wants to become a millionaire, don't you? In this kata, we'll evaluate a game of "Who Wants to Be A Millionaire?"

          Note that we use a custom game format in this kata!

      Task

        Calculate the total cash prize a player earned while playing a game of "Who Wants to Be A Millionaire?", given the prize fund for each question, the correct answers, and the actions the player made during the game.
      
        Input

          prize fund: an array containing 15 integers, each being the prize fund for the corresponding question. For instance: [100, 200, 300, 400, 800, ...]
          correct answers: an array containing 15 letters, each being the correct answer for the corresponding question. The letters represent each of the four possible answers:"A", "B", "C", "D"
          player actions: an array containing at most 15 strings (less if game ended earlier), each being one or more actions the player made for the corresponding question. Actions the player can take:
              Answer a question: "A", "B", "C", "D"
              Walk away before the host asks the next question: "W"
              Stop after the hosts asks a question, without answering: "X"
              In addition, the player can use zero, one or more life lines, these are prepended to the player action: "1A", "23X", "3B", ... Possible life lines:
              "1" 50/50
              "2" Phone a Friend
              "3" Ask the Audience

        Output

          Return an array/tuple of 2 integers, the first integer being the total cash prize the player earned playing the game, and the second integer being the total amount of life lines used: example [20000, 1] player earned 20000 total cash prize and used 1 lifeline.
        Input Constraints

            Players addicted to risk - 100 random tests
            Players taking calculated risk - 100 random tests
            Players taking low risk - 100 random tests
            Random players - 300 random tests
            There will be no invalid inputs; all players make valid decisions

        Game Setup
          Perfect Scenario

            The game is played by a single player, who's task is to answer questions asked by the host. There is a total of 15 questions to answer, each having a prize fund attached. For each question answered correctly, the player accumulates the prize fund to his total cash prize so far. If all questions are answered correctly, the player wins the maximum amount of cash prize.
            Options the player has before proceeding with the next question

          Before each question (even the first), the host asks the player if they want to proceed with the question. The player has two options:

            The player can choose to walk away (player action: "W"), in which case the player leaves the game with the total amount of cash prize collected so far.
            The player can choose to proceed, in which case the host continues with asking the question.

          Options the player has after the host asks a question

            After each question, the player is given the choice to either answer the question or stop. However, since the question has already been asked, there is no longer an option to walk away with the total cash prize collected so far. Four possible answers are presented to the player. Here are the options:
            1. The player can choose to stop (player action: "X"), in which case the player leaves the game with the amount of cash collected at the last safe haven (explained below).
            2. The player can choose to answer the question, in which case the player has to pick one of the four possible answers (player action: "A", "B", "C", "D" (pick one)), after which the host says whether the answer is correct or not.
            Additional options the player has after the host asks a question

          Before making a final decision after the host asked a question (stop vs answer), the player can choose to use any or all of his remaining life lines (prepended to current player action: "1", "2", "3" (pick 0, 1 or more)).
            Life Lines available to the player

          The player has 3 life lines available for the entire game of 15 questions. The player can use any number of these life lines or none at all. Each life line can only be used once, and there is no additional restriction on the number of life lines used per question. The life lines are:

            50/50: The host takes away two of the possible answers, which are definitely incorrect.
            Phone a Friend: The player is allowed to phone a friend and discuss the possible answers with that friend.
            Ask the Audience: The audience can vote on which possible answer they think is correct. The player can take into account the voting results.

          The player gives an incorrect answer

          If the player decided to answer the question, and gives a wrong answer, the player is eliminated, and leaves the game without any prize cash!
          What is a safe haven?

          After each n'th question, n being divisible by 5 (5th, 10th, 15th question), the total cash prize collected so far is marked as the safe haven. As explained earlier, when a player stops after the host asked a question, they can collect the amount of cash prize marked at the most recent safe haven.

          Good luck, have fun


*/
 


function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {

    let prize = 0;
    let life_1 = 0;
    let life_2 = 0;
    let life_3 = 0;
    let life_lines = 0;
    let safe1 = 0;
    let safe2= prizeFund[0] + prizeFund[1] + prizeFund[2] + prizeFund[3] + prizeFund[4];
    let safe3= safe2 + prizeFund[5] + prizeFund[6] + prizeFund[7] + prizeFund[8] + prizeFund[9];

    for(let i = 0; i < playerActions.length; i++){

            if(playerActions[i].split("").includes("1")){
                life_1 += 1;
                life_lines += 1 ;
            }
            if(playerActions[i].split("").includes("2")){
                life_2 += 1;
                life_lines += 1 ;
            }
            if(playerActions[i].split("").includes("3")){
                life_3 += 1;
                life_lines += 1 ;
            }

            if(life_1 > 1 || life_2 > 1 || life_3 > 1 || life_lines > 3){
                return "You can't use more than 3 different life lines";
            }

            //////////////////

            if(playerActions[i][playerActions[i].length - 1] == correctAnswers[i]){
                // console.log(playerActions[i],playerActions[i][playerActions[i].length - 1])
                prize += prizeFund[i];
            }

            if(playerActions[i][playerActions[i].length - 1] != correctAnswers[i] && 
               playerActions[i][playerActions[i].length - 1] != "W" && 
               playerActions[i][playerActions[i].length - 1] != "X")
            {
                prize = 0;
                return [prize, life_lines];
            }

            ///////////////////////////

            if(playerActions[i] == "W"){
                return [prize, life_lines];
            }
            if(playerActions[i][playerActions[i].length - 1] == "X"){
                if(i < 5){
                    prize = safe1 ;
                }

                if(i >= 5 && i < 10){
                    prize = safe2 ;
                }

                if(i >= 10 && i < 15){
                    prize = safe3 ;
                }

                
                return [prize, life_lines];
            }     
    }

  return [prize, life_lines];
}


///////////////////////////////

let money1 = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
let correct1 = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "B"];
let actions1 = ["A", "B", "1B", "23D", "B", "C", "A", "A", "B", "W"];

let money2 = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
let correct2 = ["A","B","B","D","B","C","A","A","B","D","D","D","B","C","B"];
let actions2 = ["A","B","B","D","B","C","A","A","B","D","D","D","B","X"];

let money3 = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
let correct3 = ["A","B","B","D","B","C","A","A","B","D","D","D","B","C","B"];
let actions3 = ["A","B","B","12D","B","C","3B"];


console.log(getTotalCashPrize(money1,correct1,actions1));
console.log(getTotalCashPrize(money2,correct2,actions2));
console.log(getTotalCashPrize(money3,correct3,actions3));

  