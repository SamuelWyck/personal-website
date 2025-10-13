import beakBookImg from "../assets/projectImages/beakbook.png";
import owlRoostImg from "../assets/projectImages/owlroost.png";
import waldoImg from "../assets/projectImages/waldo.png";
import warpCommanderImg from "../assets/projectImages/warpCommander.png";



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
    },
    {
        title: "Warp Commander",
        bannerImg: warpCommanderImg,
        description: "A retro single player game published on Steam. Players play as a spaceship and fight off waves of enemies and bosses. Players who make it far enough will add their score to the leaderboard.",
        details: "This project was a challange to myself to make and publish a game without using a game engine. It was a solo dev project made purely in python using the pygame library.",
        projectLink: "https://www.youtube.com/watch?v=RFcaEz8wLWc",
        downloadLink: "https://store.steampowered.com/app/3840360/Warp_Commander/",
        techUsed: ["Python", "Pygame"]
    },
    {
        title: "Where's Waldo",
        bannerImg: waldoImg,
        description: "An image tagging web application in the form of a Where's Waldo game. Players must race to find Waldo and his friends. The fastest players will make it on to the leaderboard.",
        details: "Player time and player guesses are validated on the server side so it is impossible to cheat. Leaderboard names are also validated to ensure that every name is unique.",
        projectLink: "https://wheres-waldo-949.pages.dev/",
        gitHubLink: "https://github.com/SamuelWyck/wheres-waldo-api",
        techUsed: ["React.js", "Express.js", "postgreSQL", "Prisma ORM"]
    }
];



export default projects;