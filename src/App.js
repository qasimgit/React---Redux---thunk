import "./App.css";
import { Provider } from 'react-redux'
import store from "./store/reducers";
import Users from "./components/Users";
import Form from "./components/Form";


function App() {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <h1>React Redux thunk</h1>
        <Form />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
