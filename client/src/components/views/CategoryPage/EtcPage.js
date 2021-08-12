import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../../tools/ShowPage.scss'
import ResultCard from '../../tools/ResultCard'

function EtcPage() {
    const [sneakersList, setSneakersList] = useState("")

    useEffect( () => {
        axios.get('/api/getSneakers')
        .then( (response) => {
            if(response.data.success){
                setSneakersList(response.data.sneakers);
            }else{
                console.log("스니커즈 로딩 에러")
            }
        })
        .catch(error => ( console.log("Data load error ", error)))
    },[])


    return (
        <div className="body">
            스니커즈 페이지
            <ResultCard sneakers={sneakersList} />
            <button onClick={() => {
                    console.log("스니커즈 리스트" , sneakersList)}} >버튼</button>
        </div>
    )
}

export default EtcPage
