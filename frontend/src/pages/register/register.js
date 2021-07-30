import Button from "../../components/button"
import Input from "../../components/input"
import Img from "../../components/img"
// import { useDispatch } from 'react-redux'

import { Link } from "react-router-dom"
import { Formik } from 'formik'

import { connect } from "react-redux"

import validate from "./register.validate"
import register from "./register"

import {
    Body,
    Div,
    SmallText,
    Circle,
    P,
    Section,
    Form,
    Image,
    ErrorMsg
} from './registerStyles'



const Register = ({ registerData }) => {
    console.log("registerData:", registerData)

    return <Body>
        <Div>
            <Circle />

            <P>Let's get you started</P>
            <Section>
                <Formik
                    initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                            register(values)
                        }}>
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Input
                                placeholder="First name"
                                type="text"
                                name="firstname"
                                value={values.firstname}
                                onChange={handleChange}
                            />
                            <ErrorMsg>{errors.firstname}</ErrorMsg>

                            <Input
                                placeholder="Last name"
                                type="text"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange} />
                            <ErrorMsg>{errors.lastname}</ErrorMsg>

                            <Input
                                placeholder="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange} />
                            <ErrorMsg>{errors.email}</ErrorMsg>

                            <Input
                                placeholder="password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange} />
                            <ErrorMsg>{errors.password}</ErrorMsg>


                            <Button type="submit"> Signup</Button>
                        </Form>
                    )}
                </Formik>

                <Image>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627383456/contact_api/authpage/undraw_teacher_35j2_iu1wxk.png" alt="signup page" />
                </Image>
            </Section>

            <SmallText>Already have an account? &nbsp; <Link to="/login">Login</Link></SmallText>
        </Div>
    </Body>
}

const mapStateToProps = (store) => ({
    registerData: store.registerReducer
})

export default connect(mapStateToProps, { register })(Register)