import React from 'react'
import Icons from '../../tools/Icons'
import './Footer.scss'

function Footer() {
    return (
        <div className="foot" style={{
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            height:'250px', display: 'flex',
            }}>
           <p> Happy Coding  {Icons.FaceRounded}</p>
        </div>
    )
}

export default Footer
