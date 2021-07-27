import styled from "styled-components";

const Container = styled.div`
    margin:50px 10px 0;
`

const Div = styled.div`
    padding:30px;
    position:relative;
    border-radius:30px;
    width:300px;
    height:auto;
    box-shadow: 0 6px 23px rgba(0,0,0,.06);

    @media only screen and (max-width:750px){
        width:250px;
    }

    @media only screen and (max-width:400px){
        width:95%;
    }
`

const ImageDiv = styled.div`
    width: 180px;
    height:180px;
    border-radius:30px;
    margin:auto;
    background:url("https://res.cloudinary.com/ddl2pf4qh/image/upload/v1627230443/contact_api/ekebxsprc6m8c2oqgkvs.jpg");
    background-size:cover;
    background-position: center;
`
const DetailDiv = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
`
const Name = styled.div`
    border-bottom: solid 1px #D1D1D1;
    h3{
        color:#525252;
    }
    `

const Numbers = styled.div`
    border-bottom: solid 1px #D1D1D1;

    p{
        color:#525252;
    }

`
const Socials = styled.div`
    border-bottom: solid 1px #D1D1D1;
    padding:10px;
    display:flex;
    justify-content:space-around;

    a{
        color:#525252;
        display:inline-block;
    }
`
const Actions = styled.div`
    padding:10px;
    display:flex;
    justify-content:space-around;

    #mail{
        color:#706DFF;
    }
    #edit{
        color:#10BDA8;
    }
    #delete{color:#FF2B5E}
`



const Card = ()=>{
    return <Container>
    <Div>
        <ImageDiv/>

        <DetailDiv>
            <Name><h3>David Kingston</h3></Name>
            <Numbers>
                <p>+234 545 23345</p>
                <p>davidkingston@email.com</p>
            </Numbers>
            <Socials>
                <a href="/"><i className="fab fa-facebook"></i></a>
                <a href="/"><i className="fab fa-twitter-square"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-linkedin"></i></a>
            </Socials>

            <Actions>
                <i id="mail" className="fas fa-mail-bulk fa-lg"></i>
                <i id="edit" className="fas fa-edit fa-lg"></i>
                <i id="delete" className="fas fa-trash fa-lg"></i>
            </Actions>
        </DetailDiv>
    </Div>
    </Container>
}

export default Card