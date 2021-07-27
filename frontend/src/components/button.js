import styled from 'styled-components'


const ButtonDiv = styled.button`
    padding:15px 25px;
    background: ${props => props.background ? props.backgound : "#10BDA8"};
    color:${props => props.color ? props.color : "#fff"};
    letter-spacing: 1.3;
    border-radius:12px;
    border:none;
    transition: all ease-in 300ms;
    width:100%;
    box-sizing:border-box;
    cursor:pointer;

    &:hover{
        transform:translateY(-5px);
        box-shadow:0px 5px 30px rgba(10, 136, 121, .3)
    }
`

const Button = ({children, handleClick, background, color})=>{
    return <ButtonDiv 
        background={background} 
        onClick={handleClick}
        color={color}>
        {children}
    </ButtonDiv>
}

export default Button