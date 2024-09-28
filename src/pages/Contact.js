import './Contact.css';


export default function Contact() {
    return (
        <div id="contact" className='contact'>
                <div className="row">
                    <div className="contact-left">
                        <h1 className="subtitle">Contact Me</h1>
                        <p><i className="fa-solid fa-paper-plane" /> jiromikovinas@gmail.com</p>
                        <p><i className="fa-solid fa-square-phone" /> 09917706386</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/jiromiko.vinas"><i className="fa-brands fa-facebook" /></a>
                            <a href="https://www.instagram.com/jiro_miko?igsh=MXZqdHVmdWd3N2NxYw=="><i className="fa-brands fa-instagram" /></a>
                            <a href="https://m.me/jiromiko.vinas"><i className="fa-brands fa-facebook-messenger" /></a>
                            <a href="https://www.tiktok.com/@jio_vinas?_t=8nqS0PJppqs&_r=1"><i className="fa-brands fa-tiktok" /></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows={6} placeholder="Your Message" />
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg" />
                    </div>
                </div>
            <div className="copyright">
                <p>Copyright &copy; 2023 | All Rights Reserved</p>
                <p>Developed by <span>Jiro Miko S. Vi&ntilde;as</span></p>
            </div>
        </div>
    );
}
