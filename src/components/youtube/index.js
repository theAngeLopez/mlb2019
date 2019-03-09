import React from "react"

import YouTube from 'react-youtube'

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const Youtube = () => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  };

  return (
    <div className="youtube">
      <YouTube
        videoId="-BmYiHHOeXc"
        opts={opts}
        onReady={_onReady}
      />
    </div>
  )
};

export default Youtube
