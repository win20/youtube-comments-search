import {promises as fs} from 'fs';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const basePath =
    config.public.env === 'prod'
    ? config.publicFolderPath
    : 'public/';

  const defaultData = { searchCount: 0 };

  try {
    const data = await fs.readFile(`${basePath}data.json`);
    const dataJson = JSON.parse(data.toString());
    return dataJson;

  } catch (error) {
    return defaultData;
  }
});
