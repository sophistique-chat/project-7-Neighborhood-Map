import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Nav from './Nav.js'
import escapeRegExp from 'escape-string-regexp'
import Marker from './Marker'


class Map extends Component {
  
  static defaultProps = {
    center: {
      lat: 55.755279,
      lng: 37.622144
    },
    zoom: 11,
    markers: [
      {
        lat: 55.763636,
        lng: 37.592415,
        name: 'Patriarch Ponds',
        id: '4bb41c28f187a593f1e913f8',
        alt:'Patriarch Ponds',
        wikiAlt:'Patriarch Ponds',
        pageid: '2545621'
      },
      {
        lat: 55.728365,
        lng: 37.601291,
        name: 'Gorky Park',
        id: '4bdd5f27f219c9b6bb751210',
        alt:'Gorky Park (Moscow)',
        wikiAlt:'Gorky Park (Moscow)',
        pageid: '1745420'
      },
      {
        lat: 55.670979,
        lng: 37.6697199,
        name: 'Kolomens-koje',
        id: '4b827a36f964a52098d430e3',
        alt:'Kolomenskoje',
        wikiAlt:'Kolomenskoye',
        pageid: '429400'
      },
      {
        lat: 55.74875188700002,
        lng: 37.54034,
        name: 'Moscow-City',
        id: '4ca2e5f8c1f1ef3b9c4e8ca4',
        alt:'Moscow International Business Center',
        wikiAlt:'Moscow International Business Center',
        pageid: '4414089'
      },
      {
        lat: 55.8268157,
        lng: 37.6372551,
        name: 'VDNKh',
        id: '4e4aab0f62e13240b700e034',
        alt:'VDNKh (Russia)',
        wikiAlt:'VDNKh (Russia)',
        pageid: '2494109'
      },
      {
        lat:  55.715762,
        lng:37.553716,
        name: 'Luzhniki Stadium',
        id:'4bb733c646d4a593732cc7c0',
        alt:'Luzhniki Stadium',
        wikiAlt:'Luzhniki Stadium',
        pageid: '400814'
      },
      {
        lat: 55.792166,
        lng:37.763266,
        name: 'Izmaylovo Kremlin',
        id:'4db876a641599a0121e12515',
        alt:'Izmaylovo Kremlin',
        wikiAlt:'Izmaylovo Estate',
        pageid:'19423474'
      },
      {
        lat:55.819682,
        lng:37.611663,
        name: 'Ostankino Tower',
        id:'4c04bd8c0d0e0f47b259049a',
        alt:'Ostankino Tower',
        wikiAlt:'Ostankino Tower',
        pageid:'358731'
      },
      {
        lat:55.7343014,
        lng:37.5151558,
        name: 'Park Pobedy',
        id:'4bdc9716afe8c9b689235085',
        alt:'Victory Park',
        wikiAlt:'Poklonnaya Hill',
        pageid:'2489566'
      },
      {
        lat:55.75393,
        lng:37.620795,
        name: 'Red Square',
        id:'4bb3345942959c74d79d212c',
        alt:'Red Square',
        wikiAlt:'Red Square',
        pageid:'66931'
      },
    ]
  }

  state = {
    search: '',
    venues: [],
    noModal: {opacity: '0'}
  }

  componentDidMount(){
    this.InitFourSquare()
  }

  /* -----------  ----------- */
  /*idea source: https://github.com/riceball1/google-foursquare/blob/master/src/components/App.js */
  InitFourSquare() {
    const CLIENT_ID = 'YOUR-CLIENT-ID'
    const CLIENT_SECRET = 'YOUR-CLIENT-SECRET'
    const DATE = '20180410'
    const RADIUS_M = 500
    const SEARCH_RESULTS = 1;
    this.props.markers.map((marker)=>
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${marker.lat},${marker.lng}
    &limit=${SEARCH_RESULTS}&radius=${RADIUS_M}&query=${marker.alt}
    &description&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${DATE}&locale=en`)
    .then((res) => {
        return res.json();
    })
    .catch('error')
    .then((res) => {
        this.setState({venues:[...this.state.venues, res]})
    })
    )
  }
  /* ----------- END REQUEST FOURSQUARE INFO ----------- */

  /* ----------- IMPLEMENT SEARCH ----------- */
  searchedPlaces = (search) => {
    this.setState({search: search.trim()})
  }

  clearSearch = () => {
    this.setState({search:''})
  }

  render() {
    const { search } = this.state
    const { markers } = this.props
    let filteredPlaces

    if(search) {
      const match = new RegExp(escapeRegExp(search), 'i')
      filteredPlaces = this.props.markers.filter((marker) => match.test(marker.name))
    } else {
      filteredPlaces = markers
      }
/* ----------- END IMPLEMENT SEARCH ----------- */   

    return (
/* ----------- INITIATE MAP ----------- */
/* Google Map React component at: https://www.npmjs.com/package/google-map-react */
      <div className="map" style={{ height: '95vh', width: '100%' }}>
        <GoogleMapReact 
          tabIndex="-1"
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ 
            key: "YOUR_GOOGLE_MAPS_KEY",
            language: 'en'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
        { 
          filteredPlaces
          .map((location) => (
            this.state.venues
            .map((venue, id)=>(
              (location.id === venue.response.venues[0].id) ?
                <Marker 
                  tabIndex="12" 
                  className={`${location.id } animated `}
                  venue={venue}
                  noModal={this.state.noModal}
                  key={id}
                  lat={location.lat}
                  lng={location.lng}
                  title={location.name}
                  text={location.name} />
               :
              ''
            )) 
          ))
        }
        </GoogleMapReact>
{/* ----------- END INITIATE MAP ----------- */}

{/* ----------- INITIATE NAVIGATION MENU ----------- */}
        <Nav
          venues={this.state.venues}
          markers = {this.props.markers}
          props={this.props}
          filteredPlaces={filteredPlaces}
          searchedPlaces={this.searchedPlaces}>
        </Nav>
{/* ----------- END INITIATE NAVIGATION MENU ----------- */}
      </div>
    )
  }
}

export default Map
