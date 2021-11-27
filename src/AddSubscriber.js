import React, { Component, useState } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link, useHistory } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';



export default function AddSubscriber({ addSubscriberHandler }) {


    const [addSubscriberForm, setAddSubscriberForm] = useState({
        id: 0,
        name: '',
        phone: ''
    });

    const { name, phone } = addSubscriberForm;

    const history = useHistory();



    function inputChangeHandler(e) {
        const state = addSubscriberForm;
        state[e.target.name] = e.target.value;
        setAddSubscriberForm({ ...state });

    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        addSubscriberHandler(addSubscriberForm);
        setAddSubscriberForm({ id: 0, name: '', phone: '' });
        history.push("/");
    }




    return (
        <div>
            <Header heading="Add Subscriber" />
            <div className="component-body-container">
                <Link to="/"> <button className="custom-btn">Back</button></Link>

                <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>

                    <TextValidator
                        type="text" id="name"
                        label="Name"
                        name="name" onChange={inputChangeHandler}
                        value={name}
                        validators={['required']}
                        errorMessages={['Name is required']}
                    >
                    </TextValidator>

                    {/* <label htmlFor="name" className="label-control">Name</label><br />
                    <input type="text" id="name" className="input-control" name="name" onChange={inputChangeHandler}></input> */}

                    <br /><br />
                    <TextValidator
                        type="text" id="phone"
                        label="Phone"
                        name="phone" onChange={inputChangeHandler}
                        value={phone}
                        validators={['required']}
                        errorMessages={['Phone is required']}
                    >
                    </TextValidator>



                    {/* <label htmlFor="phone" className="label-control">Phone</label><br />
                    <input type="text" id="phone" className="input-control" name="phone" onChange={inputChangeHandler}></input> */}

                    <br /><br />

                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added </span><br />
                        <span className="subscriber-info">Name: {name}</span><br />
                        <span className="subscriber-info">Phone: {phone}</span>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </ValidatorForm>

            </div>
        </div>
    )

}


// class AddSubscriber extends Component {

//     constructor() {
//         super();
//         this.state = {
//             id: 0,
//             name: '',
//             phone: ''
//         }

//     }

//     inputChangeHandler = (e) => {
//         const state = this.state;
//         state[e.target.name] = e.target.value;
//         this.setState(state);

//     }

//     onFormSubmitted = (e) => {
//         e.preventDefault();
//         this.props.addSubscriberHandler(this.state);
//         this.setState({ id: 0, name: '', phone: '' });
//         this.props.history.push("/");
//     }

//     render() {

//         const { name, phone } = this.state;

//         return (
//             <div>
//                 <Header heading="Add Subscriber" />
//                 <div className="component-body-container">
//                     <Link to="/"> <button className="custom-btn">Back</button></Link>

//                     <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
//                         <label htmlFor="name" className="label-control">Name</label><br />
//                         <input type="text" id="name" className="input-control" name="name" onChange={this.inputChangeHandler}></input> <br /><br />
//                         <label htmlFor="phone" className="label-control">Phone</label><br />
//                         <input type="text" id="phone" className="input-control" name="phone" onChange={this.inputChangeHandler}></input> <br /><br />

//                         <div className="subscriber-info-container">
//                             <span className="subscriber-to-add-heading">Subscriber to be added </span><br />
//                             <span className="subscriber-info">Name : {name}</span><br />
//                             <span className="subscriber-info">Phone : {phone}</span>
//                         </div>
//                         <button type="submit" className="custom-btn add-btn">Add</button>
//                     </form>

//                 </div>
//             </div>
//         )
//     }
// }

// export default AddSubscriber;