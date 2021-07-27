import styled from 'styled-components'


const InputDiv = styled.input`
    display:inline-block;
    padding:15px 25px;
    color: #10BDA8;
    background:#fff;
    border-radius:12px;
    border:solid 1px rgba(10, 136, 121, .3);
    transition: all ease-in 300ms;
    width:100%;
    box-sizing:border-box;
    margin-bottom:15px;
    outline:none;

    &:focus{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3)
    }
`

const Input = ({ placeholder, hancleChange, value, type }) => {
    return <InputDiv 
        onChange={hancleChange} 
        placeholder={placeholder}
        value={value}
        type={type} />
}

export default Input