import {useFirebaseAuth} from "../Firebase";
import {redirect} from "react-router-dom";
import {routes} from "../../config/routes";

interface IAuthRes {
    login: () => void;
}

export const useAuth = (): IAuthRes => {

    const {signInWithGoogle} = useFirebaseAuth()

    const login = () => {
        console.log("LOGIN");
        signInWithGoogle();
        redirect(routes.dashboard);
    }

    return {
        login
    }
}