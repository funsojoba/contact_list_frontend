import { Body, Div, Image, Container, H3, Paragraph } from './style'
import Button from '../../components/button'
import Header from '../../components/navbar'

import { connect } from 'react-redux'

import fetchUser from '../../redux/actions/contacts/user.action'

const UserProfile = ({ getUser, userData }) => {
    const { first_name, last_name, email } = userData.user

    const firstInitial = first_name.slice(0,1)
    const lastInitial = last_name.slice(0,1)
    return <Body>
        <Header count={first_name && last_name ? (firstInitial + lastInitial ): null} />
        <Div>
            <Container>
                <Image background={userData.user.avatar}></Image>
            </Container>

            <Container column="column">
                <H3>{first_name} {last_name}</H3>
                <Paragraph>{email}</Paragraph>
            </Container>

            <Container>
                <Button>update profile</Button> &nbsp;
                <Button background="#fff" color="#10BDA8">reset password</Button>
            </Container>
        </Div>
    </Body>
}

const mapStateToProps = (store) => ({
    userData: store.userReducer
})

const mapDispatchToProps = dispatch => ({
    getUser: dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)