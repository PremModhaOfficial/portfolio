import "./navbar.scss"
import gh from "/github.png"
import li from "/linkedin.png"
import ph from "/phone.png"
import em from "/email.png"
import Sidebar from "../sidebar/Sidebar"

export default function Navbar() {

    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span>Software-Engineer</span>
                <div className="social">
                    <a href="#"><img src={ph} alt="fb" /></a>
                    <a href="#"><img src={gh} alt="yt" /></a>
                    <a href="#"><img src={em} alt="ig" /></a>
                    <a href="#"><img src={li} alt="li" /></a>
                </div>
            </div>
        </div>
    )
}
