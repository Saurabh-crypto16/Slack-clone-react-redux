import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACo
          CAMAAABt9SM9AAAA7VBMVEX///82xfHrsi0ttn7fHVoqw/HrsSjrsCCW2fH
          eA1LplKmd1r0es3ju0JQqtX7bEVfnuVRbyOzdAE2i4fjU7uL12KDu0Zn3y9f
          dAEvqrQ7fFFam3vMes3lfwpe24/Ts9vK64c/utMP11996y6fm9Pl20O/0+fu
          w3smE1PDf8emx4fLqvV71587sxnjx27LquEr59OvkbY367vH89vjtyYLsp7j
          w16j23uVUx+/M6/Zsxp+U07ZHvIra8Pe14MzF6PXrnLD04b/37+Dme5feK2P
          hVn3hSXTkZIbvusfgQW/fT3jyy9T12eDrwGnoh6Bpl7c9AAAI5ElEQVR4nO2
          ca1viOhCAQYVaqbvCUZdWUFjvNxTEOx5v6Lp61v//c06rUtLmMk1J21nI+2U
          /7NDHvs8khGQmuZxGM25srM6WyxflzdnLLTB2sbRe79WvrhtrKfxh+Fi9KLj
          k83nvn80bUeju+rRl1WrT0zXLsuqNlP5APKzmPU8+hUJ5gxe6dmW5noZY040
          U/9Ds2SoHVH3qWmHHbgdVfei6gsft2HCTp1x5ujZZsetWWJVnq7eb9t+cFTc
          sVRxbTFfu5FWbEFtbbFWerZ1w7DXblcdkjER6vhraWg2GNviuavVs/vp02eO
          7cm0F8mWLq8qbt7azeoP04A9CeiAKBqFHVq+QHiuixAqm1prY1QSk1oXQVZ5
          cbZXEsqZ72b1FOvCWDUOGsT2xq2lr3JcPwCgkx+EWkFjjPw43QVmXg9BFSFZ
          tPcs3SQFgynJl7Q1C/4VkTY/7UgtylS/MDkKh+X38Z3ilsr5l+SYpoGVJUNa
          yorMDfhtqWT6rWlZ0NrQsCQS7WVpWmFstSwJo20HLIgD2HbSsALNCW1pWEOE
          cr2WFENnSssIIdrW0LIq9Ak+XlkWztcPRpWWx2FgpF1hoWWy2Lm9X/gnj78F
          rWRJoWRJoWRJoWRJoWRJoWRJoWRJoWRJMgKyN1dnNsgybOyvs9oq4stYa1+v1
          +noJfefK3qDHJDofH9hh9FfEk7Xds7zWFRfL6v2b+AvHZ0XSE2lskyrVjiOrZ
          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
          AAAASUVORK5CYII="
          alt=""
        />
        <h1> Sign In</h1>
        <p>Saurabh.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 80px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
