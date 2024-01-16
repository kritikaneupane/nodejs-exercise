const bcryptjs = require("bcryptjs");

const encryptPw = (string) => {
  return bcryptjs.hashSync(string, 10);
};

const hashedPw = encryptPw("password");
console.log({ hashedPw });

const comparePw = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};

const isValidPw = comparePw("password", hashedPw);
console.log({ isValidPw });
