// compoments/w-select/w-select.js
Component({
  properties: {
    placeholder: {
      type: String,
      value: '请输入',
    },
    keyName: {
      type: String,
      value: 'name',
    },
    list: {
      type: Array
    },
    width: {
      type: String,
      value: '100%'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    prop: {
      type: String,
      value: ''
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    showSelect: false,
    selectValue: '',
    filterData: []
  },
  observers: {
    'list': function (val) {
      this.setData({
        filterData: val
      })
    },
    'prop': function (val) {

      if (val === '') {
        this.setData({
          selectValue: ''
        })
      } else {
        this.setData({
          selectValue: val
        })
      }

    }
  },
  methods: {
    //input获取焦点事件触发
    focusEvent() {
      this.triggerEvent('focus');
    },
    openSelect() {
      this.setData({
        showSelect: !this.data.showSelect
      })
    },
    selectChange(e) {
      const data = e.currentTarget.dataset.item
      this.setData({
        selectValue: data[this.properties.keyName]
      })
      this.triggerEvent('change', data);
    },
    inputChange(e) {
      let value = e.detail.value
      this.triggerEvent('input', value)
      const data = this.properties.list.filter(item => item[this.properties.keyName].includes(value))
      this.setData({
        filterData: data
      })
    },
    closeContentSelect() {
      this.setData({
        showSelect:false
      })
    }
  }

})