const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn to build web pages.",
    lessons: ["What is HTML?", "Headings and paragraphs", "Links and images", "Lists and tables"],
    questions: [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], answer: 0 },
      { question: "Which tag makes the biggest heading?", options: ["h6", "h1", "head"], answer: 1 },
      { question: "Which tag shows an image?", options: ["picture", "src", "img"], answer: 2 }
    ]
  },
  {
    id: 2,
    title: "CSS Basics",
    description: "Add colors and style to your pages.",
    lessons: ["What is CSS?", "Colors and fonts", "The box model", "Flexbox"],
    questions: [
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"], answer: 0 },
      { question: "Which property changes the text color?", options: ["font-color", "color", "text-style"], answer: 1 },
      { question: "Which symbol selects a class?", options: ["#", "*", "."], answer: 2 }
    ]
  },
  {
    id: 3,
    title: "JavaScript Basics",
    description: "Make your pages interactive.",
    lessons: ["Variables", "Functions", "Arrays and loops", "The DOM"],
    questions: [
      { question: "Which keyword creates a variable you can change?", options: ["let", "fixed", "static"], answer: 0 },
      { question: "How do you print to the console?", options: ["print('Hi')", "console.log('Hi')", "echo('Hi')"], answer: 1 },
      { question: "Which method adds an item to the end of an array?", options: ["add()", "pop()", "push()"], answer: 2 }
    ]
  }
];

function getCourse(id) {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == id) {
      return courses[i];
    }
  }
  return courses[0];
}
function getPercent(course) {
  const done = Number(localStorage.getItem("done" + course.id));   
  return Math.round(done / course.lessons.length * 100);
}
