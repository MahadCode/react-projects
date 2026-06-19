import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();

    return (
        <>
        <div className="bg-red text-center">User Id: {userid}</div>
        </>
    )

}

export default User