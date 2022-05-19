import path from 'path';
import simulate from 'miniprogram-simulate';
import sinon from 'sinon';
import global from '../../../test/utils/global';
import { colorRGB2Hex } from '../../../test/utils/colors';

global.getApp = () => ({});

/**
 * switch 默认 value / defaultValue 均为 null
 * switch 的 body 绑定函数 onTapBackground，dot 绑定函数 onTapDot
 */
const switchId = simulate.load(path.resolve(__dirname, '../switch'), {
  less: true,
  compiler: 'simulate',
});

const renderComponent = (options = {}) => {
  jest.resetModules();
  const comp = simulate.render(switchId, options);
  // 模拟事件
  comp.instance.$emit = jest.fn();
  return comp;
};

describe('switch component', () => {
  describe('props', () => {
    /**
     * @example 设置打开/关闭颜色 colors: ['#802289', '#272301']
     *          设置默认值 defaultValue: false
     * 1. 验证 value 是否为默认值
     * 2. switchBody 触发函数，验证 value 和 color
     * 3. switchDot 触发函数，验证 value 和 color
     */
    const switchComp = renderComponent({ colors: ['#802289', '#272301'], value: 0, customValue: [1, 0] });

    test(':colors', async () => {
      const switchBody = switchComp.querySelector('.t-switch__body');
      const switchDot = switchComp.querySelector('.t-switch__dot');
      const spyChange = sinon.spy(switchComp.instance);

      const bgColor = switchBody.dom.style.backgroundColor.includes('rgb')
        ? colorRGB2Hex(switchBody.dom.style.backgroundColor)
        : switchBody.dom.style.backgroundColor;

      // expect(switchComp.data.value).toBe(0);
      expect(bgColor).toBe('#272301');

      switchBody.dispatchEvent('change');
      // 1
      setTimeout(() => {
        expect(bgColor).toBe('#802289');
        expect(switchComp.data.value).toBe(1);
        expect(spyChange.called).toBe(true);
        expect(spyChange.callCount).to.be.equal(1);
        done();
      }, 1000);

      switchBody.dispatchEvent('change');
      // 0
      setTimeout(() => {
        expect(bgColor).toBe('#272301');
        expect(switchComp.data.value).toBe(0);
        expect(spyChange.called).toBe(true);
        expect(spyChange.callCount).to.be.equal(2);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      // 1
      setTimeout(() => {
        expect(bgColor).toBe('#802289');
        expect(switchComp.data.value).toBe(1);
        expect(spyChange.called).toBe(true);
        expect(spyChange.callCount).to.be.equal(3);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      // 0
      setTimeout(() => {
        expect(bgColor).toBe('#272301');
        expect(switchComp.data.value).toBe(0);
        expect(spyChange.called).toBe(true);
        expect(spyChange.callCount).to.be.equal(4);
        done();
      }, 1000);
    });

    it(':customValue', () => {
      /**
       * @example 设置自定义 customValue: [1, 0]
       *          设置默认值 value: 1
       * 1. 验证 value 是否为 1
       * 2. switchBody 触发函数，验证 value
       * 3. switchDot 触发函数，验证 value
       */
      const switchComp = simulate.render(switchId, { value: true });
      const switchBody = switchComp.querySelector('.t-switch__body');
      const switchDot = switchComp.querySelector('.t-switch__dot');

      setTimeout(() => {
        expect(switchComp.data.value).toBe(true);
        done();
      }, 1000);

      switchBody.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(false);
        done();
      }, 1000);

      switchBody.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(true);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(false);
        done();
      }, 1000);

      switchDot.dispatchEvent('change');
      setTimeout(() => {
        expect(switchComp.data.value).toBe(true);
        done();
      }, 1000);
    });
  });
});
