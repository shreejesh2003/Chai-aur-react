import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shreejesh2003')
    //         .then((res) => res.json())  // Correctly parsing the response to JSON
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);
    const data=useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            Github Followers: {data ? data.followers : 'Loading...'}
            <img
                src={data? data.avatar_url : ''}
                alt='Profile Pic'
                className='w-20 h-20 rounded-full'
            />
        </div>
    );
}

export default Github;

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/shreejesh2003')
    return response.json()
}