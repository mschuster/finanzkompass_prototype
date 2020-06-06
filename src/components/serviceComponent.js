import React from "react"

export default class ServiceComponent extends React.Component {
  constructor(props) {
    super(props)
    if(typeof this.props.data[1] == "undefined"){
        this.props.data[1] = 0;
    }
    this.state = {
      index: this.props.data[1],
      imageid: this.props.data[0][0][1],
      title: this.props.data[0][0][2],
      shorttext: this.props.data[0][0][3],
      longtext: this.props.data[0][0][4],
      array: this.props.data[0],
      dotclasses: ["dot-red", "dot-red", "dot-grey", "dot-grey", "dot-grey"],
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.setdot = this.setdot.bind(this)
    this.start = this.start.bind(this)
    console.log(this.state);
    this.start()
  }

  start() {
    var indi = this.state.index
    if (typeof indi !== "undefined") {
      this.imageid = this.state.array[indi][1]
      this.title = this.state.array[indi][2]
      this.shorttext = this.state.array[indi][3]
      this.longtext = this.state.array[indi][4]
      this.setdot(indi)
    } else {
      this.index = 0
    }
  }

  next() {
    if (this.state.index < 4) {
      var i = parseInt(this.state.index) + 1
    } else {
      var i = 0
    }
    this.index = i
    this.state.dotclasses[0] = "dot-grey"
    this.state.dotclasses[1] = "dot-grey"
    this.state.dotclasses[2] = "dot-grey"
    this.state.dotclasses[3] = "dot-grey"
    this.state.dotclasses[4] = "dot-grey"
    this.state.dotclasses[i] = "dot-red"
  }

  previous() {
    var i
    if (this.state.index > 0) {
      i = parseInt(this.state.index) - 1
    } else {
      i = 4
    }
    this.index = i
    this.state.dotclasses[0] = "dot-grey"
    this.state.dotclasses[1] = "dot-grey"
    this.state.dotclasses[2] = "dot-grey"
    this.state.dotclasses[3] = "dot-grey"
    this.state.dotclasses[4] = "dot-grey"
    this.state.dotclasses[i] = "dot-red"
  }

  setdot(ind) {
    this.state.dotclasses[0] = "dot-grey"
    this.state.dotclasses[1] = "dot-grey"
    this.state.dotclasses[2] = "dot-grey"
    this.state.dotclasses[3] = "dot-grey"
    this.state.dotclasses[4] = "dot-grey"
    this.state.dotclasses[ind] = "dot-red"
    this.index = ind
  }

  render() {
    return (
      <div className="servicediv">
        <img
          className="arrow arrow-left"
          src="../previous.png"
          onClick={this.previous}
        />
        <img
          className="arrow arrow-right"
          src="../next.png"
          onClick={this.next}
        />
        <div className="servicetop">
          <div className="servicetop-left">
            <img src={this.state.array[this.state.index][1]} alt="Immobilien" />
          </div>
          <div className="servicetop-right">
            <h1 id="serviceHeadline">
              {this.state.array[this.state.index][2]}
            </h1>
            <p>{this.state.array[this.state.index][3]}</p>
            <div id="dotdiv" className="dotdiv">
              <span
                className={this.state.dotclasses[0]}
                onClick={() => this.setdot(0)}
              />
              <span
                className={this.state.dotclasses[1]}
                onClick={() => this.setdot(1)}
              />
              <span
                className={this.state.dotclasses[2]}
                onClick={() => this.setdot(2)}
              />
              <span
                className={this.state.dotclasses[3]}
                onClick={() => this.setdot(3)}
              />
              <span
                className={this.state.dotclasses[4]}
                onClick={() => this.setdot(4)}
              />
            </div>
          </div>
        </div>
        <div className="servicebottom">
          <h1>Unser Service</h1>
          <p>{this.state.array[this.state.index][4]}</p>
        </div>
      </div>
    )
  }
}
