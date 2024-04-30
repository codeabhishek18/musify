import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../cards/Cards";

const Caroussel = () =>
{
    const [topSongs, setTopSongs] = useState([]);
    const [newSongs, setNewSongs] = useState([]);
    const [songs, setSongs] = useState([]);

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

    return(
        <div>
           <Cards title="Top Albums" data={topSongs} type="album"/>
           <Cards title="New Albums" data={newSongs} type="album"/>
           <Cards title="Songs" data={songs} type="song"/>
        </div>
    )
}

export default Caroussel;