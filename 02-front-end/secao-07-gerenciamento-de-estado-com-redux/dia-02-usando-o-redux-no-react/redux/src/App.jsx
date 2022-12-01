import { connect } from 'react-redux';
import { actionCreator, clickCounter } from "./redux/actions"

function App(props) {
  const { countState, clicksCount, dispatch } = props;
  const dispatchAll = (add = 1) => {
    dispatch(actionCreator(add));
    dispatch(clickCounter());
  }
  return (
    <div className="App">
      <h1>
        Contador
      </h1>
      <h2>{countState}</h2>
      <button onClick={() => dispatchAll(1)}>Aumentar 1</button>
      <button onClick={() => dispatchAll(5)}>Aumentar 5</button>
      <h3>Número de clicks: {clicksCount}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);
