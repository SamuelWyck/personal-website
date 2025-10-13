import beakBookImg from "../assets/projectImages/beakbook.png";
import owlRoostImg from "../assets/projectImages/owlroost.png";



const projects = [
    {
        title: "Beakbook",
        bannerImg: beakBookImg,
        description: "A messaging web application akin to discord. Users can send chat messages, friend requests, and create chat groups in real time.",
        details: "Web sockets were used for real-time chatting and notifications. All connections are managed to allow for users to create, join, and leave group chats. Users can also invite friends to any group chat.",
        projectLink: "https://beakbook.pages.dev/",
        gitHubLink: "https://github.com/SamuelWyck/beakbook-api",
        // downLoadLink: "", 
        techUsed: ["Socket.io", "React.js", "Express.js", "postgreSQL", "Passport.js"]
    },
    {
        title: "Owlroost",
        bannerImg: owlRoostImg,
        description: "A user driven social media web application. Athenticated users can create posts with text and images. Users can also leave comments on posts, follow other users, and other like posts.",
        details: "Athenticated users can manage their profile which shows all of their posts, comments, and posts from followed users. Non-authenticated users can view posts, but cannot like posts, leave comments, or create posts.",
        projectLink: "https://owlroost.pages.dev/",
        gitHubLink: "https://github.com/SamuelWyck/owlroost-api",
        techUsed: ["React.js", "Express.js", "postgreSQL", "Passport.js"]
    }
];



export default projects;