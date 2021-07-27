import styled from 'styled-components'
import Input from './input'
import Button from './button'


const Div = styled.div`
    position:relative;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;

`
const Icon = styled.div`
    width:30px;
    height:30px;
    color:#fff;
    background:#FF2B5E;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    cursor:pointer;
    transition:ease-in 200ms ;
    &:hover{
        transform:rotate(90deg)
    }
`
const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    width:450px;
    background:rgba(16, 189, 168, .9);
    backdrop-filter: blur(10px);
    box-shadow:5px 0 30px rgba(16, 189, 168, .9);
    height:100vh;
    overflow:scroll;
    transition:all ease-in 300ms;
    @media only screen and (max-width:750px){
        width:90%;
    }
    transform:translateX(${props => props.translate ? props.translate : "-500px"})

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
    padding:30px;
    @media only screen and (max-width:750px){
        padding:10px 30px;
    }
`
const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;
    background:#fff;
    width:100%;
    p{
        color:#10BDA8;
    }
`

const AddContact = ({translate, handleClose})=>{
    return <Container translate={translate}>
    <Div>
        <Header>
        <p>Add contact</p>
        <Icon onClick={handleClose} >
            <i className="fas fa-times fa-lg"></i>
        </Icon>
        </Header>
            <Form>
                <Input placeholder="First name" type="text" />
                <Input placeholder="Last name" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone number" type="tel" />
                <Input placeholder="Facebook" type="text" />
                <Input placeholder="Instagram" type="text" />
                <Input placeholder="Twitter" type="text" />
                <Input placeholder="Linkedin" type="text" />
                <Input placeholder="State" type="text" />
                <Input placeholder="User image" type="file" />
                <Button background="#fff" color="#525252">Add Contact</Button>
            </Form>
    </Div>
    </Container>
}

export default AddContact