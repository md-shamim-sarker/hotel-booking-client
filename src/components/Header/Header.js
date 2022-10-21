import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'rsuite';

const Header = () => {
    return (
        <div className='flex bg-slate-900 bg-opacity-50 text-white py-2'>
            <div className='flex w-4/5 mx-auto justify-between items-center'>
                <Link className='text-white text-3xl font-bold'>LOGO</Link>
                <div>
                    <button className='bg-blue-500'>Search</button>
                    <input type="text" />
                </div>
                <Link className='text-white'>Home</Link>
                <Link className='text-white'>Destination</Link>
                <Link className='text-white'>Blog</Link>
                <Link className='text-white'>Contact</Link>
                <Button appearance='primary'>Login</Button>
            </div>
        </div>
    );
};

export default Header;