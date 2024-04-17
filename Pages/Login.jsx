import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../src/Providers/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {

    const {signIn,googleLogin,githubLogin}=useContext(AuthContext)
    const navigate =useNavigate();
    const location=useLocation();

    const handleLogin=(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        signIn(email,password)
        .then( (res)=>
    {
        toast.success("Successfully logged in")
        navigate(location?.state? location.state : '/')
    })
        .catch(()=>{
            toast.warning('Invalid Credentials')
        })
    };


    return (
        <div className="">
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-[#50C2C9]">Login now!</h1>
      <p className="py-6 text-xl">Welcome back to PremierResX. Log in now to access your personalized property portfolio and stay updated on the latest luxury listings.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl glass">
        <p className="text-center text-xl font-semibold py-2 text-[#50C2C9]">WELCOME BACK !</p>
        <img src="/welcome.png" className="size-36 mx-auto" alt="" />
      <form onSubmit={handleLogin}  className="card-body my-0 py-0">

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
          <input type="password"  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          
          </div>
          
          

        </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn border-0 bg-[#50C2C9]">Login</button>
        </div>
      </form>
      
      <p className="text-center text-xl font-bold">OR</p>
      <div className=" flex flex-col px-8 py-2 gap-2">
        <button onClick={()=>githubLogin()
        .then(()=>{
            toast.success("Successfully logged in")
            navigate(location?.state? location.state : '/')})} className="btn bg-[#169BE5] border-0"><FaGithub className="text-3xl text-white" /> <span className="text-xl text-white font-semibold">Continue with Github</span>
        </button>
        <button onClick={()=>googleLogin()
        .then(()=>{
            toast.success("Successfully logged in")
            navigate(location?.state? location.state : '/')})} className="btn"><FcGoogle className="text-3xl" /><span className="text-xl font-semibold">Continue with Google</span></button>
      </div>
      <p className="pl-8 pb-4">Do not have an account ? <span className="link text-primary font-semibold"><Link to={'/register'}>Register</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;