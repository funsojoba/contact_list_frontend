import Card from "../../components/card"
import AddContact from "../../components/addContact"
import Input from '../../components/input'
import UserCard from "../../components/userCard"

import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import getContact from "../../redux/actions/contacts/contact.action.js.js"

import {
    Avatar,
    Icon,
    CardWrapper,
    Header,
    CounterDiv,
    HeaderTitle,
    CountContainer,
    SearchDiv,
    NoContact
} from './styles'


const Contact = ({ contactsData, getContact }) => {
    const [toggle, setToggle] = useState(false)
    const [toggleShow, setShow] = useState(false)

    useEffect(() => { getContact() }, [getContact])

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
        <Header>
            <HeaderTitle>
                <p>Contacts</p>
                <SearchDiv>
                    <Input type="search" placeholder="search" />
                </SearchDiv>
            </HeaderTitle>

            <CountContainer>
                <CounterDiv>{contactsData.count}</CounterDiv>
            </CountContainer>
        </Header>

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

        <Icon onClick={handleToggle}>
            <i className="fas fa-plus fa-lg"></i>
        </Icon>

        <UserCard show={toggleShow ? '1' : '0'} logOut={logOut} />
        <Avatar onClick={handleShow}></Avatar>
    </>
}

const mapStateToProps = state => ({
    contactsData: state.contactReducer.contacts
})

const mapDispatchToProps = dispatch => ({
    getContact: () => dispatch(getContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)