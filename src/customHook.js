    import { useState, useEffect } from "react";

export async function downloadLoactionData() {
    const rawResponse = await fetch("https://ipapi.co/json");
    const response = await rawResponse.json();
    return response;
}



export const useLocationDetail = () =>{
    const [locationDetail, setLocationDetail] = useState({ "city": "", "region": "", "country": "" });

    useEffect(() => {
        async function updateLocation() {
            const response = await downloadLoactionData();
            setLocationDetail(response);
        }
        updateLocation();

    }, []);
    return locationDetail;
}