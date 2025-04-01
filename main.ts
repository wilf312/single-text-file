import { join } from 'jsr:@std/path';

export const endsWith = (str: string, suffix: string[] = ['.tsx', '.ts']) => {
  return suffix.some((s) => str.endsWith(s));
};

async function mergeTextFiles(directory: string, outputFile: string) {
  let mergedText = '';

  for await (const entry of Deno.readDir(directory)) {
    if (entry.isFile && endsWith(entry.name)) {
      const filePath = join(directory, entry.name);
      const text = await Deno.readTextFile(filePath);
      mergedText += `/*----- ${entry.name} -----*/
${text}`; // 各ファイルの内容を改行で区切って追加
    }
  }

  await Deno.writeFile(outputFile, new TextEncoder().encode(mergedText));
  console.log(`テキストファイルを ${outputFile} にまとめました。`);
}

if (import.meta.main) {
  const directory = Deno.args[0];
  const outputFile = Deno.args[1] || 'merged.txt';

  if (!directory) {
    console.error('使用方法: deno run merge_texts.ts <ディレクトリ> [出力ファイル名]');
    Deno.exit(1);
  }

  await mergeTextFiles(directory, outputFile);
}
