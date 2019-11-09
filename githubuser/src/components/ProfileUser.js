import React, { Component } from 'react';
import axios from 'axios';

class ProfileUser extends Component {
    state = {
        profile:{}
    }
    UserPage = ()=>{
        axios
        .get(`https://api.github.com/users/${props.userAccount}`)
        .then(response => {
          this.setState({
            profile: response.data
          });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
      }
      componentDidMount() {
        this.UserPage();
      }
    render() {
        console.log(this.state.profile);
        return (
            <div>
                
            </div>
        );
    }
}

export default ProfileUser;