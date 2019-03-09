import React from "react"

import YouTube from 'react-youtube'


const opts = {
  height: '500',
  width: '1000',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    cc_load_policy: 1,
    cc_lang_pref: 'en',
  }
};

const Youtube = () => {
  const _onReady = (event) => {
    event.target.seekTo(0, true);
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
