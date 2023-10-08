import styled from "styled-components";

export const Container = styled.div`
    background-color: #0D0D0D;
    color: #797A81;
    min-height: 30vh;
    margin: -20px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 20px;
    align-items: center;
    margin-top: -70px;

    .tec {
        color: #4EA8DE;
        font-family: 'Inter', sans-serif;
        padding: 5px;
        display: flex;
        align-items: center;
    };

    .tecConcluidas {
        margin-left: 695px;
        color: #8284FA;
    }

    .tecNumbers {
        border: 1px solid #333;
        border-radius: 15px;
        margin-left: 3px;
        background: #262626;
        color: #fff;
    }
`;

export const Header = styled.h1`
    color: #4EA8DE;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 40px;
`;