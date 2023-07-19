import { useUserContext } from "../contexts/user_context";
import styled from 'styled-components'
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus} from "react-icons/fa";


const Login = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper>
      {myUser ? (
           <button
        type="button"
        className="auth-btn"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout <FaUserMinus />
      </button> 
      ): (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
        Login <FaUserPlus />
      </button> 
      )}
    </Wrapper>
  );
};

 
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  
`


export default Login;
