import Card from "../../components/card"
import AddContact from "../../components/addContact"
import UserCard from "../../components/userCard"
import Avatar from "../../components/avatar"
import Header from "../../components/navbar"

import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import getContact from "../../redux/actions/contacts/contact.action.js.js"
import fetchUser from "../../redux/actions/contacts/user.action"

import {
    Icon,
    CardWrapper,
    NoContact,
    Wrapper
} from './styles'


const Contact = ({ contactsData, getContact, userData, getUser }) => {
    const [toggle, setToggle] = useState(false)
    const [toggleShow, setShow] = useState(false)

    useEffect(() => { getContact() }, [getContact])
    useEffect(() => { getUser() }, [getUser])

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleClose = () => {
        setToggle(false)
    }

    const handleShow = () => {
        setShow(!toggleShow)
    }

    const logOut = ()=>{
        localStorage.clear()
        return <Redirect to='/'/>
    }

    return <>
        <AddContact translate={toggle ? '0px' : '-500px'} handleClose={handleClose} />
        <Header count={contactsData.count}>
        </Header>
        <Wrapper>
        {contactsData.count < 1 ? (
            <CardWrapper>
                <NoContact>You don't have any contacts yet</NoContact>
            </CardWrapper>
            ) :(
        <CardWrapper>
            {contactsData && contactsData.data && contactsData.data.map(card => (
                <Card key={card.id}
                    firstname={card.first_name}
                    lastname={card.last_name}
                    email={card.email}
                    phone={card.phone}
                    facebook={card.facebook}
                    instagram={card.instagram}
                    linkedin={card.linkedin}
                    twitter={card.twitter}
                    avatar={card.avatar} />))
            }
        </CardWrapper>
        )}
        </Wrapper>
        <Icon onClick={handleToggle}>
            <i className="fas fa-plus fa-lg"></i>
        </Icon>

        <UserCard show={toggleShow ? '1' : '0'} logOut={logOut} />
        <Avatar background={`${userData.avatar}`} onClick={handleShow}></Avatar>
    </>
}

const mapStateToProps = state => ({
    contactsData: state.contactReducer.contacts,
    userData : state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
    getContact: () => dispatch(getContact()),
    getUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)