import beakBookImg from "../assets/projectImages/beakbook.png";
import owlRoostImg from "../assets/projectImages/owlroost.png";
import waldoImg from "../assets/projectImages/waldo.png";
import warpCommanderImg from "../assets/projectImages/warpCommander.png";
import blogImg from "../assets/projectImages/blog.png";
import doogleGriveImg from "../assets/projectImages/fileUploader.png";
import battleshipsImg from "../assets/projectImages/battleships.png";
import pongImg from "../assets/projectImages/pong.png";
import weatherWatchImg from "../assets/projectImages/weatherWatch.png";
import calculatorImg from "../assets/projectImages/calculator.png";
import blackjackImg from "../assets/projectImages/blackjack.png";



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
        description: "A retro single player game published on Steam. Players play as a spaceship and fight off waves of enemies and bosses. Players who make it far enough can add their score to the leaderboard.",
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
    },
    {
        title: "Blog Site",
        bannerImg: blogImg,
        description: "A blog web application where authenticated users can leave comments on blog posts. Only users with admin privileges are able to create blog posts.",
        details: "TinyMCE is used as a rich text editor when writing blog posts. This allows for variable text sizes, bolded text, and inserted links. Authentication is handled by jsonwebtokens.",
        projectLink: "https://odin-blog-site.pages.dev/posts",
        gitHubLink: "https://github.com/SamuelWyck/odin-blog-api",
        techUsed: ["React.js", "Express.js", "postgreSQL", "Passport.js", "Prisma ORM"]
    },
    {
        title: "Doogle Grive",
        bannerImg: doogleGriveImg,
        description: "A cloud storage web application akin to Google Drive. Users can upload files to the cloud and download them anywhere using their account. Users can also create folders to organize and manage their files.",
        details: "Express's EJS engine is used to render all pages of this application on the server side.",
        projectLink: "https://odin-file-drive.onrender.com/",
        gitHubLink: "https://github.com/SamuelWyck/odin-file-drive",
        techUsed: ["Express.js", "postgreSQL", "Passport.js"]
    },
    {
        title: "Battleships",
        bannerImg: battleshipsImg,
        description: "The game battleships in a frontend web application. The user can place their ships and play against the computer.",
        details: "The computer uses a probability density map to make intelligent guesses. This allows the computer to always guess the position most likely to contain a ship.",
        projectLink: "https://samuelwyck.github.io/battleships/",
        gitHubLink: "https://github.com/SamuelWyck/battleships",
        techUsed: ["Webpack", "JavaScript"]
    },
    {
        title: "Pong",
        bannerImg: pongImg,
        description: "The game pong created in python. The player plays against the computer in a match that goes first to eleven.",
        details: "This game was created using pygame and python without a game engine. It was the first game I created with real-time action and physics.",
        projectLink: "https://www.youtube.com/watch?v=fNSEseyzia4",
        gitHubLink: "https://github.com/SamuelWyck/Pong-Game",
        downloadLink: "https://sirgoodman007.itch.io/pong",
        techUsed: ["Python", "Pygame"]
    },
    {
        title: "Weather Watch",
        bannerImg: weatherWatchImg,
        description: "A frontend weather web application. Users can get a detailed forecast for the week from any location.",
        details: "The Visual Crossing weather api is used to get up to date weather information for any location the user provides. Units can also be changed from imperial to metric.",
        projectLink: "https://samuelwyck.github.io/weather-app/",
        gitHubLink: "https://github.com/SamuelWyck/weather-app",
        techUsed: ["JavaScript", "Webpack"]
    },
    {
        title: "Scientific Calculator",
        bannerImg: calculatorImg,
        description: "A working scientific calculator. Users can calculate complex expressions and use common trigonometric functions.",
        details: "Reverse Polish Notation is used to parse out user input, allowing users to enter long and complex expressions. All answers are carefully parsed to ensure that information displayed is always consistent and highly precise.",
        projectLink: "https://samuelwyck.github.io/odin-calculator/",
        gitHubLink: "https://github.com/SamuelWyck/odin-calculator",
        techUsed: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "Blackjack",
        bannerImg: blackjackImg,
        description: "The game Blackjack created in Python using the Pygame library. Players can 'bet' against the computer to attempt to get the highscore.",
        details: "This was the first project I ever created with rendered graphics and sounds.",
        projectLink: "https://www.youtube.com/watch?v=uaMXLDAhiwA",
        gitHubLink: "https://github.com/SamuelWyck/Blackjack-Game",
        techUsed: ["Python", "Pygame"]
    }
];



export default projects;