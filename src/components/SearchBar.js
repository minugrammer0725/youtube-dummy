import React from 'react'

export default class SearchBar extends React.Component {
    
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onSubmitEvent = event => {
        event.preventDefault();

        // TODO: Make sure we call 
        // callback from parent component. 
        this.props.onFormSubmit(this.state.term);   // callback to the App component. Child -> Parent. 
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitEvent} className='ui form'>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            value={this.state.term} 
                            type="text" 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}