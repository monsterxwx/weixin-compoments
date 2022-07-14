
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    minHeight:{
      type:String,
      value:'25px'
    },
    clickable:{
      type:Boolean,
      value:false
    },
    title:{
      type:String,
      value:'标题'
    },
    leftWidth:{
      type:String,
      value:'80px'
    },
    titleColor:{
      type:String,
      value:'#0078D4'
    },
    arrow:{
      type:Boolean,
      value:false
    },
    flexLeft:{
      type:Boolean,
      value:false
    },
    noBorder:{
      type:Boolean,
      value:false
    }
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
    clickEvent() {
      this.triggerEvent('click')
    }
  }
})
