import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext= createContext(null);

const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null)
    const [loading,setLoading]=useState(true)
    console.log(loading)

    const createUser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(name,photo)=>
    {
        return updateProfile(auth.currentUser,
        {
            displayName:name,
            photoURL:photo
        })
    }

    const signIn=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin=()=>
    {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin=()=>
    {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }

    const logOut=()=>
    {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log("user in the state changed",currentUser);
            SetUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo={user,createUser,updateUserProfile,signIn,googleLogin,githubLogin,logOut,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes=
{
    children:PropTypes.node
}