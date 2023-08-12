import {promises as fs} from 'fs';

export default defineEventHandler(async (event) => {
  const data = await fs.readFile('data.json');
  let dataJson = JSON.parse(data.toString());

  dataJson.searchCount = dataJson.searchCount + 1;

  await fs.writeFile('data.json', JSON.stringify(dataJson, null, 2));

  return dataJson;
});