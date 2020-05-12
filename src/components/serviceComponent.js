import React from "react"

export default class ServiceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index : this.props.data[0][0],
            imageid : this.props.data[0][1],
            title : this.props.data[0][2],
            shorttext : this.props.data[0][3],
            longtext : this.props.data[0][4],
            dot0class : "dot-red",
            dot1class : "dot-grey",
            dot2class : "dot-grey",
            dot3class : "dot-grey",
            dot4class : "dot-grey"
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.setdot = this.setdot.bind(this);
    }

    next() {
        if(this.state.index < 4){
            var i = parseInt(this.state.index) + 1;
        }else {
            var i = 0;
        }
        this.setState({index: this.props.data[i][0]});
        this.setState({imageid: this.props.data[i][1]});
        this.setState({title: this.props.data[i][2]});
        this.setState({shorttext: this.props.data[i][3]});
        this.setState({longtext: this.props.data[i][4]});
        switch (i) {
            case 0:
                this.setState({dot0class: "dot-red"});
                this.setState({dot4class: "dot-grey"});
                break;
            case 1:
                this.setState({dot1class: "dot-red"});
                this.setState({dot0class: "dot-grey"});
                break;
            case 2:
                this.setState({dot2class: "dot-red"});
                this.setState({dot1class: "dot-grey"});
                break;
            case 3:
                this.setState({dot3class: "dot-red"});
                this.setState({dot2class: "dot-grey"});
                break;
            case 4:
                this.setState({dot4class: "dot-red"});
                this.setState({dot3class: "dot-grey"});
                break;
        }
    }

    previous() {
        if(this.state.index > 0){
            var i = parseInt(this.state.index) - 1;
        }else {
            var i = 4;
        }
        this.setState({index: this.props.data[i][0]});
        this.setState({imageid: this.props.data[i][1]});
        this.setState({title: this.props.data[i][2]});
        this.setState({shorttext: this.props.data[i][3]});
        this.setState({longtext: this.props.data[i][4]});
        switch (i) {
            case 0:
                this.setState({dot0class: "dot-red"});
                this.setState({dot1class: "dot-grey"});
                break;
            case 1:
                this.setState({dot1class: "dot-red"});
                this.setState({dot2class: "dot-grey"});
                break;
            case 2:
                this.setState({dot2class: "dot-red"});
                this.setState({dot3class: "dot-grey"});
                break;
            case 3:
                this.setState({dot3class: "dot-red"});
                this.setState({dot4class: "dot-grey"});
                break;
            case 4:
                this.setState({dot4class: "dot-red"});
                this.setState({dot0class: "dot-grey"});
                break;
        }
    }

    setdot(ind) {
        this.setState({dot0class: "dot-grey"});
        this.setState({dot1class: "dot-grey"});
        this.setState({dot2class: "dot-grey"});
        this.setState({dot3class: "dot-grey"});
        this.setState({dot4class: "dot-grey"});
        switch (ind) {
            case 0:
                this.setState({dot0class: "dot-red"});
                break;
            case 1:
                this.setState({dot1class: "dot-red"});
                break;
            case 2:
                this.setState({dot2class: "dot-red"});
                break;
            case 3:
                this.setState({dot3class: "dot-red"});
                break;
            case 4:
                this.setState({dot4class: "dot-red"});
                break;
        }
        this.setState({index: this.props.data[ind][0]});
        this.setState({imageid: this.props.data[ind][1]});
        this.setState({title: this.props.data[ind][2]});
        this.setState({shorttext: this.props.data[ind][3]});
        this.setState({longtext: this.props.data[ind][4]});
    }

    render() {
        return(
            <div className="servicediv">
                <img className="arrow arrow-left" src="../previous.png" onClick={this.previous}/>
                <img className="arrow arrow-right" src="../next.png" onClick={this.next}/>
                <div className="servicetop">
                    <div className="servicetop-left">
                        <img src={this.state.imageid} alt="Immobilien"/>
                    </div>
                    <div className="servicetop-right">
                        <h1 id="serviceHeadline">{this.state.title}</h1>
                        <p>{this.state.shorttext}</p>
                        <div id="dotdiv" className="dotdiv">
                            <span className={this.state.dot0class} onClick={() => this.setdot(0)}/>
                            <span className={this.state.dot1class} onClick={() => this.setdot(1)}/>
                            <span className={this.state.dot2class} onClick={() => this.setdot(2)}/>
                            <span className={this.state.dot3class} onClick={() => this.setdot(3)}/>
                            <span className={this.state.dot4class} onClick={() => this.setdot(4)}/>
                        </div>
                    </div>
                </div>
                <div className="servicebottom">
                    <h1>Unser Service</h1>
                    <p>{this.state.longtext}</p>
                </div>
            </div>
        )
    }
}