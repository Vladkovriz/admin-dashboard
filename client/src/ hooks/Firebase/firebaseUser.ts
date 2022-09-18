import {useContext} from 'react';
import FirebaseContext from '../../context/Firebase/Auth';

export const useFirebaseUser = () => useContext<any>(FirebaseContext);

export default useFirebaseUser;
