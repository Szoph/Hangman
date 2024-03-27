import React from 'react'
import {useEffect} from "react";


const Leaderboard: React.FC<{showModal: boolean, points: number, username: string}> = ({showModal, points, username}) => {

  return (
    <div className="leaderboard">
        <div className>
            <p>Name: {username}</p>
            <p>Points: {points}</p>
        </div>

    </div>
  )
}

export default Leaderboard