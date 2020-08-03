import React, {Component} from "react"

export default class DigitalClicker extends Component {
  constructor(props) {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handledOnClick = e => {
    console.log(this.state)
    this.setState(prev => { return { timesClicked: prev.timesClicked + 1 } })
  }
  render() {
    return (
      <button onClick={this.handledOnClick}>{this.state.timesClicked}</button>
    )
  }
}