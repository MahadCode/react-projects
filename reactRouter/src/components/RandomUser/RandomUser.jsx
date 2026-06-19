import React from "react";
import { useLoaderData } from "react-router-dom";

function RandomUser() {
    const data = useLoaderData()
    const name = data.results[0].name.first + " " + data.results[0].name.last;
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="text-xl font-semibold">
                    Name: {name}
                </div>

                <img
                    src={data.results[0].picture.large}
                    className="w-40 h-40 rounded-full mt-4 object-cover"
                />
            </div>
        </>
    )
}
export default RandomUser

export const githubLoader = async () => {
    const respone = await fetch("https://randomuser.me/api/")
    return respone.json()
}

