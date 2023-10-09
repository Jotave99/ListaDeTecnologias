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

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        border-radius: 9px;
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