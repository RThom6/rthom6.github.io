export const recentProjects = [
    {
        title: "tello-rust",
        description: "Tello-rust was my first small to medium sized project in Rust. It is a wrapper for controlling a DJITello drone using the Ryze Tello sdk. The library works as a wrapper for this SDK and works over a UDP port. The aim of it was to translate DJITelloPy from Python to Rust as a way of learning a bit about a new language. I uploaded version 1.0 of the library to crates.io (the rust community's crate registry) on the 14th of September 2024 and by the 19th it had garnered over 350 downloads.",
        description2: "Creating this Rust library to interact with the Tello drone has taught me several important concepts. I've gained a deeper understanding of Rust's ownership and borrowing model, particularly when using Arc and Mutex to safely share state across threads. I've also become more proficient in handling errors and optional values through Rust's Result and Option types. Additionally, managing state using HashMap and custom enums like StateValue has helped me appreciate Rust's ability to build safe, performant, and reliable systems.",
        imageUrl: "/resources/tell-rust.png"
    },
    {
        title: "Portfolio Webstie",
        description: "My portfolio is the first website I'd worked on. It was built using Next.js, FlutterFlow, ChakraUI and was written in Typescript. It taught me to design my own page and how to style so that a site may look good on small, medium or large devices.",
        description2: "The point of this portfolio page is to provide more information about myself and allow me to display some projects that I am proud of in a little more detail. If you're reading this and you have any feedback you might want to give, please feel free to contact me as I am always looking to improve.",
        imageUrl: "/resources/portfolio.png"
    },
    {
        title: "Beesprite",
        description: "Beesprite is a pixel painter application I collaborated on in my second year of University. Each group had to draft up a design report and a timeline which we could then use as a basis for our projects. I took a leading role in organising the tasks and deadlines for every member of the group and we managed to turn in a successfully completed project with expected functionality including undo/redo, import/export feature for a couple of different image types and fully customisable theme colours.",
        description2: "Working on this project taught me good leadership and communication. It also helped build good version control practises where we would work on each new feature as its own feature branch, and then peer review eachothers code before accepting any pull request. This project also gave me the chance to improve my Java programming. If I were to remake this project, one thing I would definitely change is our codebase. As we were fairly new to semi large Java programs, our directory management was not ideal.",
        imageUrl: "/resources/beesprite2.png"
    }
];

export const skills = [
    {
        title: "Java"
    },
    {
        title: "C"
    },
    {
        title: "Embedded C"
    },
    {
        title: "Typescript"
    },
    {
        title: "Python"
    },
    {
        title: "AWS"
    },
    {
        title: "Azure DevOps"
    },
    {
        title: "Node.js"
    },
    {
        title: "Next.js"
    },
    {
        title: "Git"
    },
    {
        title: "React"
    },
    {
        title: "Spigot/Bukkit"
    },
    {
        title: "MATLAB"
    },
    {
        title: "Linux development"
    },
    {
        title: "PowerAutomate"
    },
]

export const someInfo = [
    {
        title: "Passionate Learner",
        description:
            "I\'m always eager to learn and solve complex technical problems. Whether it\’s mastering a new programming language or exploring new technology, I love diving deep and expanding my skillset.",
    },
    {
        title: "Collaborative Problem Solver",
        description:
            "I thrive when working with others. Sharing ideas and solving problems as a team is something I enjoy, as it allows me to see perspectives I might not have thought of.",
    },
    {
        title: "Disciplined Athlete",
        description:
            "I've competed in athletics, participating in events like shot putt and high jump. Now I work out regularly, which has taught me goal-setting and self-discipline that I apply to every part of my life.",
    },
    {
        title: "Love for Games",
        description:
            "Gaming is a big part of who I am. Whether it's strategy games or competitive shooters, I love honing my skills and coordinating with teammates to achieve success.",
    },
    {
        title: "Bilingual Communicator",
        description:
            "Fluent in both Welsh and English, I have strong interpersonal skills and enjoy connecting with people through clear and effective communication.",
    },
    {
        title: "MSc Computer Science Student",
        description:
            "Currently completing my MSc in Computer Science at Lancaster University, where I’ve been developing my passion for technology and innovation.",
    },
    {
        title: "Creative Problem-Solver",
        description:
            "I love finding creative solutions to technical problems and always aim to think outside the box. My experience with programming has taught me how to approach challenges from multiple angles.",
    },
    {
        title: "Mentor and Guide",
        description:
            "I take pride in helping others learn and grow. Whether it's through teaching assistant roles or supporting my peers, I enjoy guiding people and sharing knowledge.",
    },
    {
        title: "Driven by Curiosity",
        description:
            "Curiosity fuels everything I do. From exploring new technologies to diving into personal projects, I am always driven to discover how things work and how I can make them better.",
    },
]

export const gridItems = [
    {title: 'tello-rust API', description: 'This project is designed to allow users to control a Ryze Tello drone using Rust. It provides a Rust-based interface to abstract away from the Tello SDK allowing for quick setup and works over a UDP port. This project demonstrates skills such as network programming, concurrency and use of data structures.', id: 1},
    {title: 'Minecraft Plugin Development', description: 'Peer programmed multiple Java Minecraft plugins from scratch', id: 2},
    {title: 'Junior API Developer', description: 'Wrote AWS Lambda functions for use by other members of the team in different projects. Created API end-points for uploading and gathering data from DynamoDB', id: 3, className: ""},
]