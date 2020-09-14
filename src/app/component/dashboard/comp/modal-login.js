import { Modal, Spin } from "antd";
import React, { useState } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const LoginModal = ({ visible, setVisible }) => {
  const onCancel = () => {
    setVisible(!visible);
  };
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <Modal
      className="modal-login"
      visible={visible}
      onCancel={onCancel}
      title="Đăng nhập"
      autoFocus={false}
    >
      <div className="login-form">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
