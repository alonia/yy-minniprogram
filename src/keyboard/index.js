Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    maskClass: {
      type: String,
      value: ''
    },
    extClass: {
      type: String,
      value: ''
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mask: {
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: false
    },
    actions: {
      type: Array,
      value: [],
      observer: '_groupChange'
    },
    isShow: {
      type: Boolean,
      value: false
    },
    keyBoardType: {
      type: Number,
      value: 1
    },
    backgroundColor: {
      type: String,
      value: "#ffffff"
    },
    isAdaptive: {
      type: Boolean,
      value: false
    }
  },
  data: {
    keyNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    keyEnInput1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    keyEnInput2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    keyEnInput3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    keyPhone: [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0],
    carCard0: ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀", "豫", "川"],
    carCard1: ["渝", "辽", "吉", "黑", "皖", "鄂", "湘", "赣", "闽", "陕"],
    carCard2: ["甘", "宁", "蒙", "津", "贵", "云", "桂", "琼", "青", "新"],
    carCard3: ["藏", "使", "领", "警", "学", "港", "澳"],
    hexNumber: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
    bottom: '0',
    isShow: false,
    keyBoardType: 1,
    backgroundColor: "#ffffff",
    isAdaptive: false
  },

  ready() {
    this.setData({
      isShow: this.properties.isShow,
      keyBoardType: this.properties.keyBoardType,
      backgroundColor: this.properties.backgroundColor,
      isAdaptive: this.properties.isAdaptive
    })
    if (this.properties.isAdaptive) {
      this.setData({
        bottom: '60rpx'
      })
    } else {
      this.setData({
        bottom: '0'
      })
    }
  },
  methods: {
    switchType() {
      if (this.data.keyBoardType == 3) {
        this.setData({
          keyBoardType: 4
        })
      } else if (this.data.keyBoardType == 4) {
        this.setData({
          keyBoardType: 3
        })
      }
    },
    vehicleTap: function (event) {
      wx.vibrateShort()
      let value = event.target.dataset.value
      this.triggerEvent('inputPress', { value })
    },
    closeKeyBoardTap: function () {
      wx.vibrateShort()
      this.triggerEvent('closeKeyBoard')
    },
    longPressDelete(event) {
      let value = event.target.dataset.value;
      this.triggerEvent('inputLongPress', { value })
    },
    _groupChange: function _groupChange(e) {
      if (e.length > 0 && typeof e[0] !== 'string' && !(e[0] instanceof Array)) {
        this.setData({
          actions: [this.data.actions]
        });
      }
    },
    buttonTap: function buttonTap(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
        value = _e$currentTarget$data.value,
        groupindex = _e$currentTarget$data.groupindex,
        index = _e$currentTarget$data.index;

      this.triggerEvent('actiontap', { value: value, groupindex: groupindex, index: index });
    },
    closeActionSheet: function closeActionSheet(e) {
      var type = e.currentTarget.dataset.type;

      if (this.data.maskClosable || type) {
        this.setData({
          show: false
        });
        this.triggerEvent('close');
      }
    }
  }
});