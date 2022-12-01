import './App.css';
import { connect } from 'react-redux';
import { action, actionCreator } from './redux/actions'

function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
      <h1>Contador!</h1>
      <h2>{countState}</h2>
      <button onClick={() => dispatch(actionCreator(5))}>Click!</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.countReducer.count,
});

export default connect(mapStateToProps)(App);
