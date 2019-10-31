import React , {Component} from 'react';
import axios from 'axios';
// import {Provider} from './Context';
import SearchForm from './SearchForm';
import GithubList from './GithubList';
// import GithubList from './GithubList';

class App extends Component {
  state = {
    githubUser : [],
    loading :true
  }
  performSearch =(query)=>{
    axios.get(`https://api.github.com/search/users?q=${query}`)
  .then(response => {
    this.setState({ 
      githubUser: response.data.items,
      loading :false
     });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  })
}
componentDidMount(){
  this.performSearch();
}
handelSearch = ()=> {
    this.setState(
      prevState => ({
        githubUs: prevState.githubUser.map(github=> github.login)
      })
    )
}
  render(){
    console.log(this.state.githubUser);
    return (
      // <Provider >
        <div>  
          <SearchForm onSearch = {this.performSearch}/> 
          <GithubList 
              data = {this.state.githubUser}
          // searchLogin = {this.state.handelSearch}
          />
        </div>
      // </Provider>
    )
  }
  
}

export default App;
