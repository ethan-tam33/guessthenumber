import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config()
const key = process.env.REACT_APP_OPENAI_API_KEY;

console.log(key);