const course = getCourse(location.search.split("=")[1]);   
const userName = (prompt("Type your name for the leaderboard:") || "Guest").replaceAll("<", "");
let timeLeft = course.questions.length * 20;               

let html = "";
for (let i = 0; i < course.questions.length; i++) {
  const q = course.questions[i];
  html += "<div class='box'><h3>" + (i + 1) + ". " + q.question + "</h3>";
  for (let j = 0; j < q.options.length; j++) {
    html += "<label class='option'><input type='radio' name='question" + i + "' id='q" + i + "o" + j + "'> " + q.options[j] + "</label>";
  }
  html += "<p id='feedback" + i + "'></p></div>";
}
document.getElementById("quizTitle").innerHTML = course.title + " Quiz";
document.getElementById("quizBox").innerHTML = html;

document.getElementById("timer").innerHTML = "Time left: " + timeLeft + " seconds";

function countDown() {
  timeLeft = timeLeft - 1;
  document.getElementById("timer").innerHTML = "Time left: " + timeLeft + " seconds";
  if (timeLeft <= 0) {
    submitQuiz();   
  }
}
const timer = setInterval(countDown, 1000);

function submitQuiz() {
  clearInterval(timer);   
  let score = 0;

  for (let i = 0; i < course.questions.length; i++) {
    const q = course.questions[i];
    const feedback = document.getElementById("feedback" + i);

    if (document.getElementById("q" + i + "o" + q.answer).checked) {
      score++;
      feedback.innerHTML = "✔ Correct!";
      feedback.className = "right";
    } else {
      feedback.innerHTML = "✘ Wrong. Correct answer: " + q.options[q.answer];
      feedback.className = "wrong";
    }
  }

  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];  
  leaderboard.push({ name: userName, course: course.title, score: score, total: course.questions.length });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("result").innerHTML = "<h2>You scored " + score + " / " + course.questions.length + "</h2>";
  window.scrollTo(0, 0);
}
document.getElementById("submitBtn").addEventListener("click", submitQuiz);
