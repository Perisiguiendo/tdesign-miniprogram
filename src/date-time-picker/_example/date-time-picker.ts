Page({
  data: {
    mode: '',

    dateVisible: false,
    date: new Date().getTime(), // 支持时间戳传入
    dateText: '',

    monthVisible: false,
    month: '2021-09',
    monthText: '',

    timeVisible: false,
    time: '',
    timeText: '',

    monthDateVisible: false,
    monthDate: '2019-09-21', // 需要传入年 不然无法确定是哪一年的
    monthDateText: '',

    datetimeVisible: false,
    datetime: '2021-06-06 12:11:11',
    datetimeText: '',

    // 指定选择区间起始值
    disableDate: {
      before: '2000-01-01 00:00:00',
      after: '2022-09-09 12:12:12',
    },
  },
  showPicker(e) {
    const { mode } = e?.currentTarget?.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value, formatValue } = e?.detail;
    const { mode } = this.data;

    console.log(value, formatValue);

    this.setData({
      [mode]: value.valueOf(),
      [`${mode}Text`]: formatValue,
    });

    this.hidePicker();
  },
});
