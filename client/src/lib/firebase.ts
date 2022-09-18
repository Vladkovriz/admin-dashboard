import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth';

import {firebaseConfig} from "../config/firebase";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const analytics = getAnalytics(firebaseApp);