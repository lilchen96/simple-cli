/*
 * @Author: chenzihan
 * @Date: 2022-10-10 17:02:11
 * @LastEditTime: 2022-10-10 17:14:35
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \transform\build\common.js
 */
import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const srcPath = path.resolve(process.cwd(), 'src');
const distPath = path.resolve(process.cwd(), 'dist');

const srcHtmlPath = path.resolve(srcPath, 'index.html');
const distHtmlPath = path.resolve(distPath, 'index.html');

function deleteDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  return Promise.all(
    files.map((item) => promisify(fs.unlink)(path.resolve(dirPath, item)))
  );
}

async function generateHtml() {
  let html = await promisify(fs.readFile)(srcHtmlPath, { encoding: 'utf-8' });
  html = html.replace('<!-- script -->', `<script src="./app.js"></script>`);
  return promisify(fs.writeFile)(distHtmlPath, html);
}

function buildJS(watch) {
  return esbuild.build({
    entryPoints: ['src/index.js'],
    sourcemap: 'inline',
    minify: true,
    outfile: `dist/app.js`,
    watch,
  });
}

export async function build(watch = false) {
  if (fs.existsSync(distPath)) {
    await deleteDir(distPath);
  } else {
    fs.mkdirSync(distPath);
  }
  return Promise.all([buildJS(watch), generateHtml()]);
}
