import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import auth from "../firebase.config";
import { Link } from "react-router-dom";

const Register = () => {

    const [length,setLength]=useState('');
    const[visible,setVisible]=useState(false);

    const validation=(e)=>
    {
        setLength(e.target.value.length);
    }


    const handleRegister=(e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accepted=e.target.check.checked;
        console.log('submitted', email,password);
        if(length<6)
        {
            toast.warning('Password must be at least 6 characters');
            return;
        }
        if(!accepted)
        {
            toast.error("Please accept the terms and conditions");
            return;
        }
        
    };
    return (
        <div className="">
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-primary">Register now!</h1>
      <p className="py-6 text-xl">Unlock the world of luxury living at PremierResX. Register now for exclusive access to premium properties and personalized recommendations.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl glass">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Your Photo URL" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={visible? "text":"password"} onChange={validation} name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          <span className="absolute text-xl  right-1 top-[50%] -translate-y-[50%] cursor-pointer" onClick={()=>{setVisible(!visible)}}>{visible? <IoIosEyeOff /> : <IoEye />}</span>
          </div>
          
          <div className="flex items-center justify-between w-full">
          {
            length<6 &&length>0 && <p className=" text-sm  text-end"><span className="text-red-600"> Weak</span></p>
          }
          {
            length>=6 &&  length<8 && <p className=" text-sm text-end"> <span className="text-yellow-500"> Good</span></p>
          }
          {
            length>=8 && <p className=" text-sm  text-end"> <span className="text-green-500"> Strong</span></p>
          }
          
          </div>

        </div>
        <div className="mt-1">
            
            <p>By continuing you agree to <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">PremierResX</span> Terms of Service.</p>
          </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="pl-8 pb-4">Already have an account ? <span className="link text-primary font-semibold"><Link to={'/login'}>Login</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;