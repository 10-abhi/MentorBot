import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button2 } from "../components/Button2";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export function Signin (){
      const [username , setUsername] = useState("");
      const [password , setPassword] = useState("");
      const navigate = useNavigate();
  return  <div className="flex justify-center h-screen w-screen bg-gray-900">
    <div className="flex flex-col justify-center">
      <div className="w-96 bg-slate-50/10 rounded-lg text-center px-4 p-2 h-max"> 
       
     <Heading label={"Sign In"} ></Heading>
     <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
     <InputBox label={"Email" } placeholder={"xyz@example.com"} onChange={e=>{setUsername(e.target.value)}}></InputBox>
     <InputBox label={"Password"} placeholder={"123456"} onChange={e=>{setPassword(e.target.value)}}></InputBox>
     <Button2 label={"Sign In"} onClick={async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
           username,
           password
         })
         if(response.status == 200){
          localStorage.setItem("token" , response.data.token);
          navigate("/dashboard");
         }
     }} ></Button2></div>
     <BottomWarning label={"Don't have an account? "} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
   </div></div> 
}