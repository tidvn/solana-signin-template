import * as crypto from 'crypto';
export default async function handler(
  req,
  res
) {
  // do: if new user, create new user model in the database

  function md5Hash() {
    const md5sum = crypto.createHash('md5');
    md5sum.update((Math.floor(Math.random() * 1000000)).toString());
    return md5sum.digest('hex');
  }
const message = "login with key: " + md5Hash();
  // do: store 'nonce' in user model in the database

  // do: return 'nonce'
  res.status(200).json({ message  });
}
