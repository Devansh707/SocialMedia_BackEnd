import { hashSync, compareSync } from "bcryptjs";

const createHash = (data) => hashSync(data, 10);
const compareHash = (data,hash) => compareSync(data, hash);

export default { createHash, compareHash };
