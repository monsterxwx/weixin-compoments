Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgList: {
      type: Array
    },
    imgSize: {
      type: String,
      value: '100px'
    }
  },
  observers: {
    'imgList': function (val) {
      this.setData({
        fileList: val
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fileList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //图片上传读取前
    beforeRead(e) {
      const {
        file,
        callback
      } = e.detail
      const imgType = ['png', 'jpg', 'gif', 'bmp', 'jpeg']
      file.forEach(res => {
        let type = res.url.split('.')[1]
        if (imgType.find(item => item === type)) {
          return callback(true)
        } else {
          wx.showToast({
            title: '请传入正确格式图片，支持的图片格式为png/jpg/git/bmp/jpeg',
            icon: 'none',
            duration: 2000
          })
          return callback(false)
        }
      })

    },
    //图片上传读取后
    afterRead(e) {
      const listArr = this.data.fileList
      listArr.push(...e.detail.file)
      this.setData({
        fileList: listArr
      })
      this.triggerEvent('success', this.data.fileList)
    },
    //图片删除
    deleteImg(event) {
      const index = event.detail.index
      const listArr = this.data.fileList
      listArr.splice(index, 1)
      this.setData({
        fileList: listArr
      })
      this.triggerEvent('success', this.data.fileList)
    }
  }
})