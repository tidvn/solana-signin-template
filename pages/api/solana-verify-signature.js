import nacl from "tweetnacl";
import bs58 from 'bs58'


export default async function handler(
  req,
  res
) {
  const message = req.body.message; // this is only for demo purposes
  const signature = req.body.signature;
  const publicKey = req.body.publicKey;

  // do: get 'nonce' from user (database) using 'userAddress'
  const signatureUint8 =  bs58.decode(signature)
  const nonceUint8 = new TextEncoder().encode(message);
  const pubKeyUint8 =  bs58.decode(publicKey);


  const result = nacl.sign.detached.verify(nonceUint8, signatureUint8, pubKeyUint8)

  console.log(result)

  res.status(200).json({ result });
}
