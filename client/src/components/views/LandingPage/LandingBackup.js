import React from 'react'
import axios from 'axios'
import '../../tools/ShowPage.scss'
import ShowPage from './ShowPage'

function LandingPage() {

    const click = () => {
        axios.get('/api/users/')
        .then(response => console.log(response, "받음!"))
        .catch(error => console.log(error))
    }

    return (
        <div className="body">
            <ShowPage />
            <button onClick={click}>버튼</button>
            {/* 인기 상품 */}
      <section className="popular">
        <ul className="split">
          <li>
            <img src="img/shoes1.jpeg"/>
            <h3>Shoes1</h3>
            <p>10000원</p>
          </li>
          <li>
            <img src="img/shoes2.jpeg"/>
            <h3>Shoes2</h3>
            <p>20000원</p>
          </li>
          <li>
            <img src="img/shoes3.jpeg"/>
            <h3>Shoes3</h3>
            <p>30000원</p>
          </li>
        </ul>
      </section>
        </div>
    )
}

export default LandingPage
