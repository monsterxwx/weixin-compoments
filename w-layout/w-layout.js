// compoments/w-layout/w-layout.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#eee'
    },
    refresh: { //是否开启下拉刷新
      type: Boolean,
      value: false
    },
    isRefresh: { //父组件使用model:isRefresh进行简易双向绑定，加载完数据后将该值设置为false即可
      type: Boolean,
      value: false
    },
    scrollStyle: {
      type:String,
      value:'height: 100%;'
    }
  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //到达底部触发
    lower() {
      this.triggerEvent('bottom');
    },
    //下拉刷新
    refresh() {
      this.setData({
        isRefresh: true
      })
      this.triggerEvent('refresh');
      // setTimeout(() => {
      //   this.setData({
      //     isRefresh: false
      //   })
      // }, 1000)
    }
  }
})