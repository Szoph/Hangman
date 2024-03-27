import React from 'react'
import {useEffect} from "react";


const Leaderboard: React.FC<{showModal: boolean, points: number, username: string}> = ({showModal, points, username}) => {

  return (
    <div className="leaderboard__card-container">
       <p className="leaderboard__username">Username: <strong>{username}</strong></p>
        <p className="leaderboard__points">Points: <strong>{points}</strong></p>

    </div>
  )
}

export default Leaderboard