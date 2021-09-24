/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-24 11:41:27
 * */

import { TdLoadingProps } from '../loading/type';

export interface TdPullDownRefreshProps {
  /**
   * 加载loading样式
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-refresh', 't-class-loading', 't-loading-color'];
    required?: boolean;
  };
  /**
   * 加载loading样式
   */
  loadingProps?: {
    type: ObjectConstructor;
    value?: TdLoadingProps;
    required?: boolean;
  };
  /**
   * 提示语
   * @default []
   */
  loadingTexts?: {
    type: ArrayConstructor;
    value?: string[];
    required?: boolean;
  };
  /**
   * 最大下拉高度
   * @default 272
   */
  maxBarHeight?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 加载中下拉高度
   * @default 200
   */
  normalBarHeight?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 刷新超时时间
   * @default 3000
   */
  refreshTimeout?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
}
