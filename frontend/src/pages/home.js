import styled from "styled-components";
import MyLink from "../components/myLink";
import Img from "../components/img";


const H1 = styled.h1`
    font-weight:bold;
    margin-bottom: 15px;
    color:#10BDA8;
    font-size:4em;

    @media only screen and (max-width:750px){
        font-size:3em;
    }
`

const P = styled.p`
    color:#525252;
    letter-spacing:1.2px;
    margin-bottom: 15px;
`

const Div = styled.div`
    background:#F9FAFF;
    padding:50px;
    display:flex;
    width:100%;
    height:100vh;
    box-sizing:border-box;
    position:relative;

    @media only screen and (max-widdth:750px){
        height:100%;
    }
`

const TextDiv = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:5;
`
const TextWrapper = styled.div`
    padding:20px;
    @media only screen and (max-width:750px){
        padding:0;
    }
`

const ImageDiv = styled.div`
    flex:1;
    padding:30px;
    display:flex;
    justify-content: center;
    align-items:center;
    z-index:5;

    @media only screen and (max-width:750px){
        display:none;
    }
`

const SemiCircle = styled.div`
    clip-path: circle(65.6% at 100% 50%);
    background:#fff;
    width:900px;
    height:100%;
    position:absolute;
    top:0;
    right:0;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .7);
    @media only screen and (max-width:750px){
        display:none;
    }
`

const Home = ()=>{
    return <Div>
        <TextDiv>
            <TextWrapper>
                <H1>Welcome to <br /> Kontat</H1>
                <P>All your connections in one place, <br />
                    get in touch at the speed of light</P>
                <MyLink to="/signup" >Sign Up</MyLink>
            </TextWrapper>
        </TextDiv>

        <ImageDiv>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627393033/contact_api/authpage/HomePage2_saatkt.png" alt="Kontat"/>
        </ImageDiv>
        <SemiCircle />
    </Div>
}

export default Home