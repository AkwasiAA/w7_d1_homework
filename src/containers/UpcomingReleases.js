import React, { useState } from 'react';
import ReleaseList from '../components/ReleaseList';


const UpcomingReleases = () => {

    const [films, setFilms] = useState([
        {id: 1, name: "Candyman", url: "https://www.imdb.com/title/tt9347730/?ref_=rlm" },
        {id: 2, name: "Venom: Let There Be Carnage", url: "https://www.imdb.com/title/tt7097896/?ref_=rlm" },
        {id: 3, name: "Top Gun: Maverick", url: "https://www.imdb.com/title/tt1745960/?ref_=rlm" },
        {id: 4, name: "The Matrix 4", url: "https://www.imdb.com/title/tt10838180/?ref_=rlm" },
        {id: 5, name: "Black Panther 2", url: "https://www.imdb.com/title/tt9114286/?ref_=rlm"}
    ])

    return (
        <>
            <h1>Upcoming Releases!!</h1>
            <ReleaseList films={films} />
            <button><a href="https://www.imdb.com/calendar/?region=gb"><h2>View more Upcoming Releases</h2></a></button>
        </>
    )
}

export default UpcomingReleases;