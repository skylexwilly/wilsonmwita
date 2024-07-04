
/**
*Grading system
*from 79 to 100=A
*from  60 to 79=B
*from 49 to 59=C
*from 40 to 49=D
*from 0 to 40=E
*/

const awardgrade = (score) => {
  /*verification check for valid marks */
  if (score > 100 || score < -1)
    return "Invalid score!";
}

function awardgrade(score) {
  if (score >=79 && score <= 100) {
  return "A";
}
else if (score >=60 && score <= 79){
  return "B";}
  else if (score >=50 
    && score <= 59){
    return "C"
  }
  else if (score >= 40 && score <= 49){
    return "D;"
  }
  else if(score >= 0 && score <=49){
    return "E;"
  }
}

/*Perpetually ask the person to enter validated score*/
const askForScore = () => {
  userInput.question("Enter student Grade score: ", (input) => {
    const score = Number(input);

    if (isNaN(score) || score > 100 || score < 0) {
      console.log("Please enter a valid score.");
      askForScore();
    } else {
      const grade = awardGrade(score);
      console.log(`The grade is: ${grade}`);
      userInput.close();
    }
  });
};

askForScore();

