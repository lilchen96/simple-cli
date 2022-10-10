/*
 * @Author: chenzihan
 * @Date: 2022-10-10 16:45:24
 * @LastEditTime: 2022-10-10 17:09:32
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \transform\build\dev.js
 */
import { build } from './common.js';
import { spawnSync } from 'child_process';

await build(true);
spawnSync('npx http-server -c-1 -o dist', {
  shell: true,
  stdio: 'inherit',
});
