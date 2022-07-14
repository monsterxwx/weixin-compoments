// compoments/w-tab/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array
    },
    needRefresh: {
      type: Boolean,
      value: false
    },
    //记录是否刷新成功，在获取数据前将值设置为TRUE，获取数据后设置为FALSE
    isRefresh: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: '#eee'
    },
    activeIndex:{
      type:Number
    }
    
  },
  observers:{
    'activeIndex': function (val) {
      this.setData({
        currentIndex: val
      })
    },
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  lifetimes: {
    created() {
      
    },
    attached() {
     
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.triggerEvent('change', event.detail.index);
      this.setData({
        currentIndex: event.detail.index
      })
    },
    changeSwiper(e) {
      this.setData({
        currentIndex: e.detail.current
      })
    },
    //滑动到底部触发
    lower() {
      this.triggerEvent('bottom');
    },
    //上拉刷新
    refresh() {
      this.setData({
        isRefresh: true
      })
      this.triggerEvent('refresh');
    }
  }
})