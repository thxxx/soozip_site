import React from 'react'
import Icons from '../../tools/Icons'
import './Footer.scss'

function Footer() {
    return (
        <div className="foot" style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            height:'300px', display: 'flex',
            }}>
            <span className="foot_content">
                <p> Happy Coding  {Icons.FaceRounded}</p>
                <p> {Icons.LocationCityIcon} 팀 수집가들 </p>
                <p> {Icons.EmailIcon} 이메일 : khj605123@gmail.com </p>
           </span>
            <span className="foot_content2">
                <p> Happy Coding  {Icons.FaceRounded}</p>
                <p> {Icons.LocationCityIcon} 팀 수집가들 </p>
                <p> {Icons.EmailIcon} 이메일 : khj605123@gmail.com </p>
           </span>
        </div>
    )
}

export default Footer
