### load-more Props

| 参数         | 说明                                                      | 类型      | 默认值  | 版本 |
| ------------ | -------------------------------------------------------- | --------- | ------- | ---- |
| status       | 状态，0-占位无内容，1-正在加载，2-已全部加载，3-加载失败         | _number_  | `0`     |      |
| loadingProps |                                                          | _TdLoadingProps_ |         |      |
| dividerProps |                                                          | _TdDividerProps_ |         |      |
| failedText   | 加载失败文字描述                                            | _String_  |`加载失败，点击重试`|      |
| isEmpty      | 列表是否为空，组件会根据该值自动决定是否需要占位         | _boolean_ | `false` |      |

_注意_ `isEmpty`为`false`且`status`为`0`的时候仍会占位，防止拖到列表底部 loading 看不到或只看到一半。

### slot

| 名称  | 说明                 |
| ----- | -------------------- |
| 默认slot | 传入空态要渲染的内容 |

### 外部样式类

| 类名                    | 说明                   |
| ----------------------- | ---------------------- |
| t-class                 | 根节点样式类           |
| t-class-failed          | 失败文本节点样式类      |
| t-class-divider         | 分割线根节点样式类      |
| t-class-divider-content       | 分割线内容节点样式类           |
| t-class-loading                 | 加载根节点样式类           |
| t-class-loading-text                 | 加载文本节点样式类           |
| t-class-loading-indicator                 | 加载状态节点样式类           |

### events

| 事件名 | 说明                         |
| ------ | ---------------------------- |
| retry  | 加载失败后，点击失败文案触发 |

