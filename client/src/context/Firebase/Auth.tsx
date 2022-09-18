import React, {createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';

import {auth} from "../../lib/firebase"

const FirebaseContext = createContext<any>(null);

export const FirebaseProvider = ({children}: any): any => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [firebaseIsAuth, setFirebaseIsAuth] = useState(false);

    // const { handleUpdateUser } = useSignIn();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, userData => {
            if (userData) {
                setFirebaseIsAuth(true);
                setUser(userData);
                userData.getIdToken(false).then((token) => {
                    setAccessToken(token)
                })
            }
            setIsLoading(false);
        });

        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    if (isLoading) {
        return "Loading...";
    }

    return (
        <FirebaseContext.Provider
            value={{
                firebaseIsAuth,
                accessToken,
                user
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContext;