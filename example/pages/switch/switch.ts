Page({
  data: {
    defaultVal: true,
    val: 0,
  },
  handleChange(e) {
    console.log('e: ', e);
    this.setData({
      // defaultVal: e.detail.value,
      val: e.detail.value,
    });
  },
});
