import React from 'react'
import axios from 'axios'

function LandingPage() {

    const click = () => {
        axios.get('/', (err, res) => {
            if(err) throw err
            else{
                console.log("받늠!")
            }
        })
    }

    return (
        <div>
            <button onClick={click}>버튼</button>
        </div>
    )
}

export default LandingPage
