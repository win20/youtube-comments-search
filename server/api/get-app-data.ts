import {promises as fs} from 'fs';

export default defineEventHandler(async (event) => {
  const data = await fs.readFile('data.json');
  const dataJson = JSON.parse(data.toString());

  return dataJson;
});
