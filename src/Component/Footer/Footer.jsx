import React from 'react'

export const Footer = ({ isDark }) => {
    return (
        <div className={`${!isDark ? 'bg-red-500 text-white' : 'bg-black text-gray-300'} p-5 grid grid-cols-2 gap-5`}>
            <div
                onClick={() => { window.open('https://apps.apple.com/us/app/holy-vible/id6444683138') }}
                className={`cursor-pointer hover:relative hover:bottom-2 ${!isDark ? 'bg-white text-black' : 'bg-gray-900 text-gray-300'} grid grid-cols-2 gap-2 border border-grey-300 rounded-lg shadow-lg`}>
                <div style={{ padding: "12px 14px 14px", overflow: "hidden", textAlign: "left" }} >
                    <div style={{ fontSize: "14px", lineHeight: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minHeight: "24px", marginBottom: "2px" }}>
                        Holy Vible</div>
                    <div
                        style={{ fontSize: "12px", lineHeight: "16px", height: "32px", overflow: "hidden" }}
                    >
                        Welcome to Holy Vible  by Socialverse, the healthy way to consume content centered around good vibes.  For customers who are exclusively interested in consuming material from the Holy Vible Subverse, Socialverse has separated this Subverse into a standalone app by continuing to offer cutting-edge fe…
                    </div>
                    <div style={{ display: "flex", marginTop: "6px" }}>
                        <img src="https://holyvible.com/image/https%3A%2F%2Fapps.apple.com%2Ffavicon.ico?id=53aeddc3-53f7-4f6f-80af-fac0e454ed98&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&userId=&cache=v2"
                            style={{ width: "16px", height: "16px", minWidth: "16px", marginRight: "6px" }}
                            alt="img"
                        />
                        <div style={{ fontSize: "12px", lineHeight: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            https://apps.apple.com/us/app/holy-vible/id6444683138
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img
                        src="https://holyvible.com/image/https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple126%2Fv4%2Ff3%2F95%2F94%2Ff395948a-d838-fd7a-ce48-dd2fb00a9ac9%2FAppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png%2F1200x630wa.png?id=53aeddc3-53f7-4f6f-80af-fac0e454ed98&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=500&userId=&cache=v2"
                        className='w-[50%]'
                        alt="img"
                    />
                </div>
            </div>
            <div
                onClick={() => { window.open('https://play.google.com/store/apps/details?id=com.subverse.vible') }}
                className={`cursor-pointer hover:relative hover:bottom-2 ${!isDark ? 'bg-white text-black' : 'bg-gray-900 text-gray-300'} grid grid-cols-2 gap-2 border border-grey-300 rounded-lg shadow-lg`}>
                <div style={{ padding: "12px 14px 14px", overflow: "hidden", textAlign: "left" }} >
                    <div style={{ fontSize: "14px", lineHeight: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minHeight: "24px", marginBottom: "2px" }}>
                        Holy Vible - Apps on Google Play</div>
                    <div
                        style={{ fontSize: "12px", lineHeight: "16px", height: "32px", overflow: "hidden" }}
                    >
                        The healthy way to consume content centered around good vibes
                    </div>
                    <div style={{ display: "flex", marginTop: "6px" }}>
                        <img src="https://holyvible.com/image/https%3A%2F%2Fapps.apple.com%2Ffavicon.ico?id=53aeddc3-53f7-4f6f-80af-fac0e454ed98&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&userId=&cache=v2"
                            style={{ width: "16px", height: "16px", minWidth: "16px", marginRight: "6px" }}
                            alt="img"
                        />
                        <div style={{ fontSize: "12px", lineHeight: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            https://play.google.com/store/apps/details?id=com.subverse.vible
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img
                        src="https://holyvible.com/image/https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple126%2Fv4%2Ff3%2F95%2F94%2Ff395948a-d838-fd7a-ce48-dd2fb00a9ac9%2FAppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png%2F1200x630wa.png?id=53aeddc3-53f7-4f6f-80af-fac0e454ed98&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=500&userId=&cache=v2"
                        className='w-[50%]'
                        alt="img"
                    />
                </div>
            </div>
        </div>
    )
}
