import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 120) error = "texto muito grande!";
    return (
      <>
        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
          <br />
          <textarea name="estadoFavorito"
            value={value}
            onChange={handleChange} />
          <br />
          <span>
            {error ? error : ''}
          </span>
        </label>
      </>
    );
  };
}

export default EstadoFavorito;