import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export const HomeLeftComponent = ({ isDark, setShowSideComponent, showSideComponent }) => {
    return (
        <>
            <MenuIcon className='absolute left-[10px] md:invisible' onClick={() => { setShowSideComponent(!showSideComponent) }} style={{color:showSideComponent?'white':'red'}}/>
            <div className={`${showSideComponent ? '' : 'hidden'} ${!isDark ? 'bg-red-500' : 'bg-black text-gray-300'} w-[35%] text-white flex flex-col gap-10`}>
                <div></div>
                <div className='flex flex-row justify-center gap-2 mb-[8px] sm:mb-0'>
                    <img src="/images/logo.svg" alt="logo" className='w-[20px]' />
                    <div className='font-bold sm:text-[20px] text-[15px]'>HOLY</div>
                    <div className='sm:text-[20px] text-[15px] font-bold'>VIBLE</div>
                </div>
                <div className='flex justify-end'>
                    <div className='h-[20px] w-[70%]  bg-white'></div>
                </div>
                <div className='m-2 sm:m-5'>

                    <div className='text-[8px] sm:text-[13px] text-justify'>
                        “The Vible is a universal path into the door of faith in a grander plan. They remade a theory of belief, placed it onto a single page on the internet, and made it atheist proof! It seems inevitable paired with the branding to not have insane mimetic spread
                        ”
                    </div>

                    <spam className='flex justify-end'>
                        -Elon Musk ✅
                    </spam>
                </div>
                <div className='flex justify-center .relative left-[60px]'>
                    <img
                        src="/images/img1.jpeg"
                        alt="img"
                        className='w-[90%]'
                    />
                </div>
            </div>
        </>
    )
}
