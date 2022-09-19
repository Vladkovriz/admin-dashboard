import {useCallback, useState} from "react";

import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut} from 'firebase/auth';

import {auth} from "../../lib/firebase"

interface IFirebaseAuthProp {
    isLoading: boolean;
    firebaseUser: any;
    signInWithGoogle: any;
    signOutFirebase: any;
}

export const useFirebaseAuth = (): IFirebaseAuthProp => {
    const [isLoading, setIsLoading] = useState(false);
    const [firebaseUser, setFirebaseUser] = useState(null);
    const signOutFirebase = () => signOut(auth);
    const signInWithGoogle = useCallback(async () => {
        try {
            const provider = new GoogleAuthProvider();

            const signInResult = await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [auth, signInWithRedirect]);

    // const login = () => {
    //
    // }

    return {
        isLoading,
        firebaseUser,
        signInWithGoogle,
        signOutFirebase
    }
}