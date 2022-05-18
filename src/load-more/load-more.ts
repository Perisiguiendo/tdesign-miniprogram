import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-load-more`;

@wxComponent()
export default class extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-failed`,
    `${prefix}-class-divider`,
    `${prefix}-class-divider-content`,
    `${prefix}-class-loading`,
    `${prefix}-class-loading-text`,
    `${prefix}-class-loading-indicator`,
  ];

  data = {
    classPrefix: name,
  };

  options = { multipleSlots: true };

  properties = {
    // 0-placeholder, 1-loading, 2-noMore, 3-fail
    // 注意为0的时候仍会占位，防止拖到列表底部loading看不到或只看到一半
    status: {
      type: Number,
      value: 0,
    },
    failedText: {
      type: String,
      value: '加载失败，点击重试',
    },
    loadingProps: {
      type: Object,
    },
    dividerProps: {
      type: Object,
    },
    isEmpty: {
      type: Boolean,
      value: false,
    },
  };

  /** 点击处理 */
  tapHandle() {
    // 失败重试
    if ((this.data as any).status === 3) {
      this.triggerEvent('retry');
    }
  }
}
