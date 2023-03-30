import * as React from 'react'; 
import '../components/home.css';
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";

const HomePage = ({ children }) => {

    //get date for footer
    const current = new Date();
    const date = `${current.getFullYear()}`;

    return ( 
    <div className="container">
        {/* header */}
        <div className="header">
            <div className="headercontent">
                <h1>Isabella Lawson</h1>
                <div className="navlinks">
                    <a href="#about">about</a>
                    <a href="#experience">experience</a>
                    <a href="#projects">projects</a>
                    <a href="#contact">contact</a>
                </div>
            </div>
        </div>
        {/* featured project */}
        <div className="featuredproject">
            <div className='fptext'>
                <h3>featured project ↓</h3>
                <Link to="/postcardgen"><p style={{textDecoration:"underline dotted", border:"solid 2px black", borderRadius:"2px", textAlign:"center", padding:"10px"}}>postcard generator</p></Link>
            </div>
            <div className='showoff'>
                { children }
            </div>
        </div>
        {/* sections */}
            {/* about */}
            <div className="sectioncontainer" id="about">
                <h2>#About</h2>
                <p>I studied fine art for 10 years. I started down that path by creating browser based games when I was a child. 10 years later I decided to go down the other path. I still paint, just digitally. As a UX developer, I think design is inseparable from coding. Technical limitations should inform design. Imagination should push technical discoveries.</p>
            </div>
            {/* experience */}
            <div style={{alignItems:"flex-end"}} className="sectioncontainer" id='experience'>
                <h2>#Experience & Education</h2>
                <p style={{textAlign:'end'}}>I have studied web development with Javascript, software development with C#, and UX Design with Code Louisville. </p>
                <p style={{textAlign:'end'}}>I currently work as a bespoke Shopify developer on vismarkproducts.com. </p>
            </div>
            {/* projects */}
            <div className="sectioncontainer" id='projects'>
                <h2>#Projects</h2>
                <p>+ mockup of local construction company website</p>
                <p>I currently work as a bespoke Shopify developer on vismarkproducts.com.</p>
            </div>
            {/* contact */}
            <div className="sectioncontainer" style={{alignItems:"flex-end"}} id="contact">
                <h2>#Contact</h2>
                <p>email me at <a href="mailto:hello@isabellalawson.com">hello@isabellalawson.com</a></p>
                <a href="https://www.linkedin.com/in/isabellalawson/"><img style={{width: "50px"}} src="https://imgs.search.brave.com/IQj7XKPfcvtBGOVI2u-0DVIIvOeDtEjfj1jibbw72Cw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zZ3Vy/dS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvbGlu/a2VkaW4tcG5nLWxp/bmtlZGluLWljb24t/MTYwMC5wbmc" /></a>
            </div>
        {/* footer */}
        <div className='footer'>
            <a href="https://github.com/lawsdev"><img style={{maxWidth: "50px"}} src="https://imgs.search.brave.com/ikcrhKQN5Ni60H22fPzkPeFZsD0oUqDTRZdQputksE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL2dp/dGh1Yl9QTkc0MC5w/bmc" /></a>
            <p>copyright {date} Isabella Lawson</p>
        </div>
    </div>
     )
}

export default HomePage;