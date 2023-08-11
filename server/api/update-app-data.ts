import {promises as fs, writeFile} from 'fs';

export default defineEventHandler(async (event) => {
  const data = await fs.readFile('data.json');
  let dataJson = JSON.parse(data.toString());

  const newVal = 5;

  dataJson.searchCount = newVal;

  await fs.writeFile('data.json', JSON.stringify(dataJson, null, 2));

  return dataJson;
});