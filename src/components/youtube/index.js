import React from "react"

import YouTube from 'react-youtube'
//import getYoutubeSubtitles from '@joegesualdo/get-youtube-subtitles-node';


const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const Youtube = () => {
  const _onReady = (event) => {
    event.target.seekTo(0, false);
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
