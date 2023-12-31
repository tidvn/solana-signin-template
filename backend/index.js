import axios from "axios";

const instance = axios.create({
  baseURL: `/api/`,
  withCredentials: true,
});

export async function post(route, body = {}) {
  return await instance
    .post(`${route}`, body)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function backendGetNonce(userAddress) {
  return await post(`get-nonce`, { userAddress });
}

export async function backendVerifySignature(nonce, userAddress, signature) {
  return await post(`verify-signature`, { nonce, userAddress, signature });
}
export async function solanaGetMessage(publicKey) {
  return await post(`solana-get-message`, { publicKey });
}

export async function solanaVerifySignature(message, signature, publicKey) {
  return await post(`solana-verify-signature`, { message, signature, publicKey });
}