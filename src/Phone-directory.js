import React, { Fragment, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import { SubscriberCountContext } from './SubscriberCountContext';
import TotalSubscriberReducer from './TotalSubscriberReducer';
import { useDispatch } from 'react-redux';


export default function PhoneDirectory() {


    const [subscriberList, setSubscriberList] = useState([]);

   const [state, dispatchToTotalSubscribers] = useReducer(TotalSubscriberReducer, { count: 0 })

const dispatch = useDispatch();



    //API call for home page

    async function loadData() {
        const input = await fetch("http://localhost:7081/contacts")
        const data = await input.json()

        dispatch({"type":"SET_SUBSCRIBERS", payload:data})
        dispatchToTotalSubscribers({"type":"UPDATE_COUNT", payload:data.length})
        setSubscriberList(data)

    }

    useEffect(() => {
        loadData();
    }, [])


    //Add function

    async function addSubscriberHandler(newSubscriber) {

        const rawResponse = await fetch("http://localhost:7081/contacts/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSubscriber)
        })

        const data = await rawResponse.json();
        loadData();

    }



    //Delete function

    const deleteSubscriberHandler = useCallback(async (subscriberId) => {


        const rawresponse = await fetch("http://localhost:7081/contacts/" + subscriberId, { method: "DELETE" })
        const data = await rawresponse.json()
        loadData();

    }, [subscriberList])



    return (

        <Fragment>
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                    <Route exact path='/add' render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={(newSubscriber) => addSubscriberHandler(newSubscriber)} />} />
                </div>
            </Router>

            <SubscriberCountContext.Provider value={state.count}>

                <Footer>

                </Footer>

            </SubscriberCountContext.Provider>
        </Fragment>


    )
}
