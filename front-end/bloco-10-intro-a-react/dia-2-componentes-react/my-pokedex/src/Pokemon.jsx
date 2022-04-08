import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    // mesma coisa de:
    // const { pokemon: {name, type, averageWeight, image} } = this.props;

    return (
      <div className="pokemon-container">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <img className="pokemon-gif" src={image} alt={name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;