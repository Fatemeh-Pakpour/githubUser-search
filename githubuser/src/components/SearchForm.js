import React ,{Component} from 'react';

class SearchForm extends Component {
    render(){
        return(
            <form>
                <input
                    type ="search"
                    placeholder ="Enter the github account"
                    name ="search"
                />
                <button
                    type="submit"
                >Search</button>
            </form>
        )
    }
}

export default SearchForm;
