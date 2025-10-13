import beakBookImg from "../assets/projectImages/beakbook.png";


const projects = [
    {
        title: "Beakbook",
        bannerImg: beakBookImg,
        description: "A messaging web application akin to discord. Users can send chat messages, friend requests, and create chat groups in real time.",
        details: "Web sockets were used for real-time chatting and notifications. All connections are managed to allow for users to create, join, and leave group chats. Users can also invite friends to any group chat.",
        projectLink: "https://beakbook.pages.dev/",
        gitHubLink: "https://github.com",
        // downLoadLink: "", 
        techUsed: ["Socket.io", "React.js", "Express.js", "postgreSQL", "Passport.js"]
    }
];



export default projects;