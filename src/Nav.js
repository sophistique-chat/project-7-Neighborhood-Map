import React, { Component } from 'react'
import List from './List'


class Nav extends Component {
  state={
    filteredPlaces:this.props.filteredPlaces,
    description:[],
    buttonClicked:false
  }

  componentDidMount(){
    this.InitWikiInfo()
  }
  
  /* ----------- REQUEST WIKIPEDIA INFO ----------- */
  InitWikiInfo() {  
    this.props.markers.map((marker)=>
      fetch(`http://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&prop=extracts|pageimages&piprop=original&imlimit=1&exlimit=1&explaintext&exintro&redirects=&pageids=${marker.pageid}`)
      .then((res) => {
        return (res.json()
        )
      })
      .catch('error')
      .then((res) => {
          this.setState({description:[...this.state.description, res.query.pages[marker.pageid]]})
      })
    )
  }
  /* ----------- END REQUEST WIKIPEDIA INFO ----------- */

  /* ----------- IMPLEMENT INTERACTION WITH THE MENU ----------- */
  /*idea source: https://stackoverflow.com/questions/27827234/reactjs-onkeypress-event-handling*/
  tabMenuOpen = (event) => {
    if(event.key === 'Enter'){
      this.onOpen()
    }
  }

  tabMenuClose = (event) => {
    if(event.key === 'Enter'){
      this.onClose()
    }
  }

  onClose=()=>{
    this.setState({buttonClicked:false})
  }

  onOpen=()=>{
    this.setState({buttonClicked:true})
  }
  /* ----------- END IMPLEMENT INTERACTION WITH THE MENU ----------- */

  render() {
    return (
      <div>   
        {
          this.state.buttonClicked===true ?
            <nav className="nav">
              <div>
                <span
                  tabIndex="10"
                  aria-label="Close"
                  role='button' aria-expanded="true"
                  onClick={this.onClose}
                  onKeyPress={this.tabMenuClose}
                  className="close">&times;</span>
                <input 
                  tabIndex="10"
                  role="search" 
                  className="input" 
                  placeholder = "Search"
                  type="text"
                  value={this.props.search}
                  onChange={(event) => this.props.searchedPlaces(event.target.value)}
                />
                <ul tabIndex="10" role="group">
                  {
                    this.props.filteredPlaces
                    .map((marker) => (
                      this.state.description
                      .map((place)=>(
                        (marker.wikiAlt === place.title) ?
                          (this.props.venues
                          .map((venue, id)=>(
                            (marker.id === venue.response.venues[0].id ) ?
                              (<List 
                                  filteredPlaces={this.props.filteredPlaces}
                                  place={place}
                                  venue={venue}
                                  placeId={marker.id}
                                  venueId={venue.response.venues[0].id}
                                  key={id}
                                  title={marker.name}
                                  text={marker.alt} />)
                            : ''
                          )) 
                          )
                        : ''
                      ))
                    ))
                  }
                </ul>
              </div>
            </nav>
          :
            <nav className="nav-closed">
              <div 
                  tabIndex="10"
                  role='button'
                  aria-label="Open"
                  aria-expanded="false"
                  onClick={this.onOpen}
                  onKeyPress={this.tabMenuOpen}
                  className="ham-icon">
                <div className='hamburger'></div>
                <div className='hamburger'></div>
                <div className='hamburger'></div>
              </div>
            </nav>
        }
      </div> 
    )
  }
}
  
export default Nav;