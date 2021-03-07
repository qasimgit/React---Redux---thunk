import "./App.css";
import { Provider } from 'react-redux'
import store from "./store/reducers";
import Users from "./components/Users";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux thunk</h1>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
