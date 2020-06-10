import React from "react";
import axios from "axios";
import UserCard from "./components/userCard";
import UserForm from "./components/userForm";

class App extends React.Component {
  state = {
    userData: [],
    userName: ""
  };

  componentDidMount() {
    console.log("component is running");
    axios
      .get("https://api.github.com/users/tay8472")
      .then((response) => {
        console.log(response.data);
        this.setState({ userData: response.data });
      })
      .catch((error) => console.log(error));
  }

  changer = event => {
    console.log(event.target.value);
    this.setState({userName: event.target.value})
  }

  fetcher = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
        console.log(response, "fetching here");
        this.setState({ userData: response.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log("component is rendering");
    return (
      <div className="App">
        <header className="App-header">
          <h1>SOME DID MOUNT STUFF</h1>
        </header>
        <div>
          <UserForm userName={this.state.userName} changer={this.changer} fetcher={this.fetcher}/>
        </div>
        <div>
          <UserCard cardData={this.state.userData} />
        </div>
      </div>
    );
  }
}

export default App;
