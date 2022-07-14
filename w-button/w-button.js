// compoments/w-button/w-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      value:'按钮名称'
    },
    border:{
      type:Boolean,
      value:false
    },
    bgColor:{
      type:String,
      value:'#0078D4'
    },
    color:{
      type:String,
      value:'#fff'
    },
    double:{
      type:Boolean,
      value:false
    },
    leftBgColor:{
      type:String,
      value:'#FF4A4A'
    },
    rightBgColor: {
      type:String,
      value:'#0078D4'
    },
    leftName:{
      type:String,
      value:'取消'
    },
    rightName:{
      type:String,
      value:'确定'
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
      this.triggerEvent('click');
    },
    leftClick() {
      this.triggerEvent('leftClick');
    },
    rightClick() {
      this.triggerEvent('rightClick',this.properties.rightName);
    }
  }
})
