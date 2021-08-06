import React from 'react'
import axios from 'axios'

function LandingPage() {

    const click = () => {
        axios.get('/api/')
        .then(response => console.log(response.data.message, "받음!"))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={click}>버튼</button>
        </div>
    )
}

export default LandingPage
