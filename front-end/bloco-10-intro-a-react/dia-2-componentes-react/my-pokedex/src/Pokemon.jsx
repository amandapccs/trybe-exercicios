import React from "react";

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

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

export default Pokemon;