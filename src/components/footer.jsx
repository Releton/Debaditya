import React from 'react'
import { getSocialIcons } from './navbar'

function Footer() {
    return (
        <div className='w-[100%]'>

            <div className="flex bg-secondaryDark min-h-[200px] items-center justify-evenly px-18 mt-3 text-primary">
                {window.innerWidth > 1024?getSocialIcons("fa-4x"):getSocialIcons("fa-2x")}

            </div>
            <div className='bg-secondaryDark flex justify-center'>
                {'©Debaditya Mondal ' + new Date().getFullYear()}
            </div>

        </div>
    )
}
export default Footer