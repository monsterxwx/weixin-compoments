// compoments/w-cell/w-cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inset:{
      type:Boolean,
      value:false
    },
    titleWidth:{
      type:String,
      value:'100px'
    },  
    list:{
      type:Array
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
    clickEvent(e) {
      this.triggerEvent('click',e.target.dataset.item);
    }
  }
})
