import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

async function convertCsvToJson() {
  const filePath = path.resolve(__dirname, './src/data/dad-a-base.csv');
  const outputPath = path.resolve(__dirname, './src/data/dadjokes.json');

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const jokes: { id: number; joke: string }[] = [];
  let id = 1;

  for await (const line of rl) {
    const cleaned = line
      .trim()
      .replace(/^"|"$/g, '')      // remove outer quotes
      .replace(/\t/g, '')         // remove tabs
      .replace(/""/g, '"');       // convert double double-quotes to actual quotes

    if (cleaned) {
      jokes.push({ id: id++, joke: cleaned });
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(jokes, null, 2));
  console.log(`✅ Successfully converted to ${outputPath}`);
}

convertCsvToJson().catch(console.error);
