const QuestionCompleted = ({ correctAnswers }) => {
  let message = "";
  switch (true) {
    case correctAnswers >= 0 && correctAnswers <= 4:
      message = `If you got 0-4 correct answers: Oops, you're an E-Reader Explorer in training! But don't worry, you still get the 'E-Reader Adventurer' award. Keep learning, and you'll become a pro in no time!`;
      break;
    case correctAnswers >= 5 && correctAnswers <= 7:
      message = `If you got 5-7 correct answers: Not bad, you're an E-Reader Enthusiast! You've earned the "Page-Turner" award. Keep exploring the world of e-reading!`;
      break;
    case correctAnswers >= 8 && correctAnswers <= 10:
      message = `If you got 8-10 correct answers: Congratulations, you're an E-Reader Extraordinaire! You've unlocked the "Master of the E-Verse" award. Time to celebrate with a good e-book!`;
      break;
    default:
      break;
  }

  return (
    <>
      <div>
        <p>{message}</p>
        <button type="button">PLAY AGAIN</button>
      </div>
    </>
  );
};

export default QuestionCompleted;
