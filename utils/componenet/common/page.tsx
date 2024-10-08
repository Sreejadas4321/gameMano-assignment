import React from 'react';
import './page.css';
interface GameData {
  name: string;
  launchDate: string;
  description: string;
  platforms: string[];
  rating:number;
  price: number;
}

interface CommonProps {
  data: GameData;
}

export const Common : React.FC<CommonProps> =  ({ data }) => {
  let starArr = new Array(Math.floor(data.rating || 4)).fill(1)  
  return (
    <div className="home-container">
      <div className="flex items-center justify-end pr-2">
      <div className="flex flex-col ">
        <span className="friend-count">40 of your friends are playing</span>
        <div className="flex items-center justify-end]">
          
        {starArr.map((_, index) => (
            <p key={index}>⭐</p>
          ))}
        </div>
        </div>
      </div>
      <div className="game-title">{data.name}</div>
      <div className="release-date">RELEASE DATE: {data.launchDate}</div>
      <p className="description">
       {data.description}
      </p>
      <div className="actions">
        <button className="play-button">Play Now</button>
        <div className="price">Buy now for 40$ only</div>
      </div>
      <div className="availability">
        Available on: <span className="platform">iOS</span>{' '}
        <span className="platform">Windows</span>
      </div>
     
    </div>
  );
};
