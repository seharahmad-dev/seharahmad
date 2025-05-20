export interface Technology {
  name: string
  icon: string
  url: string
}

export const technologies: Technology[] = [
  { name: "C++", icon: "/img/cpp.png", url: "https://isocpp.org/std/the-standard" },
  { name: "Java", icon: "/img/java.png", url: "https://docs.oracle.com/en/java/" },
  { name: "Python", icon: "/img/python.png", url: "https://docs.python.org/3/" },
  { name: "JavaScript", icon: "/img/js.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "/img/typescript.png", url: "https://www.typescriptlang.org/docs/" },
  { name: "React", icon: "/img/react.svg", url: "https://react.dev/learn" },
  { name: "HTML5", icon: "/img/html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: "/img/css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind", icon: "/img/tailwind.png", url: "https://tailwindcss.com/docs" },
  { name: "Bootstrap", icon: "/img/bootstrap.svg", url: "https://getbootstrap.com/docs/" },
  { name: "jQuery", icon: "/img/jquery.svg", url: "https://api.jquery.com/" },
  { name: "MongoDB", icon: "/img/mongodb.png", url: "https://docs.mongodb.com/" },
  { name: "MySQL", icon: "/img/mysql.png", url: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", icon: "/img/postgres.png", url: "https://www.postgresql.org/docs/" },
  { name: "Auth0", icon: "/img/auth0.png", url: "https://auth0.com/docs/" },
  { name: "Node.js", icon: "/img/nodejs.svg", url: "https://nodejs.org/en/docs/" },
  { name: "npm", icon: "/img/npm.svg", url: "https://docs.npmjs.com/" },
  { name: "GitHub", icon: "/img/github.png", url: "https://docs.github.com/" },
  { name: "Postman", icon: "/img/postman.png", url: "https://learning.postman.com/docs/" }
]