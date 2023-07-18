
import { useUserContext } from "../contexts/user_context";
const Login = () => {

    const {loginWithRedirect,myUser,logout}= useUserContext()
return (
    <> 
    <button type="button" className="auth-btn" onClick={loginWithRedirect}>Login</button>
    <button type="button" className="auth-btn" onClick={()=> logout({ returnTo: window.location.origin})}>Logout</button>
    
    </>
   
)
}


export default Login;