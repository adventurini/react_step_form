import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {Input} from 'reactstrap';
import './places.css'

class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      targetaddress: {}
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => 
        console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

 toggle(suggestion) {
    console.log(suggestion, 555)
    // this.setState({
    //   address: suggestion
    // })
  }

  render() {
    console.log(this.state)
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          
          <div>
          {console.log(suggestions)}
          
              <div className='narrow centered'>
            <Input
              {...getInputProps({
                placeholder: 'Enter Address ...',
                className: 'location-search-input centered narrow',
              })}
            />
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                console.log(suggestion)
                const className = suggestion.active
                  ? 'suggestion-item--active' 
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  
                return (
                  <div 
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                  {suggestion.active 
                  ? this.toggle(suggestion)
                  : null}
                    <span >{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default Places;