import React, { useState, useEffect } from 'react';
import CustomPagination from '../components/layout/CustomPagination';
import Memes from '../components/Memes';
import axios from 'axios';

function HomePage() {
    const [memes, setMemes] = useState([]);
    const [page, setPage] = useState(0);
    const [fade, setFade] = useState('top');

    async function getMemes() {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
    }

    useEffect(() => {
        getMemes();
    }, []);

    return (
        <main>
            <Memes fade={fade} memes={memes} page={page} />
            <div onClick={() => setFade('bottom')}>
                <br></br>
                <CustomPagination page={page} setPage={setPage} />
                <br></br>
                <br></br>
            </div>
        </main>
    )
}

export default HomePage;
