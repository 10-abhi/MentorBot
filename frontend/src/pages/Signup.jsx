import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button2} from "../components/Button2"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Signup (){
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [userName , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    
    return <div className="flex justify-center h-screen w-screen bg-gray-900 ')]" >
       
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-slate-50/10 w-90 text-center p-2 h-max px-4">
        <Heading label={"Sign up"}></Heading>
        <SubHeading label={"Enter Your Information to create an account"}></SubHeading>
        <InputBox label={"First Name"} placeholder={"John"} onChange={e=>{setFirstName(e.target.value)}} ></InputBox>
        <InputBox label={"Last Name"} placeholder={"Doe"} onChange={e=>{setLastName(e.target.value)}}></InputBox>
        <InputBox label={"username"} placeholder={"xyz@gmail.com"} onChange={e=>{setUsername(e.target.value)}}></InputBox>
        <InputBox label={"password"} placeholder={"12345"} onChange={e=>{setPassword(e.target.value)}}></InputBox>
        <Button2 onClick={async ()=>{
            const response = await axios.post("https://mentorbot-backend.vercel.app/api/v1/user/signup" , {
                userName,
                password,
                firstName,
                lastName
            })
            localStorage.setItem("userName" , response.data.userName);
            navigate("/dashboard")
        }} label={"Sign up"}></Button2>
        </div>-
         <BottomWarning label={"Alread have an account?"} buttonText={"Sign in"} to={"/signin"}  ></BottomWarning>
        </div>
    </div>
}