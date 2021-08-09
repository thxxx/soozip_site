import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../../tools/ShowPage.scss'

function SneakersPage() {

    const [sneakersList, setSneakersList] = useState([])

    useEffect(() => {
        axios.get('/api/getSneakers')
        .then( response => {console.log(response)})
        .catch(error => ( console.log("Data load error ", error)))
    },[])

    return (
        <div className="body">
            스니커즈 페이지
            <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
            </div>
        </div>
    )
}

export default SneakersPage
