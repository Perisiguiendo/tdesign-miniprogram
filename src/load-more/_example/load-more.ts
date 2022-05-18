Page({
  page: {
    num: 1,
    size: 10,
  },

  data: {
    dataLoading: 0,
    list: [] as string[],
    emptyBag: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptybag.png',
  },

  onLoad() {
    this.init();
  },

  onReachBottom() {
    if (this.data.dataLoading === 0) {
      this.loadMore();
    }
  },

  onReTry() {
    this.loadMore();
  },

  init() {
    this.page = {
      num: 1,
      size: 10,
    };
    this.data.list = [];
    return this.loadMore();
  },

  loadMore() {
    this.setData({ dataLoading: 1 });
    return this.getData({
      pageNum: this.page.num,
      pageSize: this.page.size,
    })
      .then((res) => {
        this.page.num += 1;
        const { data, pageCount } = res;
        this.setData({
          // list: [], // 列表为空
          list: this.data.list.concat(data),
          dataLoading: this.page.num < pageCount ? 0 : 2,
        });
      })
      .catch((err) => {
        this.setData({ dataLoading: 3 });
        Promise.reject(err);
      });
  },

  failed: false,
  getData({ pageNum, pageSize }): Promise<{ pageCount: number; data: string[] }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pageNum === 2 && !this.failed) {
          // 故意制造一次失败
          this.failed = true;
          return reject();
        }
        let data: string[] = [];
        if (pageNum <= 3) {
          data = Array.from(new Array(pageSize), (_v, i) => `item ${(pageNum - 1) * pageSize + i + 1}`);
        }
        resolve({
          data,
          pageCount: data.length,
        });
      }, 1000);
    });
  },

  handleBtn(e) {
    const { type } = e.target?.dataset;

    if (type === 'empty') {
      this.setData(
        {
          dataLoading: 1,
          list: [],
        },
        () => {
          this.getData({
            pageNum: 1,
            pageSize: 10,
          })
            .then(() => {
              this.page.num += 1;
              this.setData({
                list: [], // 列表为空
                dataLoading: 2,
              });
            })
            .catch((err) => {
              this.setData({ dataLoading: 3 });
              Promise.reject(err);
            });
        },
      );
    } else {
      this.init();
    }
  },
});
