import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../src/Providers/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Helmet } from "react-helmet-async";

const Register = () => {


  const {createUser,updateUserProfile,loading} =useContext(AuthContext);
    const[visible,setVisible]=useState(false);
    const navigate=useNavigate();

    const handleRegister=(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        const name=form.get('name');
        const photo=form.get('photo');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.');
      return;
    }

        createUser(email,password)
        .then(res=>{console.log(res.user)
          updateUserProfile(name,photo)
          .then(()=>{

             toast.success('Registered Successfully');
             window.location.reload();
             

          })
          navigate('/');
           
        })
        .catch(err=>{console.error(err)})
        
        
    };
    if(loading)
    {
        return <Skeleton count={15} />
    }
    return (
        <div className="">
          <Helmet>
            <title>PremierResX | Register</title>
          </Helmet>
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
          <input type="text" placeholder="Your Photo URL" name="photo" className="input input-bordered"  />
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
          <input type={visible? "text":"password"}  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          <span className="absolute text-xl  right-1 top-[50%] -translate-y-[50%] cursor-pointer" onClick={()=>{setVisible(!visible)}}>{visible? <IoIosEyeOff /> : <IoEye />}</span>
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