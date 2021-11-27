
function add(a,b){
    return a+b;
}

test("Addition of 2 numbers",()=>{

    const actualResult = add(5,10);
    const expectedResult = 15;
expect(actualResult).toBe(expectedResult);  

})