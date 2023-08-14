import {promises as fs} from 'fs';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const basePath =
    config.public.env === 'prod'
    ? config.publicFolderPath
    : 'public/';

  const data = await fs.readFile(`${basePath}data.json`);
  let dataJson = JSON.parse(data.toString());

  const currentSearchCount = dataJson.searchCount;
  const newVal = currentSearchCount + 1;

  const newData = {
    searchCount: newVal,
  };

  await fs.writeFile(`${basePath}data.json`, JSON.stringify(newData, null, 2));

  return newData;
});