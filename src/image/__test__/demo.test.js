/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import simulate from 'miniprogram-simulate';
import path from 'path';

const mapper = ['custom-error-loading', 'custom-loading', 'error-loading', 'image-loading', 'mode', 'shape', 'size'];

describe('Image', () => {
  mapper.forEach((demoName) => {
    it(`Image ${demoName} demo works fine`, () => {
      const id = simulate.load(path.resolve(__dirname, `../../image/_example/${demoName}/index`), demoName, {
        less: true,
        rootPath: path.resolve(__dirname, '../..'),
      });
      const container = simulate.render(id);
      container.attach(document.createElement('parent-wrapper'));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});
