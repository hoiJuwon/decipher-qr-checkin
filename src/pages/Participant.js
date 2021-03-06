import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import creds from "../data/.key.js";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

/* here goes util function, too lazy to export and make it module.... */
const setUserNameToLocalStorage = (userName) => {
  window.localStorage.setItem("userName", userName);
};

const setIdToLocalStorage = () => {
  const id = uuidv4();
  window.localStorage.setItem("id", id);
};

const getUserNameFromLocalStorage = () => {
  return window.localStorage.getItem("userName");
};

const getIdFromLocalStorage = () => {
  return window.localStorage.getItem("id");
};

const Container = styled.div`
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  width: 85%;
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: white;
    text-align: left;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    opacity: 0.7;
    color: white;
    text-align: left;
  }
  p {
    font-size: 12px;
    opacity: 0.7;
    color: white;
    text-align: left;
  }
`;

const NameWrapper = styled.div`
  margin-top: 100px;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    outline: none;
    color: white;
    border: 1px solid white;
    border-radius: 3px;
    background: transparent;
    width: 95%;
    padding-left: 10px;
    height: 47px;
    font-size: 18px;
    margin-bottom: 40px;
  }
  ::placeholder {
    opacity: 0.7;
    padding-left: 10px;
    font-size: 18px;
  }

  button {
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #00244e;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 23px;
    width: 100%;
    height: 63px;
  }
`;

const QRContainer = styled.div`
  border-radius: 10px;
  background-color: #00244e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  padding: 10px;
  margin-bottom: 30px;
`;

const RegisterBtn = styled.button`
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: 180px;
  height: 45px;
  border-radius: 35px;
  background-color: #00244e;
  border: none;
`;

function Participant() {
  const [isNameRegistered, setIsNameRegistered] = useState(false);
  const [inputs, setInputs] = useState({
    userName: "",
  });
  const [isQRGenerated, setIsQRGenerated] = useState(false);
  const [qrData, setQrData] = useState("");

  const { userName } = inputs;

  useEffect(() => {
    const userName = getUserNameFromLocalStorage();
    const id = getIdFromLocalStorage();
    if (!id || id.length === 0) {
      setIdToLocalStorage();
    }
    if (userName && userName.length !== 0 && id && id.length !== 0) {
      setIsNameRegistered(() => true);
      generateQrHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const generateQrHandler = () => {
    // TODO : generateQr with userName
    const userName = getUserNameFromLocalStorage();
    let id = getIdFromLocalStorage();
    if (!id || id.length === 0) {
      setIdToLocalStorage();
    }
    id = getIdFromLocalStorage();
    const data = {
      id: id,
      userName: userName,
    };
    
    setIsQRGenerated(() => true);

    const qrCode = require('qrcode');
    const base64 = require('base-64');
    const utf8 = require('utf8');

    var bytes = utf8.encode(JSON.stringify(data));
    var encoded = base64.encode(bytes);

    qrCode.toDataURL(encoded, {
      errorCorrectionLevel: 'H'
    }, (err, url) => {
      setQrData(() => url);
    });
  };

  const registerUserName = () => {
    setInputs({
      ...inputs,
      userName: "",
    });
    setUserNameToLocalStorage(userName);
    setIsNameRegistered(() => true);
    generateQrHandler();
  };

  const clearUserName = () => {
    window.localStorage.clear();
    setIsNameRegistered(() => false);
    setIsQRGenerated(() => false);
    setQrData(() => "");
  };

  return (
    <Container>
      <InfoWrapper>
        <h1>???????????? QR ?????????</h1>
        <h2>1. ????????????</h2>
        <h2>2. ???????????? ??????????????? QR ?????????</h2>
        <p>* ???????????? ?????? ?????? ??? ????????? ????????? ???????????????.</p>
        
        {/* <image src="" alt="" style="width:100px; height:100px;"></image> */}
        
      </InfoWrapper>
      {!isNameRegistered && (
        <NameWrapper>
          <input
            placeholder="????????? ???????????????"
            onChange={onChange}
            value={userName}
            name="userName"
          />
          <button type="submit" onClick={registerUserName}>
            ????????????
          </button>
        </NameWrapper>
      )}
      {isQRGenerated && (
        <>
          {/* <QRContainer>
            <QRCode value={qrData} />
          </QRContainer> */}

          <img src={qrData} style={{ fgColor: "#FFFFFF", bgColor: "transparent", marginBottom: 30 }}/>
          <RegisterBtn onClick={clearUserName} type="submit">
            ?????? ???????????????
          </RegisterBtn>
        </>
      )}
    </Container>
  );
}

export default Participant;
