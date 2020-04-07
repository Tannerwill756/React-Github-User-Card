import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import axios from 'axios';
import FollowerCard from './components/FollowerCard';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
        myInfo:{},
        followerInfo: []
    };
  }

  componentDidMount() {
      axios.get("https://api.github.com/users/Tannerwill756")
          .then( response => {
              console.log(response.data);
              this.setState({
                myInfo: response.data
              })                        
          })
      axios.get("https://api.github.com/users/Tannerwill756/followers")
          .then( response => {
              console.log(response.data);
              this.setState({
                followerInfo: response.data
              })                        
          })
  }

  render(){
    return (
      <div className="App">
        <h1>React Github User Cards</h1>
        <div className="allCards">
          <UserCard myData={this.state.myInfo}/>

          <h2>My followers</h2>
          <FollowerCard followerData={this.state.followerInfo} />
        </div>
      </div>
    )
  }
}

export default App;
