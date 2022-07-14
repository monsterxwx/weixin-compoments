// compoments/w-search/w-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
    },
    placeholder: {
      type: String,
      value: '请输入'
    }
  },
  observers: {
    'list': function (newValue) {
      if (this.data.propList.length < 1) {
        this.setData({
          propList: newValue
        })
      } else {
        return
      }

    }
  },
  data: {
    searchValue: '',
    propList: []
  },
  methods: {
    searchChange(event) {
      this.setData({
        searchValue: event.detail,
      })
    },
    searchClear() {
      this.setData({
        searchValue: '',
      })
      this.triggerEvent('search', this.data.searchValue)
    },
    searchEvent() {
      this.triggerEvent('search', this.data.searchValue)
    },
    confirm() {
      const data = this.data.propList
      const searchParams = {}
      data.forEach(item => {
        searchParams[item.prop] = item[item.prop]
      })
      this.triggerEvent('confim', searchParams)
    },
    reset() {
      const list = this.data.propList
      list.forEach(item => {
        item[item.prop] = ''
        //对多选的内容的每项选择置为false
        if (item.multiSelect) {
          item.data = item.data.map(chil => {
            return {
              ...chil,
              isSelect: false
            }
          })
        }
        item.show = false
      })
      this.setData({
        propList: list
      })
    },
    openSelect(e) {
      const {
        index
      } = wx.GetData(e)
      const data = this.data.propList
      data[index].show = true
      this.setData({
        propList: data
      })
    },
    closePicker(e) {
      const {
        index
      } = wx.GetData(e)
      const data = this.data.propList
      data[index].show = false
      this.setData({
        propList: data
      })
    },
    changeSelect(e) {
      const {
        prop,
        index
      } = wx.GetData(e)
      const data = this.data.propList
      data[index][prop] = e.detail
      data[index].show = false
      this.setData({
        propList: data
      })
    },
    popConfim(e) {
      const {
        prop,
        index,
        data
      } = wx.GetData(e)
      const propList = this.data.propList
      const filterData = data.filter((item) => item.isSelect).map((item) => item[propList[index].keyName]).join(',')
      propList[index][prop] = filterData
      propList[index].show = false
      this.setData({
        propList: propList
      })
    },
    selectItem(e) {
      const {
        faterindex,
        index
      } = wx.GetData(e)
      const data = this.data.propList
      data[faterindex].data[index].isSelect = !data[faterindex].data[index].isSelect
      this.setData({
        propList: data
      })
    },
  }
})