import Input from "../../../components/input";
import TextArea from "../../../components/textArea";
import Button from "../../../components/button";
import Header from "../../../components/navbar";
import DeleteModal from "../../../components/deleteModal";
import { Formik } from "formik";

import { connect } from "react-redux";
import { useState } from "react";

import { Body, Container, DetailSection, ImageDiv, Name, NumberDiv, Socials, DeleteDiv, Form, Small, Arrow} from './detailStyle'


const DetailPage = ({ detail }) => {
    const previous = ()=>{
        window.history.back()
    }

    const [toggleModal, setToggleModal] = useState(false)

    const toggle = ()=>{
        setToggleModal(!toggleModal)
    }

    const firstInitial = detail.first_name.slice(0, 1).toUpperCase()
    const lastInitial = detail.last_name.slice(0, 1).toUpperCase()

    return <>
        <Header count={firstInitial + lastInitial} />
        <DeleteModal name={detail.first_name} display={toggleModal ? 'flex' : 'none'} close={()=> setToggleModal(false)}></DeleteModal>
    <Body>
            <Arrow onClick={previous}>
                <i className="fas fa-long-arrow-alt-left fa-lg"></i>
        </Arrow>
        <Container>
            <DetailSection>
                <ImageDiv avatar={detail.avatar}/>

                <Name>
                    <h3>{detail.first_name} {detail.last_name}</h3>
                </Name>

                <NumberDiv>
                    <p>{detail.phone}</p>
                    <p>{detail.email}</p>
                </NumberDiv>

                <Socials>
                        {detail.facebook ? <a href={detail.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a> : null}
                        {detail.twitter ? <a href={detail.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a> : null}
                        {detail.instagram ? <a href={detail.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a> : null}
                        {detail.linkedin ? <a href={detail.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a> : null}
                </Socials>

                <DeleteDiv>
                        <Button border="none" background="#FF2A5D" onClick={toggle}> <i className="far fa-trash-alt fa-lg"></i> Delete</Button>
                </DeleteDiv>
            </DetailSection>
        </Container>

        <Container>
            <Small>
                <p>Update {detail.first_name}'s contact</p>
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
                    type="submit">Update Contact</Button>
            </Form>

        </Container>

        <Container>
            <Small>
                <p>Send mail to {detail.first_name}</p>
            </Small>
            <Formik
            initialValues={{
                subject:"",
                message:""
            }}
            >

            </Formik>
            <Form>
                <Input placeholder="Subject"/>
                <TextArea placeholder="Message"></TextArea>
                    <Button > <i class="far fa-paper-plane"></i> Send mail</Button>
            </Form>
        </Container>
    </Body>
    </>
}

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.id
    return {
        detail : state.contactReducer.contacts.data.find(detail => detail.id === id)
    }
}

export default connect(mapStateToProps)(DetailPage)