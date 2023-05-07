import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Switch } from '@mui/material';
import { Popover } from 'react-tiny-popover'

export const HomeRightComponent = ({ isDark, setIsDark, showSideComponent }) => {
    const [newPoints, setNewPoints] = useState(false);
    const points = [{
        text: 'Everything you can’t change happened for a good reason. If it did not, it is better to think that it did.'
    },
    {
        text: 'Have faith things are going to be great. If you do, you’ll at least get closer to where you want to be.'
    },
    {
        text: 'Have Faith in having Faith, and nothing can limit it.'
    },
    {
        text: 'Limitless hope leads to limitless love'
    },
    {
        text: 'Limitless faith leads to limitless hope'
    },
    {
        text: 'Limitless love is the vibe of heaven'
    },
    {
        text: 'Together, through faith, we can bear witness to heaven.'
    },
    {
        text: 'Don’t doubt the vibe, spread it.'
    }
    ]
    return (
        <div className={`${showSideComponent?'w-[65%]':'w-[100%]'} flex flex-col gap-10 ${!isDark ? 'bg-white' : 'bg-gray-900 text-gray-300'}`}>
            <div className='flex justify-end absolute right-[77px] top-[6px]'>
                {isDark ? 'Dark' : 'Light'}&nbsp;mode
            </div>
            <div className='fixed right-5'>
                <Switch
                    checked={isDark}
                    onClick={() => { setIsDark(!isDark) }}

                />
            </div>
            <div></div>
            <div className='flex flex-col sm:flex-row sm:justify-center gap-2 items-center h-[30px]'>
                <div className='font-bold text-[20px]'></div>
                <div className='text-[20px] font-bold'></div>
            </div>
            <div className='flex justify-start gap-3'>
                <div className={`h-[20px] w-[50%] ${!isDark ? 'bg-red-500' : 'bg-black'}`}></div>
                <div className={`h-[20px] w-[20px] ${!isDark ? 'bg-red-500' : 'bg-black'}`}></div>
            </div>
            <div className='m-4 flex flex-col lg:flex-row gap-5'>
                <div className='flex flex-col gap-3 w-[100%]'>
                    <div className='text-[30px] font-bold'>The Newest Testament</div>
                    <div className='text-justify text-[14px] font-medium'>
                        The universe was made for you, if it wasn't, it is better to think that it was.
                        To some extent (perhaps a greater extent than we can yet quite fathom), how we perceive and approach the world creates a world that appears to us in that form — as “real.”As Werner Heisenberg put it: “What we observe is not nature itself, but nature exposed to our method of questioning.” The future is going to be better than you can imagine, if it’s not it’s better to think that it is. Not just because it gives you better vibes in the moment, but because it actually increases the chance that it is better. Our limits are only defined by how high we meme.
                    </div>
                    <div className='flex gap-2 w-[100%] items-center justify-end'>
                        <spam className={` flex w-[10px] h-[3px] ${!isDark ? 'bg-red-500' : 'bg-gray-300'}`}></spam>
                        <spam className={` flex w-[50px] h-[3px] ${!isDark ? 'bg-red-500' : 'bg-gray-300'}`}></spam>
                        <spam className={` flex w-[100px] h-[3px] ${!isDark ? 'bg-red-500' : 'bg-gray-300'}`}></spam>
                        <Popover
                            isOpen={newPoints}
                            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                            content={
                                <div className={`text-justify text-[14px] font-medium  rounded-lg p-5 relative top-[280px] right-[300px] shadow-lg ${!isDark ? 'bg-white shadow-lg border border-gray-300' : 'bg-gray-900 text-gray-300 shadow-lg border border-gray-600'}`}
                                    style={{
                                        // transform: 'translate(494px, 42px)',
                                        width: '600px'
                                    }}>
                                    {
                                        points?.map((items) => {
                                            return (
                                                <div className='flex gap-2 items'>
                                                    <FiberManualRecordIcon className='w-[10px] h-[5px] relative top-[5px]' fontSize='5' /><div>
                                                        {items?.text}
                                                        <br />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        >
                            <spam className={`cursor-pointer`} onClick={() => { setNewPoints(!newPoints) }}>{!newPoints ? <KeyboardArrowDownIcon className={`${!isDark ? 'text-red-500' : 'text-gray-300'}`} /> : <KeyboardArrowUpIcon className={`${!isDark ? 'text-red-500' : 'text-gray-300'}`} />}</spam>
                        </Popover>
                    </div>
                    {/* {
                        newPoints ?
                            <div className='text-justify text-[14px] font-medium'>
                                {
                                    points?.map((items) => {
                                        return (
                                            <div className='flex gap-2 items'>
                                                <FiberManualRecordIcon className='w-[10px] h-[5px] relative top-[5px]' fontSize='5' /><div>
                                                    {items?.text}
                                                    <br />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            null
                    } */}
                    <div>
                        I ACTUALLY GOT TIRED OF THE FACT THAT OUR ENTIRE WORLD IS BEING RAN BY <b>ENGAGEMENT ALGORITHMS</b> WHICH ARE NO BETTER THAN <b>SOUL SUCKING DEMONS</b> AND MADE THIS APP THAT RANKS VIDEOS BASED ON WHAT INSPIRES PEOPLE THE MOST:
                    </div>
                    <div className='font-bold text-[20px]'>TELEGRAM CHAT :</div>
                    <div
                        onClick={() => { window.open('https://t.me/holyvible') }}
                        className={`cursor-pointer hover:relative hover:bottom-2 ${!isDark ? 'bg-white text-black' : 'bg-gray-900 text-gray-300'} grid grid-cols-2 gap-2 border border-gray-300 rounded-lg shadow-lg`}>
                        <div style={{ padding: "12px 14px 14px", overflow: "hidden", textAlign: "left" }} >
                            <div style={{ fontSize: "14px", lineHeight: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minHeight: "24px", marginBottom: "2px" }}>
                                Holy Vible</div>
                            <div
                                style={{ fontSize: "12px", lineHeight: "16px", height: "32px", overflow: "hidden" }}
                            >
                                Let the good vibes roll. Plan for world vibination.
                            </div>
                            <div style={{ display: "flex", marginTop: "6px" }}>
                                <img src="https://holyvible.com/image/https%3A%2F%2Ftelegram.org%2Fimg%2Ffavicon-16x16.png?id=49696043-95db-4b38-8b19-fe2c7d905fda&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&userId=&cache=v2"
                                    style={{ width: "16px", height: "16px", minWidth: "16px", marginRight: "6px" }}
                                    alt="img"
                                />
                                <div style={{ fontSize: "12px", lineHeight: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    https://t.me/holyvible
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            {/* <img
                                src="https://holyvible.com/image/https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple126%2Fv4%2Ff3%2F95%2F94%2Ff395948a-d838-fd7a-ce48-dd2fb00a9ac9%2FAppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png%2F1200x630wa.png?id=53aeddc3-53f7-4f6f-80af-fac0e454ed98&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=500&userId=&cache=v2"
                                className='w-[50%]'
                                alt="img"
                            /> */}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center .relative left-[60px] lg:w-[50%]'>
                    <img
                        src="/images/img2.jpeg"
                        alt="img"
                        className='w-[90%] h-[300px]'
                    />
                </div>
            </div>
        </div>
    )
}
