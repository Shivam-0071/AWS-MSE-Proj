const searchBox = document.getElementById("searchBox");

function showCourses() {
  let html = "";
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];

    if (course.title.toLowerCase().includes(searchBox.value.toLowerCase())) {
      html += "<div class='box'>";
      html += "<h3>" + course.title + "</h3>";
      html += "<p>" + course.description + "</p>";
      html += "<progress value='" + getPercent(course) + "' max='100'></progress>";
      html += "<p>" + getPercent(course) + "% complete</p>";
      html += "<a class='button' href='course.html?id=" + course.id + "'>View course</a>";
      html += "</div>";
    }
  }

  if (html === "") {
    html = "<p>No courses found.</p>";
  }
  document.getElementById("courseList").innerHTML = html;
}

searchBox.addEventListener("input", showCourses);   
showCourses();                                      
