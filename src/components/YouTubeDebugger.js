// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }
  bit = (e) => {
    const video = this.state.settings.video;
    this.setState({settings: {bitrate: 12, video }})
  }

  res = (e) => {
    const bitrate = this.state.settings.bitrate;
    this.setState({settings: {bitrate, video: {resolution: '720p'}}})
  }

  render() {
    const {bit, res} = this;
    return(
      <div>
        <button className="bitrate" onClick={bit}></button>
        <button className="resolution" onClick={res}></button>
      </div>
    );
  }
}