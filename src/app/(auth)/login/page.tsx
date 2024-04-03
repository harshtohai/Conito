import OAuthButton from "@/components/logincomponents/oAuthButtons";
import InputField from "@/components/logincomponents/inputfield";
import SubmitButton from "@/components/logincomponents/submitButton";
import Link from "next/link";

export default function LoginPage() {

    const GithubLogo = <svg width="28   " height="28   " viewBox="0 0 92 90 " fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.9943 0C20.5965 0 2.65447e-05 20.6575 2.65447e-05 46.1405C-0.01035 55.8118 3.02173 65.2418 8.66775 73.0977C14.3138 80.9537 22.2882 86.8383 31.464 89.92C33.764 90.3451 34.6035 88.9204 34.6035 87.6968C34.6035 86.5996 34.5633 83.6986 34.5403 79.8497C21.7465 82.6358 19.044 73.6628 19.044 73.6628C16.9568 68.3318 13.938 66.9129 13.938 66.9129C9.75777 64.0521 14.2485 64.1096 14.2485 64.1096C18.8658 64.437 21.2923 68.8661 21.2923 68.8661C25.3978 75.9147 32.062 73.8811 34.684 72.6977C35.098 69.7163 36.2883 67.6827 37.605 66.528C27.393 65.3619 16.652 61.4039 16.652 43.7278C16.652 38.6898 18.446 34.5709 21.39 31.3424C20.9128 30.1763 19.3373 25.483 21.8385 19.1352C21.8385 19.1352 25.7025 17.8944 34.4885 23.863C38.2418 22.8382 42.1148 22.3167 46.0058 22.312C49.8969 22.3197 53.7697 22.8432 57.523 23.8687C66.3032 17.9001 70.1615 19.141 70.1615 19.141C72.6685 25.4945 71.093 30.182 70.6215 31.3482C73.5712 34.5767 75.348 38.6955 75.348 43.7335C75.348 61.4556 64.5955 65.3561 54.349 66.4993C55.9992 67.924 57.4712 70.7388 57.4712 75.0415C57.4712 81.2112 57.4137 86.186 57.4137 87.6968C57.4137 88.9319 58.2417 90.3681 60.5762 89.9142C69.7431 86.8253 77.7077 80.9384 83.3458 73.0843C88.984 65.2303 92.0111 55.8057 92 46.1405C92 20.6575 71.4035 0 45.9943 0Z" fill="#9747FF"/>
    </svg>
    

    const GoogleLogo = <svg width="25" height="25" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.9475 38.5547H91.2664C91.7555 41.1719 92 43.6719 92 46.0547C92 54.5313 90.1457 62.0996 86.4372 68.7598C82.7287 75.4199 77.441 80.625 70.5741 84.375C63.7072 88.125 55.8317 90 46.9475 90C40.5493 90 34.4567 88.8184 28.6698 86.4551C22.8828 84.0918 17.8906 80.8984 13.693 76.875C9.49546 72.8516 6.1639 68.0664 3.69834 62.5195C1.23278 56.9727 0 51.1328 0 45C0 38.8672 1.23278 33.0273 3.69834 27.4805C6.1639 21.9336 9.49546 17.1484 13.693 13.125C17.8906 9.10156 22.8828 5.9082 28.6698 3.54492C34.4567 1.18164 40.5493 0 46.9475 0C59.1734 0 69.6673 3.92578 78.4292 11.7773L65.6532 23.5547C60.6405 18.9063 54.4053 16.582 46.9475 16.582C41.6904 16.582 36.8306 17.8516 32.3681 20.3906C27.9056 22.9297 24.3703 26.377 21.7621 30.7324C19.1539 35.0879 17.8498 39.8438 17.8498 45C17.8498 50.1563 19.1539 54.9121 21.7621 59.2676C24.3703 63.623 27.9056 67.0703 32.3681 69.6094C36.8306 72.1484 41.6904 73.418 46.9475 73.418C50.493 73.418 53.7533 72.9492 56.7282 72.0117C59.7032 71.0742 62.1484 69.9023 64.0638 68.4961C65.9792 67.0898 67.6501 65.4883 69.0764 63.6914C70.5028 61.8945 71.5522 60.1953 72.2246 58.5937C72.897 56.9922 73.3555 55.4687 73.6 54.0234H46.9475V38.5547Z" fill="#9747FF"/>
    </svg>
    
    
    return(
        <main className="h-[100%] w-[100%] bg-pribg flex justify-center items-center py-[8%] px-[37%]">
            <div className="bg-secbg w-full py-[3rem]   rounded-[10px] justify-center flex-col items-center flex">
                <div className="w-[30rem] mb-[1rem] rounded-[13px] justify-center items-center flex flex-col"> 
                    <p className="text-sm font-medium">Login To</p>
                    <h1 className="text-text text-2xl font-semibold">Wiki Docs</h1>
                </div>
                <div className="flex justify-between items-center w-[7rem] mb-[1rem]">

                <OAuthButton logo={GithubLogo}/>
                <OAuthButton logo={GoogleLogo}/>
                </div>
                <div className="text-white flex justify-center items-center mb-[0.7rem]">
                    <div className="w-[5rem] h-[1px] bg-text"></div>
                    <div className="mx-[8px] text-[11px] pt-[1px]">OR</div>
                    <div className="w-[5rem] h-[1px] bg-text"></div>
                </div>
                <p className="text-[11px] ">Enter Details</p>
                <div>
                    <InputField type="email" id="email" />
                    <InputField type="password" id="password" />
                </div>
                <div className="w-[14.8rem]">
                <p className="text-[11px] my-[0.4rem] text">Dont have an Account? <Link href={'/singup'} className="text-text underline underline-offset-1 decoration-1">SignUp</Link></p>
                </div>
                <SubmitButton buttonType="Login"/>
            </div>
        </main>
    )
}