import React , {Component} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

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
  render(){
    console.log(this.state.githubUser);
    return (
      <div>  
        <SearchForm onSearch = {this.performSearch}/> 
      </div>
    )
  }
  
}

export default App;
