import React from 'react'

const SongRow = ({track="text"}) => {
    return (
        <div className="songRow">
            <img src="" alt="" />
            <div className="songRow__info" >
                <h1>{track.name}</h1>
            </div>
        </div>
    )
}

export default SongRow
