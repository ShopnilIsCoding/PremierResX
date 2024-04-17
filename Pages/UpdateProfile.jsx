import { useContext } from "react";
import { AuthContext } from "../src/Providers/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaPhotoVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
    const {user,loading,updateUserProfile}=useContext(AuthContext);
    const modifyProfile=(e)=>
    {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo');
        if(name.length<=0)
        {
        toast.error("Please enter your name");
        return ;
        }
        updateUserProfile(name,photo)
        .then(()=>{

            toast.success('profile updated successfully');
            window.location.reload();
         })
    }
    if(loading)
    {
        return <Skeleton count={5} />
    }
    if(!user)
  { 
    return <Skeleton count={5} />
    }
    return (
        <div className="bg-svg-background bg-no-repeat bg-contain lg:bg-cover bg-bottom p-4">
          <Helmet>
            <title>PremierResX | Update</title>
          </Helmet>
            <div className="max-w-lg p-4 mx-auto space-y-2 glass rounded-xl ">
            
            <label className="input input-bordered flex items-center gap-2 py-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" placeholder="You can't touch this" className="input input-bordered w-full p-2" disabled value={user.email} />
            </label>
            <form onSubmit={modifyProfile}>
            <label className="input input-bordered flex items-center gap-2 py-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input type="text" className="grow" placeholder="Username" name="name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 py-8">
            <FaPhotoVideo />
              <input type="text" className="grow" placeholder="PhotoURL" name="photo"/>
            </label>
            <button className="btn btn-outline btn-primary mt-2 w-full">Update Profile</button>
            </form>
                    </div>
        </div>
    );
};

export default UpdateProfile;