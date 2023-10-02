import {
    cooking,
    bitnine,
    ninja,
    money,
    weather,
    signup,
    saulatport,
    todoList,
    mobile,
    castle,
    castle2,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    firebase,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    magic,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
 
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
 
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    { name: 'firebase',
      icon: firebase
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Front-end Developer",
      company_name: "Dware",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Javacript & JQuery and other related technologies.",
        "Worked under the supervision of a Software Engineer in an Salesforce environment implemented 3rd party integration through back-end (booxi widgth) and used custom preference for the api to set the value as per client desire.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My money",
      description:
        "A web base platform that allows users to create their own account and then track their own transactions, users can add or remove any transactions, multiple users can create their own accounts this app has its own database i used firebase as database",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: money,
      source_code_link: "https://github.com/saulat-ux/Finance_tracker",
      live_demo_link: 'https://mymoney-bcaaf.web.app/'
    },
    {
      name: "Magic Game",
      description:
        "A puzzel game where you have to guess and match the card with its dublicate counter-part  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: magic,
      source_code_link: "https://github.com/saulat-ux/Magic-app",
      live_demo_link: 'https://magicapp-1ecef.web.app/'
    },
    {
      name: "Project_Managment",
      description:
        "A web application that allows user to create their own account and than keep track of their projects, users can assign projects to other users and also give a due date for the project completion and also give their comments on other users projects and their own users authencation data is stored in firebase as a backend also creation of projects data is also stored in a database ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: castle,
      source_code_link: "https://github.com/saulat-ux/project_managment",
      live_demo_link: 'https://thecastlesite-4ecb8.web.app/'
    },
    {
      name: "Signup form",
      description:
        "A signup form where users data is stored in react useState hooks",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: signup,
      source_code_link: "https://github.com/saulat-ux/sign-up-form",
      live_demo_link: 'https://signup-form-4ac9c.web.app/'
    },
    {
      name: "Ninja quiz",
      description:
        "A plain javascript app",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ninja,
      source_code_link: "https://github.com/saulat-ux/ninja-quiz",
      live_demo_link: 'https://ninja-quiz-78f1e.web.app/'
    },
    {
      name: "Weather app",
      description:
        "A web-based application that gives user information about the weather ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/saulat-ux/weather-app",
      live_demo_link: 'https://weather-app-c1418.web.app/'
    },
    {
      name: "My portfolio",
      description:
        "My first portfolio to show-case my projects",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
    
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: saulatport,
      source_code_link: "https://github.com/",
      live_demo_link: 'https://saulatzubair-e405e.web.app/'
    },
    {
      name: "Bitnine webpage",
      description:
        "A Bitnine Global webpage made with react front-end framwork",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bitnine,
      source_code_link: "https://github.com/saulat-ux/Bitnine-Global",
      live_demo_link: 'https://bitnineglobal-e10c2.web.app/'
    },
    {
      name: "Todo-list",
      description:
        "A todo list where user can enter his or her list of todo's and also delete them ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todoList,
      source_code_link: "https://github.com/saulat-ux/Todo-list",
      live_demo_link: 'https://todo-list-4f072.web.app/'
    },
    {
      name: "Cooking Wizard",
      description:
        "A Web-base application that allows users to add their own cooking recipe the data for the recipe is stored in a database ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cooking,
      source_code_link: "https://github.com/saulat-ux/cooking_recipe",
      live_demo_link: 'https://cooking-wizard-183b1.firebaseapp.com/'
    }
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };