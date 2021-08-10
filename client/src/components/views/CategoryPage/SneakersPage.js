import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../../tools/ShowPage.scss'
import ResultCard from '../../tools/ResultCard'

function SneakersPage() {

    const [sneakersList, setSneakersList] = useState([])

    useEffect(() => {
        axios.get('/api/getSneakers')
        .then( response => {
            console.log(response.data.sneakers)
            setSneakersList(response.data.sneakers)
        })
        .catch(error => ( console.log("Data load error ", error)))
    },[])


    return (
        <div className="body">
            스니커즈 페이지
            <ResultCard sneakers={sneakersList} />
        </div>
    )
}

export default SneakersPage
