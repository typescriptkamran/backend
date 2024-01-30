import { promises as fs } from 'fs';

async function getData() {
  const file = await fs.readFile(process.cwd() + '/app/products.json', 'utf8');

  return JSON.parse(file)
}

const Data = getData();
export { Data }