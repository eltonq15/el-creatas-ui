import CryptoJS from "crypto-js";

export const encrypt = (data: Record<string, any>) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SALT as string
  ).toString();

  return ciphertext;
};

export const decrypt = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(
    data,
    process.env.REACT_APP_SALT as string
  );
  const originalText = bytes.toString(CryptoJS.enc.Utf8);

  return JSON.parse(originalText);
};
