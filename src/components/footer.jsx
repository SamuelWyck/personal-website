import "../styles/footer.css";
import resume from "../db/samuelWycklendtResume.pdf";



function Footer() {
    return (
        <footer>
            <p>Like what you see?</p>
            <a href={resume} download={true}>Download my Resume</a>
        </footer>
    );
};



export default Footer;