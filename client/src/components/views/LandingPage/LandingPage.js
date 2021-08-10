import React from 'react'
import axios from 'axios'
import '../../tools/ShowPage.scss'
import ShowPage from './ShowPage'
import { Button, Image, Typography } from 'antd'
const  { Title, Paragraph } = Typography

function LandingPage() {
  


    const click = () => {
        axios.get('/api/users/')
        .then(response => console.log(response, "받음!"))
        .catch(error => console.log(error))
    }

    return (
        <div className="body" id="main" style={{
          flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', fontSize:'1rem',
          height:'750px', display: 'flex',
          }}>
            <span style={{}}>
            <Typography>
              <Title level={1}>Soo zip</Title>
              <br/>
              <Paragraph>
                수집가들을 위한 플랫폼입니다. 간직하고 있는 소중한 물건을 공유해보세요. <br/>
                본 사이트는 모바일 환경에 최적화되어 있습니다.
              </Paragraph>
            </Typography>
            <Button onClick={click}>버튼</Button>
          </span>
        </div>
    )
}

export default LandingPage
