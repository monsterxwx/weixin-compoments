``` html
    <w-search
      bind:confim="filterConfim"
      list="{{searchList}}"
      placeholder='预警类型/预警详细，空格分开'
      bind:search="search"
    ></w-search>
```

``` js
  data: {
    warnTypeList:[],//后台获取
    search: {
      pageNum: 1,
      pageSize: 5,
      total: 0,
      keyWord: '',
      type: -1, //-1全部，0未闭合，1已闭合
      messageType: '',
      startDate: '',
      endDate: ''
    },
    searchList: []
  },
  //构建可搜索的内容
  createSearchList() {
    const data = [{
        prop: 'messageType',
        title: '预警类型',
        default: '请选择预警类型',
        tips: '选择预警类型',
        show: false,
        data: this.data.warnTypeList,
        keyName: 'messageType'
      },
      {
        prop: 'startDate',
        title: '开始日期',
        default: '请选择开始日期',
        show: false,
        date: true,
        dateType: 'date'
      },
      {
        prop: 'endDate',
        title: '结束日期',
        default: '请选择结束日期',
        show: false,
        date: true,
        dateType: 'date'
      },
      {
        prop: 'test',
        title: '多选',
        default: '请选择多选',
        multiSelect: true,
        show: false,
        data: [{
            structType: "25m小箱梁1"
          },
          {
            structType: "25米先简支后连续梁边跨边梁"
          },
          {
            structType: "25米先简支后连续梁边跨中梁"
          },
          {
            structType: "40米先简支后连续梁边跨边梁"
          },
          {
            structType: "40米先简支后连续梁边跨中梁"
          },
          {
            structType: "40米先简支后连续梁中跨边梁"
          },
          {
            structType: "40米先简支后连续梁中跨中梁"
          },
          {
            structType: "sdddddd"
          },
          {
            structType: "冲冲冲"
          },
          {
            structType: "水凝混凝土工字梁--自己添加的"
          },
          {
            structType: "预应力小箱梁"
          }
        ],
        keyName: 'structType'
      },
    ]
    this.setData({
      searchList: data
    })
  },
  //搜索
  search(e) {
    this.setData({
      ['search.keyWord']: e.detail,
      ['search.pageNum']: 1,
    })
    this.getList()
  },
  //条件筛选
  filterConfim(e) {
    console.log('test',e.detail);
    this.setData({
      ['search.messageType']: e.detail.messageType,
      ['search.startDate']: e.detail.startDate,
      ['search.endDate']: e.detail.endDate,
      ['search.pageNum']: 1,
    })
    this.getList()
  },
  
  ```