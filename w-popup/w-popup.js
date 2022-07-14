// compoments/w-popup/w-popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
    top:{
      type:Boolean,
      value:false
    },
    height:{
      type:String,
      value:'50%'
    },
    overlayClick:{
      type:Boolean,
      value:true
    },
    reset:{
      type:Boolean,
      value:false
    },
    leftName:{
      type:String,
      value:'取消'
    },
    leftBgColor:{
      type:String,
      value:'#f0f0f0'
    },
    leftColor:{
      type:String,
      value:'#1fa45d'
    },
    rightName:{
      type:String,
      value:'确定'
    },
    title:{
      type:String,
      value:'标题'
    },
    showTitle:{
      type:Boolean,
      value:false
    },
    closeBottom:{
      type:Boolean,
      value:false
    },
    titleSize:{
      type:String,
      value:'32rpx'
    },
    titlePosition:{
      type:String,
      value:'center'
    },
    titleColor:{
      type:String,
      value:'#0078D4'
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
    close() {
      this.triggerEvent('close',this.properties.leftName);
    },
    iconClose() {
      this.triggerEvent('close','icon');
    },
    confim() {
      this.triggerEvent('confim');
    },
    reset() {
      this.triggerEvent('reset');
    }
  }
})
