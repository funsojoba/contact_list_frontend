import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled.span`
    font-family: 'Poppins', sans-serif;
    letter-spacing:3px;
    
    a{
        transition: all 100ms ease-in;
        background:#10BDA8;
        display:inline-block;
        padding:15px 20px;
        color:#fff;
        text-decoration:none;
        border-radius:10px;
        
        &:hover{
            transform: translateY(-5px);
            box-shadow: 0 5px 30px rgba(16, 189, 168, .4);
        }
    }

`

const MyLink = ()=>{
    return <StyledLink>
        <Link to="/signup">Sign Up</Link>
    </StyledLink>
}

export default MyLink