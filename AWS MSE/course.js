const course = getCourse(location.search.split("=")[1]);        
const done = Number(localStorage.getItem("done" + course.id));  

let html = "<h1>" + course.title + "</h1>";
html += "<p>" + course.description + "</p>";

html += "<div class='box'><h3>Your progress: " + getPercent(course) + "%</h3>";
html += "<progress value='" + getPercent(course) + "' max='100'></progress></div>";

html += "<div class='box'><h3>Lessons</h3>";
for (let i = 0; i < course.lessons.length; i++) {
  if (i < done) {
    html += "<p>✔ " + course.lessons[i] + "</p>";   
  } else {
    html += "<p>⬜ " + course.lessons[i] + "</p>";   
  }
}
if (done < course.lessons.length) {
  html += "<button onclick='finishLesson()'>I finished the next lesson</button>";
}
html += "</div>";

html += "<a class='button' href='quiz.html?id=" + course.id + "'>Take the quiz</a>";
document.getElementById("courseBox").innerHTML = html;

function finishLesson() {
  localStorage.setItem("done" + course.id, done + 1);
  location.reload();   
}
