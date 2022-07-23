import React from 'react'
import ftimg from "./footer.jpg"
import { useNavigate } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    let navigate = useNavigate();
    return (
        <div>

            <div className='ftbcon' >
                <div className='fticon'>
                    <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
                </div>
                <div className='ftflxcon' >
                    <div className='pdivfot' onClick={() => navigate("/india")} >INDIA</div>
                    <div className='pdivfot' onClick={() => navigate("/world")} >WORLD</div>
                    <div className='pdivfot' onClick={() => navigate("/business")} >BUSINESS</div>
                    <div className='pdivfot' onClick={() => navigate("/technology")} >TECHNOLOGY</div>
                    <div className='pdivfot' onClick={() => navigate("/sports")} >SPORTS</div>
                    <div className='pdivfot' onClick={() => navigate("/cricket")} >CRICKET</div>
                    <div className='pdivfot' onClick={() => navigate("/entertainment")} >ENTERTAINMENT</div>
                </div>
            </div>

            <div>
                <img src={ftimg} alt="" />
            </div>
        </div>
    )
}

export default Footer