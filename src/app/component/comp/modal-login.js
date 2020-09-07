import { Modal, Spin } from "antd";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import facebook from "../../../assets/images/facebook.svg";
import React, {useState } from "react";

const LoginModal = ({ visible, setVisible }) => {
  const [provider, setProvider] = useState("");

  const responseGoogle = async (response) => {
    setProvider("google");
  };

  const responseFacebook = async (response) => {
    setProvider("facebook");
  };

  const onCancel = () => {
    setVisible(!visible);
  };

  return (
    <Modal
      className="modal-login"
      visible={visible}
      onCancel={onCancel}
      title="Đăng nhập"
      autoFocus={false}
    >
      <Spin>
        <div className="login-form">
          <GoogleLogin
            className="google-btn"
            clientId="75310790920-t6dm6kde8e8ad3slkl3s75uomjrsosam.apps.googleusercontent.com"
            autoLoad={false}
            buttonText="Đăng nhập bằng Google"
            isSignedIn={false}
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
            uxMode="popup"
          />
          <FacebookLogin
            cssClass="face-btn"
            icon={<img src={facebook} alt="" />}
            textButton="Đăng nhập bằng Facebook"
            appId="253037265803319"
            autoLoad={false}
            fields="name, email, picture"
            callback={responseFacebook}
          />
        </div>
      </Spin>
    </Modal>
  );
};

export default LoginModal;
