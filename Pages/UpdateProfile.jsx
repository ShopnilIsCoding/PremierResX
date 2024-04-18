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
        // if(photo.length>300)
        // {
        //   toast.error("Photo Url is too long");
        //   return ;
        // }
        if(name.length<=0 || photo.length<=0)
        {
        toast.error("You must fill both fields");
        return ;
        }
        updateUserProfile(name,photo)
        .then(()=>{

            toast.success('profile updated successfully');
            window.location.reload();
         })
         .catch(()=>{toast.error('Error updating profile!Try later')});
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
              <h1 className="text-center text-2xl">Hi <span className="text-primary font-bold font-serif">{user.displayName}</span>!</h1>
            {user.photoURL && <div className="w-full" ><img src={user.photoURL ? user.photoURL : '/profile.png'} className="rounded-full size-40 mx-auto" alt="" /></div>}
            {user.email && <p className="text-center font-semibold font-serif text-primary">{user.email}</p>}
            
            <form onSubmit={modifyProfile}>
            <label className="input input-bordered flex items-center gap-2 py-8 mb-2">
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