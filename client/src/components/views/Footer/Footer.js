import React from 'react'
import Icons from '../../tools/Icons'
import './Footer.scss'

function Footer() {
    return (
        <div className="foot" style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            height:'300px', display: 'flex',
            marginBottom:'0%',
            }}>
            <span className="foot_content">
                <p> @2021 made by 팀 수집가들 </p>
                <p> {Icons.LocationCityIcon} 서대문구 연희로 </p>
                <p> {Icons.EmailIcon} 문의사항 : khj605123@gmail.com </p>
           </span>
        </div>
    )
}

export default Footer
