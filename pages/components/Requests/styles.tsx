import styled from 'styled-components'

export const RequestsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;

    span {
        border-left: 1px solid var(--text);
        padding-left: 10px ;
        color:  var(--text);
    }

    h1 {
        font-size: 30px;
        color: var(--white);
        font-weight: 400;
        margin-right: 10px;
    }

`

export const ContainerRequests = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 480px;
    background-color: var(--white);
    border-radius: 6px;
`

export const ContainerImg = styled.div`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;

    img {
        border: 4px solid var(--blue);
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const AdditionalInformations = styled.div`
    position: absolute;
    left: 400px;
    width: 200px;
    height: 70px;
    background-color: var(--white);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(-n+2) {
        width: 100%;
        min-height: 10px;
        background-color: #50e485;
        border-radius: 6px 6px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Request = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(74, 74, 74);
    padding: 10px;
    min-height: calc(480px /5);
    position: relative;
    cursor: default;
    transition: 0.4s;

    &:hover {
        background-color: var(--text);
    }
    &:hover ${AdditionalInformations}{
        display: flex;
    }
`

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent; 
    border-right:10px solid var(--white); 
    position: absolute;
    right: 200px;
    top: 20px;
`