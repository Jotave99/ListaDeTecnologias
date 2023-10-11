import styled from "styled-components";

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #262626;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input[type="checkbox"]{
        appearance: none;
        width: 25px;
        height: 25px;
        margin-right: 5px;
        border: 2px solid #4EA8DE;
        border-radius: 100%;
        outline: none;
    }

    input[type="checkbox"]:checked {
        background-color: #8284FA;
        border-color: #8284FA;
    }

    img {
        margin-left: 940px;
        position: fixed;
    }

    label {
        color: #F2F2F2;
        text-decoration: ${done ? 'line-through' : 'inital'};
    }
`
));