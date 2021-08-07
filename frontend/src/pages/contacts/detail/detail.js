import Input from "../../../components/input";
import TextArea from "../../../components/textArea";
import Button from "../../../components/button";
import Header from "../../../components/navbar";
import DeleteModal from "../../../components/deleteModal";
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux";
import { useState } from "react";
import sendMail from "../../../redux/actions/contacts/sendMail.action";
import updateContact from "../../../redux/actions/contacts/updateContact.action";

import { Body, Container, DetailSection, ImageDiv, Name, NumberDiv, Socials, DeleteDiv, Form, Small, Arrow, ErrMsg } from './detailStyle'
import validateMail from "./validateMail";

const DetailPage = ( { detail, sendMail, match, updateContact }) => {
    let id = match.params.id
    const previous = () => {
        window.history.back()
    }

    const [toggleModal, setToggleModal] = useState(false)

    const toggle = () => {
        setToggleModal(!toggleModal)
    }

    const firstInitial = detail.first_name.slice(0, 1).toUpperCase()
    const lastInitial = detail.last_name.slice(0, 1).toUpperCase()
    return <>
        <ToastContainer />
        <Header count={firstInitial + lastInitial}  />
        <DeleteModal name={detail.first_name} display={toggleModal ? 'flex' : 'none'} close={() => setToggleModal(false)}></DeleteModal>
        <Body>
            <Arrow onClick={previous}>
                <i className="fas fa-long-arrow-alt-left fa-lg"></i>
            </Arrow>
            <Container>
                <DetailSection>
                    <ImageDiv avatar={detail.avatar} />

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
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                        facebook: "",
                        instagram: "",
                        twitter: "",
                        linkedin: "",
                        state: "",
                        avatar: "",
                    }}
                    onSubmit={
                        async (values) =>{
                            await updateContact(values, id)
                            console.log(values)
                        }
                    }
                >
                    {({handleBlur, handleChange, handleSubmit, errors, values, touched})=>(

                    <Form onSubmit={handleSubmit}>
                        <Input
                            placeholder={detail.first_name}
                            type="text"
                            onChange={handleChange}
                            value={values.first_name}
                            onBlur={handleBlur}
                            name="first_name" />

                        <Input
                            placeholder={detail.last_name}
                            type="text"
                            onChange={handleChange}
                            value={values.last_name}
                            onBlur={handleBlur}
                            name="last_name" />

                        <Input
                            placeholder={detail.email ? detail.email : "email"}
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            name="email" />
                        <Input
                            placeholder={detail.phone ? detail.phone : "phone"}
                            type="tel"
                            onChange={handleChange}
                            value={values.phone}
                            onBlur={handleBlur}
                            name="phone" />
                        <Input
                            placeholder={detail.facebook ? detail.facebook : "facebook"}
                            type="text"
                            onChange={handleChange}
                            value={values.facebook}
                            onBlur={handleBlur}
                            name="facebook" />
                        <Input
                            placeholder={detail.instagram ? detail.instagram : "instagram"}
                            type="text"
                                onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.instagram}
                            name="instagram" />
                        <Input
                            placeholder={detail.twitter ? detail.twitter : "twitter"}
                            type="text"
                            onChange={handleChange}
                            value={values.twitter}
                            onBlur={handleBlur}
                            name="twitter" />
                        <Input
                            placeholder={detail.linkedin ? detail.linkedin : "linkedin"}
                            type="text"
                            onChange={handleChange}
                            value={values.linkedin}
                            onBlur={handleBlur}
                            name="linkedin" />
                        <Input
                            placeholder={detail.state ? detail.state : "state"}
                            type="text"
                            onChange={handleChange}
                            value={values.state}
                            onBlur={handleBlur}
                            name="state" />
                        <Button
                            type="submit">Update Contact</Button>
                    </Form>
                    )}
                </Formik>

            </Container>

            <Container>
                <Small>
                    <p>Send mail to {detail.first_name}</p>
                </Small>
                <Formik
                    initialValues={{
                        subject: "",
                        message: ""
                    }}
                    validationSchema={validateMail}
                    onSubmit={ async (values) => {
                        await sendMail(values, id)
                    }}
                >
                    {({ values, errors, handleBlur, handleChange, handleSubmit, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                value={values.subject}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Subject"
                                name="subject"
                                type="text"
                            />
                            <ErrMsg>{touched.subject && errors.subject ? errors.subject : null}</ErrMsg>
                            <TextArea
                                placeholder="Message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="message"></TextArea>
                            <ErrMsg>{touched.message && errors.message ? errors.message : null}</ErrMsg>

                            <Button type="submit"> <i className="far fa-paper-plane"></i> Send mail</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Body>
    </>
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        detail: state.contactReducer.contacts.data.find(detail => detail.id === id),
        sendMailDetail: state.sendMailReducer,
        updateContact: state.updateContactReducer
    }
}

export default connect(mapStateToProps, { sendMail, updateContact })(DetailPage)
