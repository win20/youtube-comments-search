import * as fs from 'fs';

export default defineEventHandler((event) => {
  let data;

  try {
    data = fs.readFileSync('data.json');
  } catch (error) {
    console.log(error);
    throw error;
  }

  return JSON.parse(data.toString());
});