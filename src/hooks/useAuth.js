import AuthContext from "../components/util/AuthProvider";
import {useContext} from "react";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;