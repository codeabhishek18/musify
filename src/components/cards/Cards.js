import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../section/Section";

const Cards= () =>
{
    const [topSongs, setTopSongs] = useState([]);
    const [newSongs, setNewSongs] = useState([]);
    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState('All');

    const fetchTop = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/albums/top";
        const response = await axios.get(url);
        setTopSongs(response.data);
    }

    const fetchNew = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/albums/new";
        const response = await axios.get(url);
        setNewSongs(response.data);
    }

    const fetchSongs = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/songs";
        const response = await axios.get(url);
        setSongs(response.data);
    }

    useEffect(() =>
    {
        fetchTop();
        fetchNew();
        fetchSongs();
    },[])

    const filteredGenre = genre === 'All' ? songs : [...songs].filter((song) => song.genre.label === genre);
    
    console.log(genre);

    return(
        <div>
           <Section title="Top Albums" data={topSongs} type="album"/>
           <Section title="New Albums" data={newSongs} type="album"/>
           <Section title="Songs" data={filteredGenre} type="song" setGenre={setGenre}/>
        </div>
    )
}

export default Cards;