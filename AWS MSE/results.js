const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];  

leaderboard.sort(function (a, b) {
  return b.score - a.score;
});

let rows = "";
for (let i = 0; i < leaderboard.length && i < 10; i++) {
  rows += "<tr><td>" + (i + 1) + "</td><td>" + leaderboard[i].name + "</td><td>" + leaderboard[i].course + "</td><td>" + leaderboard[i].score + " / " + leaderboard[i].total + "</td></tr>";
}
if (rows === "") {
  rows = "<tr><td colspan='4'>No scores yet. Finish a quiz to appear here.</td></tr>";
}
document.getElementById("tableBody").innerHTML = rows;

document.getElementById("clearBtn").addEventListener("click", function () {
  localStorage.removeItem("leaderboard");
  location.reload();
});
