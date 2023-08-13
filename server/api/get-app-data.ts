import {promises as fs} from 'fs';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const basePath =
    config.public.env === 'prod'
    ? config.publicFolderPath
    : '';

  const data = await fs.readFile(`${basePath}data.json`);
  const dataJson = JSON.parse(data.toString());

  return dataJson;
});
