// compoments/w-picker/w-picker.js
import timeUtil from '../../utils/timeUtil'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
    customStyle: {
      type: String,
    },
    datetime:{
      type:Boolean,
      value:false
    },
    dateType:{
      type:String,
      value:'datetime'
    },
    list: {
      type: Array
    },
    keyName:{
      type:String,
      value:'value'
    },
    title:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.setData({
        show:false
      })
      this.triggerEvent('close');
    },
    confirm(e) {
      const data=e.detail.value[this.data.keyName]
      this.triggerEvent('confirm',data);
      this.setData({
        show:false
      })
    },
    timeConfirm(event) {
      let time=timeUtil.getDate(event.detail)
      if(this.data.dateType==='date') {
        time=time.split(' ')[0]
      }
      this.triggerEvent('confirm',time);
      this.setData({
        currentDate: event.detail,
        show:false
      });
    },
  }
})
