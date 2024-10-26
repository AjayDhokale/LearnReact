import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ajaydhokale')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    const data = useLoaderData()

    return (
        <div className=' bg-gray-700 p-20 text-white text-xl font-bold flex justify-center'>

                <img src={data.avatar_url} alt='Profile Photo' className='rounded-full border-4' />
                    
                <div className='mx-10 p-10  tracking-widest border-s-4'>
                    <div className='m-4 '>Github Name : {data.name}</div>
                    <div className='m-4 '>Github Login : {data.login}</div>
                    <div className='m-4 '>Github Id : {data.id}</div>
                    <div className='m-4 '>Github Followers : {data.followers}</div>
                    <div className='m-4 '>Github Following : {data.following}</div>
                    <div className='m-4 '>Github Repositories : {data.public_repos}</div>
                </div>

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const reponse = await fetch('https://api.github.com/users/ajaydhokale')
    return reponse.json()
}