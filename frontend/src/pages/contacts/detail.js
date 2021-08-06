import Input from "../../components/input";
import TextArea from "../../components/textArea";
import Button from "../../components/button";
import Img from "../../components/img";
import Header from "../../components/navbar";

import styled from "styled-components";


const Body = styled.div`
    background: #F9FAFF;
    display:flex;
    padding:30px;
    flex-wrap:wrap;
    margin-top:100px;
`

const Container = styled.div`
    margin: 7.5px;
    flex:1;
    border-radius:50px;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .1);
    padding:20px;
`

const DetailSection = styled.div`
    width: 100%;
`

const ImageDiv = styled.div`
    width: 180px;
    height:180px;
    border-radius:50%;
    margin:auto;
    background:url(${props => props.avatar ? props.avatar : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627605865/contact_api/avatar3_chs26r.png"});
    background-size:cover;
    background-position: center;
`

const Name = styled.div`
    border-bottom: solid 1px #D1D1D1;
    h3{
        color:#525252;
    }
`

const NumberDiv = styled.div`
    border-bottom: solid 1px #D1D1D1;
    p{
        color:#525252;
    }
`

const Socials = styled.div`
    padding:10px;
    display:flex;
    justify-content:space-around;

    a{
        color:#525252;
        display:inline-block;
    }
`

const DeleteDiv = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
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

const Small = styled.div`
    text-align: center;
    color: #10BDA8;
`



const DetailPage = ({ first_name, last_name, facebook, twitter, instagram, linkedin, number, email }) => {
    return <>
        <Header />
    <Body>
        <Container>
            <DetailSection>
                <ImageDiv>
                    <Img></Img>
                </ImageDiv>

                <Name>
                    <h3>{first_name} {last_name}</h3>
                </Name>

                <NumberDiv>
                    <p>{number}</p>
                    <p>{email}</p>
                </NumberDiv>

                <Socials>
                    <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href={twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                    <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                </Socials>

                <DeleteDiv>
                    <Button border="none" background="#FF2A5D"> <i className="far fa-trash-alt fa-lg"></i> Delete</Button>
                </DeleteDiv>
            </DetailSection>
        </Container>

        <Container>
            <Small>
                <p>Update {first_name}'s contact</p>
            </Small>
            <Form>
                <Input
                    placeholder="First name"
                    type="text"
                    // onChange={handleChange}
                    // value={values.first_name}
                    // onBlur={handleBlur}
                    name="first_name" />
                {/* <small>{touched.first_name && errors.first_name ? errors.first_name : null}</small> */}
                <Input
                    placeholder="Last name"
                    type="text"
                    // onChange={handleChange}
                    // value={values.last_name}
                    // onBlur={handleBlur}
                    name="last_name" />
                {/* <small>{touched.last_name && errors.last_name ? errors.last_name : null}</small> */}
                <Input
                    placeholder="Email"
                    type="email"
                    // onChange={handleChange}
                    // value={values.email}
                    name="email" />
                <Input
                    placeholder="Phone number"
                    type="tel"
                    // onChange={handleChange}
                    // value={values.phone}
                    name="phone" />
                <Input
                    placeholder="Facebook"
                    type="text"
                    // onChange={handleChange}
                    // value={values.facebook}
                    name="facebook" />
                <Input
                    placeholder="Instagram"
                    type="text"
                    // onChange={handleChange}
                    // value={values.instagram}
                    name="instagram" />
                <Input
                    placeholder="Twitter"
                    type="text"
                    // onChange={handleChange}
                    // value={values.twitter}
                    name="twitter" />
                <Input
                    placeholder="Linkedin"
                    type="text"
                    // onChange={handleChange}
                    // value={values.linkedin}
                    name="linkedin" />
                <Input
                    placeholder="State"
                    type="text"
                    // onChange={handleChange}
                    // value={values.state}
                    name="state" />
                <Input
                    placeholder="User image"
                    type="file"
                    // onChange={handleChange}
                    // value={values.avatar}
                    name="avatar"
                    id="coverImage"
                />
                <Button
                    background="#fff"
                    color="#525252"
                    type="submit">Update Contact</Button>
            </Form>

        </Container>

        <Container>
            <Small>
                <p>Send mail to {first_name}</p>
            </Small>
            <Form>
                <Input placeholder="Subject"/>
                <TextArea placeholder="Message"></TextArea>
                    <Button > <i class="far fa-paper-plane"></i> Send mail</Button>
            </Form>
        </Container>
    </Body>
    </>
}

export default DetailPage