export const noop = () => {};
export const isFn = (fn) => typeof fn === 'function';
let wId = 0;
global.Page = ({ data, ...rest }) => {
  const page = {
    data,
    setData: jest.fn(function (newData, cb) {
      this.data = {
        ...this.data,
        ...newData,
      };

      cb && cb();
    }),
    onLoad: noop,
    onReady: noop,
    onUnLoad: noop,
    // eslint-disable-next-line no-plusplus
    __wxWebviewId__: wId++,
    ...rest,
  };
  global.wxPageInstance = page;
  return page;
};

global.getApp = function () {
  return {};
};
global.Date.now = jest.fn(() => 1536708613825);
global.wx = {
  showLoading: jest.fn(),
  hideLoading: jest.fn(),
  showModal: jest.fn(),
  request: jest.fn(),
  getStorageSync: jest.fn(),
  showShareMenu: jest.fn(),
};

module.exports = global;
