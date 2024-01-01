'use client'


export default function Textarea(){
    return(
        <div className="w-full h-[23%] flex justify-center relative border-[2px] border-transparent border-t-line bg-secbg ">
                <textarea name="textplace" id="textplace" placeholder="Ask..." className="outline-none resize-none h-[100%] w-[100%]  px-[15px] py-3 pr-[3rem] text bg-secbg"></textarea>
                <button className="absolute bottom-[65%] left-[91%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 29 28" fill="none">
                        <g clip-path="url(#clip0_16_4)">
                            <g filter="url(#filter0_i_16_4)">
                            <path d="M2.58923 14.6079L1.65087 6.09825C1.38211 3.6629 3.87093 1.87395 6.06923 2.92416L24.6251 11.7797C26.9943 12.9097 26.9943 16.3061 24.6251 17.4361L6.06923 26.2932C3.87093 27.3418 1.38211 25.5545 1.65087 23.1191L2.58923 14.6079ZM2.58923 14.6079H13.4642" stroke="#a06be3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_i_16_4" x="0.880859" y="1.86511" width="26.271" height="26.4865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16_4"/>
                            </filter>
                            <clipPath id="clip0_16_4">
                            <rect width="29" height="27.129" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
    )
}