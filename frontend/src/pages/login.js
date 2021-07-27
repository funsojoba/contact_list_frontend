import Button from "../components/button"
import Input from "../components/input"
import Img from "../components/img"

import { Link } from "react-router-dom"

import styled from 'styled-components'

const Body = styled.body`
    padding:50px;
    background:#F9FAFF;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    box-sizing:border-box;
`

const Div = styled.div`
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    display:flex;
    flex-direction:column;
    width:70%;
    position:relative;
    overflow:hidden;
`
const SmallText = styled.small`
    color:#515151;
    text-align:center;
    display:inline-block;
`
const Circle = styled.div`
    position:absolute;
    top:-70px;
    left:-60px;
    border-radius:50%;
    width:200px;
    height:200px;
    background: rgba(16, 189, 168, .4);
    @media only screen and (max-width:750px){
        top:-110px;
        left:-110px;
    }
`

const P = styled.p`
    letter-spacing:1.4px;
    color: #10BDA8;
    text-align:center;
    font-weight:light;
`

const Section = styled.div`
    display:flex;
    width: 100%;
    padding:20px;
    @media only screen and (max-width:750px){
        padding:0;
    }
`
const Form = styled.form`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content: space-around;
    padding:20px;

    @media only screen and (max-width:750px){
        padding:0;
        align-items:center;
    }
    
`
const Image = styled.div`
    flex: 1;
    display:flex;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width:750px){
        display:none;
    }
`

const Login = () => {
    return <Body>
        <Div>
            <Circle />

            <P>Welcome back</P>
            <Section>
                <Form>
                    <Input placeholder="email" type="email" />
                    <Input placeholder="password" type="password" />
                    <Button>Login</Button>
                </Form>

                <Image>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627383456/contact_api/authpage/undraw_Login_re_4vu2_voo7zq.png" alt="login page" />
                </Image>
            </Section>

            <SmallText>Don't have an account? &nbsp; <Link to="/signup">Sign up</Link></SmallText>
        </Div>
    </Body>
}

export default Login