import React, { Component } from 'react'


class Marker extends Component {
    state={
        noModal:this.props.noModal,
        modal:{opacity: '1'},
        locationClicked:false
    }
/* ----------- IMPLEMENT INTERACTION WITH MARKERS ----------- */
    onMouseOff=()=>{
        if( this.state === {locationClicked:true}) {
            this.setState({locationClicked:false})
        } else {
            this.setState({locationClicked:false})
        }
    }

    onMarkerClick=(e)=>{
        if( this.state === {locationClicked:false}) {
            this.setState({locationClicked:true})
        } else {
            this.setState({locationClicked:true})
        }
    /*idea source: https://stackoverflow.com/questions/38795892/check-for-existence-of-classes-on-click-react*/
        if(e.target.classList.contains('bounce')) {
            this.setState({locationClicked:false})
        }
    }

    onClose=()=>{
        this.setState({locationClicked:false})
    }
/* ----------- END IMPLEMENT INTERACTION WITH MARKERS ----------- */

    render() {
        return (
            <div className={this.props.className}>
                {  
                    this.state.locationClicked  ?
                        <div>
                            <div 
                                className={`${this.props.className} bubble`}
                                key={this.props.key}
                                style={this.state.modal}
                            >
                                <span onClick={this.onClose} className="close">&times;</span>
                                <div className="address">
                                    <span><b>{this.props.venue.response.venues[0].name.slice(0,50)}</b></span>
                                    <div className="topName"></div>
                                <br/>
                                    {this.props.venue.response.venues[0].categories[0].name}
                                    <div className="topName"></div>
                                <br/>
                                    {this.props.venue.response.venues[0].location.address}
                                <br/>
                                    {this.props.venue.response.venues[0].location.formattedAddress[1]}
                                <br/>
                                    {this.props.venue.response.venues[0].location.country}
                                </div>                        
                            </div>
                            <div></div>
                            <div 
                                className={`${this.props.className} marked`}
                                onMouseLeave={this.onMouseOff}
                                onClick={this.props.onMarkerClick}
                                style={this.props.style}
                            >
                                <div className="markerName">
                                {this.props.text}
                                </div>
                            </div>
                        </div>   
                    :
                        <div className={this.props.className}>
                            <div 
                                className={`${this.props.className} unmarked`}
                                onClick={this.onMarkerClick}
                                style={this.props.style}
                            >
                                <div className="markerName">
                                {this.props.text}
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default Marker