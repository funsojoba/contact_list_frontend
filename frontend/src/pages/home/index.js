import {H1, Paragraph, Div, TextDiv, TextWrapper, ImageDiv, SemiCircle} from './style'
import MyLink from '../../components/myLink'
import Img from '../../components/img'

const Home = () => {
    return <Div>
        <TextDiv>
            <TextWrapper>
                <H1>Welcome to <br /> Kontat</H1>
                <Paragraph>All your connections in one place, <br />
                    get in touch at the speed of light</Paragraph>
                <MyLink to="/signup" >Sign Up</MyLink>
            </TextWrapper>
        </TextDiv>

        <ImageDiv>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627393033/contact_api/authpage/HomePage2_saatkt.png" alt="Kontat" />
        </ImageDiv>
        <SemiCircle />
    </Div>
}

export default Home