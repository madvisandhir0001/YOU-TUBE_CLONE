import React from 'react'
import "./ChannelRow.css";
import {Avatar} from "@material-ui/core";
import  VerifiedIcon  from '@material-ui/icons/CheckCircleOutlineOutlined';


function ChannelRow({image,Channel,subs,noOfVideos,description,verified}) {
    return (
        <div className="channelRow">
        <Avatar className="channelRow__logo"
        alt={Channel} src={image} />
        <div className="channelRow__text">
            <h4>{Channel} {verified && <VerifiedIcon/>}</h4>
            <p> {subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
            </div>    
        </div>
    )
}

export default ChannelRow
