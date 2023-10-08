import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    .field{
    
    display: flex;
    align-items: center;
    };

    input {
        border: 1px solid #0D0D0D;
        border-radius: 15px;
        padding: 16px;
        margin: 20px 0;
        background: #262626;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        display: flex;
        width: 137vh;
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