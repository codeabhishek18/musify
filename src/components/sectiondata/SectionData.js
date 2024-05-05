import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../section/Section";

const SectionData = () =>
{
    const [topSongs, setTopSongs] = useState([]);
    const [newSongs, setNewSongs] = useState([]);
    const [songs, setSongs] = useState([]);

    const getTopAlbums = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/albums/top";
        const response = await axios.get(url);
        setTopSongs(response.data);
    }

    const getNewAlbums = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/albums/new";
        const response = await axios.get(url);
        setNewSongs(response.data);
    }

    const getSongs = async () =>
    {
        const url = "https://qtify-backend-labs.crio.do/songs";
        const response = await axios.get(url);
        setSongs(response.data);
    }

    useEffect(() =>
    {
        getTopAlbums();
        getNewAlbums();
        getSongs();
    },[])

    return(
        <div>
           <Section title="Top Albums" data={topSongs} type="album"/>
           <Section title="New Albums" data={newSongs} type="album"/>
           <Section title="Songs"      data={songs}    type="song"/>
        </div>
    )
}

export default SectionData;