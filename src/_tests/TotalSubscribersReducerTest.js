import TotalSubscriberReducer from "../TotalSubscriberReducer";
test("Testing TotalSubscriberReducer",()=>{

    const action = {"type":"UPDATE_COUNT",payload:30};
    const actualResult = TotalSubscriberReducer({},action);
    const expectedResult = {"count":23};

    expect(actualResult).toBe(expectedResult);
})