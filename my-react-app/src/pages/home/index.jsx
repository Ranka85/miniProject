import { useState, useEffect } from "react"
import { Card } from "../../components/Card"


export const HomePage = () => {
    const [characters, setCharacters] = useState([])

    const handleFetchCharacters = async () => {
        try {
            const response = await fetch("https://eaf1-89-188-33-34.ngrok-free.app/adds?format=json",{responseType: 'json'})
            const data = await response.json()

            setCharacters(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchCharacters()
    }, [])

    return <>
        
            {characters.map(({title,description,id}, index) => <Card key={index} title={title} description={description} id={id} />)}
        
        {/* {characters.map(({title,board,pages}, index) => <Card key={index} title={title} body={body} id={id} />)} */}
    </>
}
