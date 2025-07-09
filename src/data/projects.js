// src/data/projects.js
const projects = [
    {
        title: "Beacon — Amazon HackOn 2025",
        date: "Jul’25 – present",
        description: "A comprehensive e-commerce solution developed for Amazon HackOn 2025. Features a modular MVC architecture with dedicated UIs for consumers, sellers, and admins.",
        points: [
            "Designed a modular MVC Architecture based Node.js/Express Server with FastAPI powering three UIs (Consumer, Seller, Admin).",
            "Secured endpoints with JWT-based RBAC and `x-client-type` header middleware.",
            "Streamlined image uploads via Multer → Cloudinary.",
            "Validated all I/O with Zod; centralized error handling.",
            "Orchestrated AI/ML jobs (authenticity, sentiment, risk) using BullMQ workers.",
            "Tech: Node.js, Express, MongoDB, Redis, BullMQ, Cloudinary, Zod, JWT."
        ],
        tech: [
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "BullMQ",
            "Cloudinary",
            "Zod",
            "JWT"
        ],
        link: "https://github.com/Shauryacious/az-backend/"
    },
    {
        title: "Visioniyam",
        date: "Feb’24 - Apr’24",
        description: "An innovative software model for iris-based computer interaction, enabling mouse control through eye movements, designed for users with disabilities.",
        points: [
            "Developed a software model on face and iris matrix estimation, to achieve mouse functionalities such as mouse control movements, along with left and right clicks, all controlled by the Iris of a Person, specially in cases of Disability and Body Paralysis.",
            "Was Team Lead, and a Backend Developer of the project.",
            "Tech Stack: Python, PySide6, OpenCV, NodeJS, Express, MongoDB, ReactJS, Pug."
        ],
        tech: [
            "Python",
            "PySide6",
            "OpenCV",
            "NodeJS",
            "Express",
            "MongoDB",
            "ReactJS",
            "Pug"
        ],
        link: "https://github.com/Shauryacious/Visioniyam"
    },
    {
        title: "Socculator",
        date: "Aug’24 - Sept’24",
        description: "A web application for soccer match prediction and player evaluation, leveraging machine learning for high-accuracy forecasts.",
        points: [
            "Built a comprehensive web application for soccer match prediction and player evaluation.",
            "Managed data with MongoDB and utilized Node.js for backend logic, handling complex system calls using parallel processing via a child thread running in a Python environment.",
            "Employed pre-trained machine learning models (XGBoost, SVR, Linear Regression) trained on Kaggle datasets, ensuring high prediction accuracy.",
            "Processed and cleaned data using Pandas, NumPy, and Matplotlib, and incorporated SHAP for transparent model explanations.",
            "Tech Stack: NEXT.js, Node.js, Express, MongoDB, Python, XGBoost, SHAP, Pandas, NumPy, Matplotlib."
        ],
        tech: [
            "NEXT.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Python",
            "XGBoost",
            "SHAP",
            "Pandas",
            "NumPy",
            "Matplotlib"
        ],
        link: "https://github.com/Shauryacious/Socculator"
    },
    {
        title: "Academia Alert",
        date: "Nov’23 - present",
        description: "An official mobile application for announcements at NIT Raipur, connecting students with club events and fests.",
        points: [
            "Developed a full stack end-to-end mobile Application for the Announcements of different Clubs, Events & Fests Occurring at NIT Raipur.",
            "Was Top contributor, built high-speed backend.",
            "Increased open rates 23% with dynamic email functionality (using Pug).",
            "Tech Stack: MERN, React-Native."
        ],
        tech: ["MERN", "React-Native", "Pug"],
        link: "https://github.com/virajchandra51/Academia_Alert"
    },
    {
        title: "Petros - Rock Sample Analysis using AI/ML Clustering",
        date: "Oct'24 - Nov'24",
        description: "A project focused on rock sample analysis using AI/ML clustering techniques.",
        points: [
            "Implemented unsupervised ML algorithms for geological rock sample clustering and classification.",
            "Developed data pipelines for preprocessing and feature extraction from raw geological datasets.",
            "Visualized cluster results and provided insights for geologists.",
            "Tech Stack: Python, scikit-learn, Pandas, Matplotlib."
        ],
        tech: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Matplotlib"
        ],
        link: "https://github.com/Shauryacious/petros"
    },
    {
        title: "Streamania - WebRTC based Stream application for iOS/Android",
        date: "Aug'24 - Sept'24",
        description: "A WebRTC based streaming application for iOS and Android platforms.",
        points: [
            "Built a real-time video streaming platform using WebRTC for cross-platform mobile devices.",
            "Integrated signaling server and optimized peer-to-peer connections for low-latency streams.",
            "Developed a responsive UI for both iOS and Android using React Native.",
            "Tech Stack: WebRTC, React Native, Node.js, Express."
        ],
        tech: [
            "WebRTC",
            "React Native",
            "Node.js",
            "Express"
        ],
        link: "https://github.com/Shauryacious/streamania"
    }
];

export default projects;
