/* eslint-disable no-sequences*/
import React, { Component } from 'react'



class List extends Component {
    state={
        locationClicked:false
    }
/* ----------- IMPLEMENT INTERACTION WITH THE LIST OF PLACES ----------- */
    grabMarker=()=>{
        let myMarker = document.getElementsByClassName(`${this.props.placeId}`)
        myMarker[[0],[1],[2]].classList.toggle('bounce')
    }

    /*idea source: https://stackoverflow.com/questions/27827234/reactjs-onkeypress-event-handling*/
    tabPlaceClose = (event) => {
        if (event.key === 'Enter'){
            this.onClose()
        }
    }

    tabPlaceOpen = (event) => {
        if (event.key === 'Enter'){
            this.onItemClick()
        }
    }

    onItemClick=()=>{ 
        this.grabMarker()
        if( this.state === {locationClicked:false}) {
            this.setState({locationClicked:true})
        } else {
            this.setState({locationClicked:true})
            this.setState({noStyle:this.props.noStyle})
        }  
    }

    onClose=()=>{
        this.setState({locationClicked:false})
        this.grabMarker()
    }
/* ----------- END IMPLEMENT INTERACTION WITH THE LIST OF PLACES ----------- */

    render() {
        return (
            <li key={this.props.index}>
                    {
                        this.state.locationClicked ?
                            <div>
                                <div 
                                    aria-expanded="true"
                                    type="text"
                                    className="place-open"
                                >
                                    <span 
                                        tabIndex="11"
                                        onClick={this.onClose}
                                        onKeyPress={this.tabPlaceClose}
                                        className="close"
                                    >&times;
                                    </span>
                                {this.props.text}
                                </div>
                                <div className="placeInfo">
                                    <img 
                                        className="image"
                                        alt={this.props.text}
                                        src={`${this.props.place.original.source}`}
                                    />
                                    <div className="placeText">
                                    {this.props.place.extract}
                                    </div>
                                </div>
                            </div>
                        :
                            <div 
                                aria-expanded="false"
                                type="text"
                                className="place"
                            >
                                <span 
                                    tabIndex="11"
                                    onClick={this.onItemClick}
                                    onKeyPress={this.tabPlaceOpen}
                                    className="close"
                                >&equiv;
                                </span>
                            {this.props.text}
                            </div>
                    }
            </li>
        )
    }
}

export default List