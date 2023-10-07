import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    .field{
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    };

    .image{
        margin-right: 5px;
    };

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

    button {
        display: flex;
        padding: 15px;
        margin: 15px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        background: var(--Blue-Dark, #1E6F9F);
        color: #FFF;
    }
`;