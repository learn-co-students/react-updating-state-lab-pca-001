import React, {Component} from "react"

export default class YoutubeDebugger extends Component {
  constructor(props) {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleResolutionOnClick = e => {
    this.setState(prev => {
      return {
        ...prev,
        settings: {
          ...prev.settings,
          video: {resolution: "720p"}
        }
      }
    })
  }
  handleBitrateOnClick = e => {
    this.setState(prev => {
      return {
        ...prev,
        settings: {
          ...prev.settings,
          bitrate: 12
        }
      }
    })
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateOnClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionOnClick}>Resolution</button>
      </div>
    )
  }
}