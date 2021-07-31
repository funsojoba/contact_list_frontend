import Button from "../../components/button"
import Input from "../../components/input"
import Img from "../../components/img"

import { Link } from "react-router-dom"

import { Body, Div, SmallText,Circle, Paragraph, Section, Form, Image} from './style'
import { ErrorMsg } from "../register/registerStyles"

import { Formik } from "formik"
import validate from "../register/register.validate"


const Login = () => {
    return <Body>
        <Div>
            <Circle />

            <Paragraph>Welcome back</Paragraph>
            <Section>

                <Formik
                validationSchema={validate}
                initialValues={{
                    email:"",
                    password:""
                }}
                >
                {({touched, errors, values, handleBlur, handleChange, handleSubmit})=>(
                    <Form onSubmit={handleSubmit}>
                        <Input 
                            placeholder="email" 
                            type="email"
                            value={values.email}
                            name="email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        <ErrorMsg>{touched.email && errors.email ? errors.email : null}</ErrorMsg>
                        <Input 
                            placeholder="password" 
                            type="password" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            name="password"
                            />
                        <ErrorMsg>{touched.password && errors.password ? errors.password : null}</ErrorMsg>
                        
                        <Button>Login</Button>
                    </Form>

                )}
                </Formik>

                <Image>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627383456/contact_api/authpage/undraw_Login_re_4vu2_voo7zq.png" alt="login page" />
                </Image>
            </Section>

            <SmallText>Don't have an account? &nbsp; <Link to="/signup">Sign up</Link></SmallText>
        </Div>
    </Body>
}

export default Login