import React from 'react';
import styled from 'styled-components';

function User(props) {
    return(
        <UserDiv>
            <img src={props.data.avatar_url}/>
            <UserInnerDiv>
                <h1>User Name: {props.data.login}</h1>
                <p>Followers: {props.data.followers}</p>
            </UserInnerDiv>
        </UserDiv>
    );
}

export default User;

const UserDiv = styled.div`
    border: 1px solid silver;
    border-radius: 50px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
        width: 50%;
    }
`

const UserInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
`