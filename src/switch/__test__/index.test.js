import path from 'path';
import simulate from 'miniprogram-simulate';
import global from './global';
import { colorRGB2Hex } from '../../../test/utils/colors';

describe('switch', () => {
  let switchId;
  beforeAll(() => {
    switchId = simulate.load(path.resolve(__dirname, '../switch'), {});
  });

  beforeEach(() => {
    global.getApp = () => ({});
  });

  /**
   * switch 默认 value / defaultValue 均为 null
   * switch 的 body 绑定函数 onTapBackground，dot 绑定函数 onTapDot
   */

  describe('props', () => {
    it(':colors with value', async () => {
      /**
       * @example 设置打开/关闭颜色 colors: ['#802289', '#272301']
       *          设置默认值 defaultValue: false
       * 1. 验证 value 是否为默认值
       * 2. switchBody 触发函数，验证 value 和 color
       * 3. switchDot 触发函数，验证 value 和 color
       */
      const switchComp = simulate.render(switchId, { colors: ['#802289', '#272301'], defaultValue: false });
      const switchBody = switchComp.querySelector('.t-switch__body');
      const switchDot = switchComp.querySelector('.t-switch__dot');

      const bgColor = switchBody.style.backgroundColor.includes('rgb')
        ? colorRGB2Hex(switchBody.style.backgroundColor)
        : switchBody.style.backgroundColor;

      const spyChange = sinon.spy(switchComp.instance);

      await simulate.sleep(200);
      expect(switchComp.data.value).toBe(false);

      switchBody.dispatchEvent('change');
      await simulate.sleep(200);
      expect(spyChange.called).toBe(true);
      expect(bgColor).toBe('#802289');
      expect(switchComp.data.value).toBeTruthy();

      switchBody.dispatchEvent('change');
      await simulate.sleep(200);
      expect(spyChange.called).toBe(true);
      expect(bgColor).toBe('#272301');
      expect(switchComp.data.value).toBeFalsy();

      switchDot.dispatchEvent('change');
      await simulate.sleep(200);
      expect(spyChange.called).toBe(true);
      expect(bgColor).toBe('#802289');
      expect(switchComp.data.value).toBeTruthy();

      switchDot.dispatchEvent('change');
      await simulate.sleep(200);
      expect(spyChange.called).toBe(true);
      expect(bgColor).toBe('#272301');
      expect(switchComp.data.value).toBeFalsy();
    });

    it(':customValue', () => {
      /**
       * @example 设置自定义 customValue: [1, 0]
       *          设置默认值 value: 1
       * 1. 验证 value 是否为 1
       * 2. switchBody 触发函数，验证 value
       * 3. switchDot 触发函数，验证 value
       */
      const switchComp = simulate.render(switchId, { customValue: [1, 0], value: 1 });
      const switchBody = switchComp.querySelector('.t-switch__body');
      const switchDot = switchComp.querySelector('.t-switch__dot');

      setTimeout(() => {
        expect(switchComp.data.value).toBe(1);
        done();
      }, 1000);

      switchBody.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(0);
        done();
      }, 1000);

      switchBody.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(1);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(0);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(1);
        done();
      }, 1000);
    });
  });
});
