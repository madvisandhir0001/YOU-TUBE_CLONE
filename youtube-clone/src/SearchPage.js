import React from 'react';
import ChannelRow from "./ChannelRow"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import VideoRow from  "./VideoRow";

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel="T-Series"
            verified
            subs="185M"
            noOfVideos={15525}
            description="Music can change the world. T-Series is India's largest Music Label and Movie Studio, believes in bringing world close together ..."
            />
            <hr/>

            <VideoRow
            views="118K views"
            subs="185M"
            description="Presenting the video of the song Phisal Jaa Tu from the movie Haseen Dillruba The film stars Taapsee Pannu, Vikrant Massey, ..."
            timestamp="1 hour ago"
            channel="T-Series"
            title="Phisal Jaa Tu Song | Haseen Dillruba |Taapsee P, Vikrant M, Harshvardhan R| Amit Trivedi, Abhijeet S"
            image="https://img.youtube.com/vi/OmFRRtRAsA0/maxresdefault.jpg"/>
             <VideoRow
            views="77K views"
            subs="659K"
            description="T-Series wishes everyone a very Happy #WorldMusicDay ..!! Music is a language that doesn't speak in particular words. It speaks ..."
            timestamp="1 hour ago"
            channel="T-Series"
            title="Celebrating World Music Day 2021 - Music Dil Se Dil Tak | ♪Audio Jukebox♪ | T-Series"
            image="https://img.youtube.com/vi/Ot1yLadOz3k/maxresdefault.jpg"/>
             <VideoRow
            views="77K views"
            subs="4K"
            description="Gulshan Kumar and T-Series presents Bhushan Kumar's Kabira(कबीर के दोहे). Listen to Kabir Ke Dohe in the most melodious ..."
            timestamp="2 weeks ago"
            channel="T-Series"
            title="Jubin Nautiyal : Kabira (कबीर दोहे) | Raaj Aashoo | Lovesh Nagar | Bhushan Kumar"
            image="https://img.youtube.com/vi/AzOvsmpQVKM/maxresdefault.jpg"/>
            <VideoRow
            views="55M views"
            subs="4K"
            description="Gulshan Kumar and T-Series presents Bhushan Kumar's Bedardi Se Pyaar Ka  in the voice of Jubin Nautiyal, music by Meet Bros, ..."
            timestamp="1 week ago"
            channel="T-Series"
            title="Bedardi Se Pyaar Ka Song|Jubin N,Meet B,Manoj M|Gurmeet C,Sherine S,Kaashish V,Altamash F| Bhushan K"
            image="https://img.youtube.com/vi/y_RHQ4mBDKA/maxresdefault.jpg"/>
            <VideoRow
            views="131M views"
            subs="4K"
            description="Presenting Tulsi Kumar and Darshan Raval's new romantic song “Is Qadar”. The music of this latest song is directed by .."
            timestamp="2 months ago"
            channel="T-Series"
            title="Is Qadar (Official Video) Tulsi Kumar, Darshan Raval | Sachet-Parampara | Sayeed Quadri | Arvindr K"
            image="https://img.youtube.com/vi/TBlixHMv_GQ/maxresdefault.jpg"/>
             <VideoRow
            views="342M views"
            subs="4K"
            description="Gulshan Kumar and T-Series present Bhushan Kumar's ISHQ TERA song featuring Guru Randhawa and Nushrat Bharucha, The ..."
            timestamp="1 year ago"
            channel="T-Series"
            title="Guru Randhawa: Ishq Tera (Official Video) | Nushrat Bharucha | Bhushan Kumar | T-Series"
            image="https://img.youtube.com/vi/3KXZduvOfDo/maxresdefault.jpg"/>
            
        </div>
    );
}

export default SearchPage;
