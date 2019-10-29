import React ,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin} from '@fortawesome/free-solid-svg-icons';

class SearchForm extends Component {
    state = {
        textSearch : " ",
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const search = event.target.search.value.trim();
        if (!search.length) {
            alert("Please Enter The Github User");
            } else {
                this.props.onSearch(this.query.value);
            event.target.reset();
            }    
    }
    onSearchChange = (event)=>{
        this.setState({textSearch:event.target.value})
    }
    
    
    render(){
        console.log(this.state.textSearch);
        return(
            <form>
                <input
                    type ="search"
                    placeholder ="Enter the github account"
                    name ="search"
                    ref ={(input)=>this.query = input}
                />
                <button
                    type="submit"
                ><FontAwesomeIcon icon= {faSearchengin} /></button>
            </form>
        )
    }
}

export default SearchForm;
