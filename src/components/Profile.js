import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Profile Updated: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div class="row">
            <form class="col s3"> Edit Your Profile: <br /> 
                <label>Name:
                <input type='text' value={this.state.value} onChange={this.handleChange} ></input><br />                 
                </label>
                <label>Email:
                <input type='text' value={this.state.value} onChange={this.handleChange} ></input><br /> 
                </label>
                <label>Address:
                <input type='text' value={this.state.value} onChange={this.handleChange} ></input><br /> 
                </label>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right">>></i>
                </button>
                </form>
            </div>
        )
    }
}

export default Profile;