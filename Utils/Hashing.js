var bcrypt = require("bcryptjs");

const createHash = (data) => bcrypt.hashSync(data, 10);
const compareHash = (data,hash) => bcrypt.compareSync(data, hash);

module.exports = { createHash, compareHash };
