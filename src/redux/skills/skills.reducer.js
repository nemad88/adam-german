const INITIAL_STATE = {
  skills: [
    "i can read and understand any JavaScript, Java, HTML, CSS code",
    "i can write clean and readable code",
    "i am familiar with ES6, HTML5 and CSS3",
    "i can create complex React applications with Redux, Hooks, Styled Components, etc.",
    "i can integrate and use any package to my work if it has appropriate documentation",
    "i can use GIT",
    "i know the basics of CI/CD",
    "i can use JIRA",
    "i can work with any IDE or editor but my favorites are VS Code and IntelliJ IDEA",
    "i am familiar with testing mainly UI testing",
    "i know the basics of UI/UX design",
    "i can use Figma and Adobe XD",
    "i can work in a team",
    "i can learn new things quickly",
    "i can play the piano",
  ],
  keyWords: [
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "HTML5",
    "CSS3",
    "GIT",
    "ES6",
    "React",
    "Figma",
    "Adobe XD",
    "team",
    "Redux",
    "Hooks",
    "Styled Components",
    "UI testing",
    "UI/UX",
    "VS Code",
    "Jira",
    "CI/CD",
    "clean",
    "readable code",
  ],
};

const skillsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillsReducer;
