import React, { Dispatch, SetStateAction } from 'react';
import OtpInput from 'react-otp-input';

type OtpInputProps = {
  userToken: string;
  setUserToken: Dispatch<SetStateAction<string>>;
};

export const OtpInputComp: React.FC<OtpInputProps> = ({
  userToken,
  setUserToken,
}) => {
  return (
    <OtpInput
      value={userToken}
      onChange={setUserToken}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        height: '3em',
        width: '3em',
      }}
    />
  );
};
