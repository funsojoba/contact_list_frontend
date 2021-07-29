import styled from "styled-components"
import Card from "../components/card"
import AddContact from "../components/addContact"
import Input from '../components/input'
import UserCard from "../components/userCard"
import { useState } from "react"

import { connect } from "react-redux"
import PropTypes from 'prop-types'

import { getContact } from "../redux/actions/contacts/contact.action.js"

const Avatar = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    background:url("https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627397427/contact_api/user_uaonlt.png");
    right: 20px;
    bottom:20px;
    border:solid 3px #fff;
    border-radius:50%;
    background-size:cover;
    background-position:center;
    transition: all ease 150ms;
    cursor:pointer;
    &:hover{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
        transform:scale(1.1)
    }
`

const Icon = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    left: 20px;
    bottom:20px;
    background:#F1F3FF;
    border:solid 3px #FFF;
    border-radius:50%;
    transition: all ease 150ms;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    color:#10BDA8;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .1);

    &:hover{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
        transform:scale(1.1)
    }
`

const CardWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:20px;

    justify-content: space-around;
`

const Header = styled.div`
    background:#fff;
    box-shadow:0px 5px 30px rgba(10, 136, 121, .3);
    color:#10BDA8;
    position:relative;
    padding:20px;
    display:flex;
    justify-content:space-between;
    p{
        @media only screen and (max-width:750px){
        display:none;
    }
    }

`
const CounterDiv = styled.div`
    background:#10BDA8;
    width:50px;
    height:50px;
    border-radius:20px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderTitle = styled.div`
    flex:2;
    display:flex;
    justify-content: space-around;
    align-items:center;
`
const CountContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`

const SearchDiv = styled.div`
    display:flex;
    align-items: center;
`


const Contact = ()=>{
    const [toggle, setToggle] = useState(false)
    const [toggleShow, setShow] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    const handleClose = ()=>{
        setToggle(false)
    }

    const handleShow = ()=>{
        setShow(!toggleShow)
    }

    return <>
        <AddContact translate={toggle ? '0px' : '-500px'} handleClose={handleClose}/>
        <Header>
            <HeaderTitle>
                <p>Contacts</p>
                <SearchDiv>
                    <Input type="search" placeholder="search" />
                </SearchDiv>
            </HeaderTitle>
            <CountContainer>
                <CounterDiv>12</CounterDiv>
            </CountContainer>
        </Header>
        <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardWrapper>

        <Icon onClick={handleToggle}>
            <i className="fas fa-plus fa-lg"></i>
        </Icon>

        <UserCard show={toggleShow ? '1' : '0'}/>
        <Avatar onClick={handleShow}></Avatar>
    </>
}

const mapStateToProps = state => ({
    contacts:state.contacts.contacts
})

export default connect(mapStateToProps, {getContact})(Contact)