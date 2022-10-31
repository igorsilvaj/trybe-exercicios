import React from "react"

class PalavraChaveFavorita extends React.Component {
  render() {
    const {value, handleChange} = this.props;
    return (
      <select
        id="palavraChaveFavorita"
        name="palavraChaveFavorita"
        value={value} onChange={handleChange}
      >
        <option value="Xablau">Xablau</option>
        <option value="State">State</option>
      </select>
    );
  };
}

export default PalavraChaveFavorita;
