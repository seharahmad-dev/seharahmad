export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Car Price Prediction",
    description:
      "Developed a web-based platform for real-time used car price prediction using advanced machine learning models, enabling users to make data-driven decisions in the second-hand car market.",
    image: "/project/carprice.jpg",
    technologies: ["Next.js", "Flask", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com/gitgeek-glitch/carpp.git",
    demo: "https://carpriceprediction-sandy.vercel.app/",
  },
  {
    id: 2,
    title: "AskItOut",
    description: "A student-driven Q&A platform for sharing knowledge, solving doubts, and connecting minds across campus. Empowering students to learn from each other, one question at a time. Ask anything, answer everything.",
    image: "/project/askitout.jpg",
    technologies: ["React", "Node", "MongoDB", "Gemini Integration"],
    github: "https://github.com/gitgeek-glitch/doubtplatform.git",
    demo: "/building",
  },
  {
    id: 3,
    title: "Tiny Encryption Algorithm",
    description:
      "The Tiny Encryption Algorithm (TEA) is a lightweight yet powerful block cipher known for its simplicity and speed. Integrated into the site for hands-on exploration of modern cryptographic principles.",
    image: "/project/tea.jpg",
    technologies: ["Next", "Encryption", "Block Cipher", "Cryptography"],
    github: "https://github.com/gitgeek-glitch/tea-algorithm.git",
    demo: "https://tea-algorithm.vercel.app/",
  },
  {
    id: 4,
    title: "BatteryTech Explorer",
    description:
      "A full-stack educational platform designed to teach users about various battery technologies through interactive visualizations, comparisons, timelines, and quizzes.",
    image: "/project/battery.jpg",
    technologies: ["Next", "Tailwind CSS", "Gemini Integration"],
    github: "https://github.com/gitgeek-glitch/batterytech.git",
    demo: "https://batterytech.vercel.app/",
  },
  {
    id: 5,
    title: "Team Collab",
    description:
      "A collaborative platform where leaders can create teams and invite members to join. Team members can work together on shared projects with real-time updates and seamless coordination.",
    image: "/project/team.jpg",
    technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Socket.io"],
    github: "https://github.com/gitgeek-glitch/teamcollab.git",
    demo: "/building",
  },
  {
    id: 6,
    title: "Gene2Tree",
    description:
      "A bioinformatics web application that allows users to explore evolutionary relationships by selecting gene IDs and generating phylogenetic trees. It fetches real-time DNA sequences from NCBI.",
    image: "/project/phlo.jpg",
    technologies: ["Next", "Python", "Biopython", "NCBI Entrez API"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
  {
    id: 7,
    title: "Unix Shell Replica",
    description:
      "Built a custom UNIX Shell in C, extending core functionalities to deepen UNIX environment system programming expertise.",
    image: "/project/project-img2.jpg",
    technologies: ["C", "Unix", "Shell Scripting", "System Programming"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
  {
    id: 8,
    title: "Email Writer",
    description:
      "An AI-powered email writer that generates professional and personalized emails using GPT-2 integration.",
    image: "/project/project-img3.png",
    technologies: ["Python", "GPT-2 model (via Hugging Face Transformers)"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
]