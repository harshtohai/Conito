import OAuthButton from "@/components/logincomponents/oAuthButtons";
import InputField from "@/components/logincomponents/inputfield";
import SubmitButton from "@/components/logincomponents/submitButton";
import Link from "next/link";
import {GithubLogo, GoogleLogo} from "@/components/logos/logo"

export default function LoginPage() {   
    
    return(
        <main className="h-[100%] w-[100%] bg-pribg flex justify-center items-center py-[8%] px-[37%]">
            <div className="bg-secbg w-full py-[3rem]   rounded-[10px] justify-center flex-col items-center flex">
                <div className="w-[30rem] mb-[1rem] rounded-[13px] justify-center items-center flex flex-col"> 
                    <p className="text-sm font-medium">Login To</p>
                    <h1 className="text-buttons text-2xl font-semibold">Wiki Docs</h1>
                </div>
                <div className="flex justify-between items-center w-[7rem] mb-[1rem]">

                <OAuthButton logo={GithubLogo}/>
                <OAuthButton logo={GoogleLogo}/>
                </div>
                <div className="text-white flex justify-center items-center mb-[0.7rem]">
                    <div className="w-[5rem] h-[1px] bg-buttons"></div>
                    <div className="mx-[8px] text-[11px] pt-[1px]">OR</div>
                    <div className="w-[5rem] h-[1px] bg-buttons"></div>
                </div>
                <p className="text-[11px] ">Enter Details</p>
                <div>
                    <InputField type="email" id="email" />
                    <InputField type="password" id="password" />
                </div>
                <div className="w-[14.8rem]">
                <p className="text-[11px] my-[0.4rem] text">Dont have an Account? <Link href={'/singup'} className="text-buttons underline underline-offset-1 decoration-1">SignUp</Link></p>
                </div>
                <SubmitButton buttonType="Login"/>
            </div>
        </main>
    )
}
