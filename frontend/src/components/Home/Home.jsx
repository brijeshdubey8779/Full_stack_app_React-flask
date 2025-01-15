import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='min-h-screen p-0 flex justify-center items-center bg-slate-600'>
            <div className='max-w-4xl bg-slate-500 h-52 '>
                <h1 className='text-3xl font-bold text-center'>Welcome, I'm a developer</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis atque in dignissimos beatae, similique molestiae quis veniam id quae maiores est earum eum nam libero illum pariatur. Molestias, repellat voluptates.</p>
                <div className='flex justify-center '>
                    <Link to="/patientdetails" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded'>Get Started</Link>
                    <Link to="#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded'>View Previous</Link>
                </div>
            </div>
        </div>
    )
}

export default Home