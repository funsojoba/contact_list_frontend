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
    margin-bottom:${props => props.bottom ? props.bottom : '15px'};
    outline:none;

    &:focus{
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3)
    }
`

const Input = ({ placeholder, onChange, value, type, name, onBlur, bottom }) => {
    return <InputDiv
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        onBlur={onBlur}
        bottom={bottom} />
}

export default Input