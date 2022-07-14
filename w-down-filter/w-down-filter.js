// compoments/w-down-filter/w-down-filter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height:{
      type:String,
      value:'auto'
    },
    name:{
      type:String,
      value:'条件筛选'
    },
    reset:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickEvent() {
      this.setData({
        show: true
      })
    },
    close() {
      this.setData({
        show: false
      })
    },
    confim() {
      this.triggerEvent('confim')
      this.setData({
        show: false
      })
    },
    reset() {
      this.triggerEvent('reset')
    }
  }
})