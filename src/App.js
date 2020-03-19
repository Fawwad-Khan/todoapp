import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  GithubAction,
  useSelector,
  shallowEqual,
  useDispatch
} from "./store/index";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    Dispatch(GithubAction.getUserInfo({ username: "fawwad-khan" }, null, null));
  }, []);

  const { githubUser, loader, error } = useSelector(
    ({ github }) => ({
      githubUser: github.user,
      loader: github.loader,
      error: github.error
    }),
    shallowEqual
  );

  const goto = path => History.push(path);

  const renderGithubUser = () => {
    if (loader) {
      return <h4>Loader......</h4>;
    }

    if (error) {
      return <b style={{ color: "red" }}>{error}</b>;
    }

    if (githubUser) {
      return <pre>{JSON.stringify(githubUser, null, 4)}</pre>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a href="#login" onClick={() => goto("/Login")}>
            Login using Class Component
          </a>
        </p>
        <p>
          <a href="#register" onClick={() => goto("/register")}>
            Resgiter using functional Component
          </a>
        </p>
      </header>
      <div className="github-info">
        <h3>Github User Info</h3>
        <hr />
        {renderGithubUser()}
      </div>
    </div>
  );
}

export default App;
