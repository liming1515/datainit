export default class XBM {
  constructor (option) {
    this.option = option
    this.getAttr = function (arr, attr) {
      var ArrAttr = attr.split('.')
      ArrAttr.forEach((item03, index) => {
        if (arr[item03] === undefined) {
          throw new Error('attr is not defind')
        }
        arr = arr[item03]
      })
      return arr
    }
  }

  // 数组的最大值
  max (arr) {
    if (Array.isArray(arr) && typeof arr[0] === 'number') {
      return Math.max.apply(null, arr)
    } else {
      throw new Error('typeof error')
    }
  }

  // 数组的最小值
  min (arr) {
    if (Array.isArray(arr) && typeof arr[0] === 'number') {
      return Math.min.apply(null, arr)
    } else {
      throw new Error('typeof error')
    }
  }

  // 数组排序
  sort (arr, type) {
    if (Array.isArray(arr) && typeof arr[0] === 'number') {
      if (type === 'minGoToMax') {
        return arr.sort(function (a, b) {
          return a - b
        })
      } else if (type === 'maxGoToMin') {
        return arr.sort(function (a, b) {
          return b - a
        })
      } else {
        throw new Error('type is not defind')
      }
    } else {
      throw new Error('typeof error')
    }
  }

  // 数组去重
  removeDuplicates (arr) {
    if (Array.isArray(arr) && typeof arr[0] === 'number') {
      return [...new Set(arr)]
    } else {
      throw new Error('typeof error')
    }
  }

  // 对象的最大值
  objectMax (arr, attr) {
    if (Array.isArray(arr)) {
      var number = ''
      var newIndex = 0
      arr.forEach((item, index) => {
        if (index === 0) {
          number = this.getAttr(item, attr)
        }
        if (number < this.getAttr(item, attr)) {
          number = this.getAttr(item, attr)
          newIndex = index
        }
      })
      return arr[newIndex]
    } else {
      throw new Error('typeof error')
    }
  }

  // 对象的最小值
  objectMin (arr, attr) {
    if (Array.isArray(arr)) {
      var number = ''
      var newIndex = 0
      arr.forEach((item, index) => {
        if (index === 0) {
          number = this.getAttr(item, attr)
        }
        if (number > this.getAttr(item, attr)) {
          number = this.getAttr(item, attr)
          newIndex = index
        }
      })
      return arr[newIndex]
    } else {
      throw new Error('typeof error')
    }
  }

  // 对象排序从小到大
  objectSort (arr, attr, type) {
    if (Array.isArray(arr)) {
      var newArr = [arr[0]]
      var val01 = ''
      var val02 = ''
      arr.forEach((item, index) => {
        if (index !== 0) {
          newArr.some((item01, index01) => {
            val01 = this.getAttr(item, attr)
            val02 = this.getAttr(item01, attr)
            if (val02 >= val01 && newArr.length === index01 + 1) {
              newArr.push(item)
              return true
            } else if (val01 > val02) {
              var data = newArr.slice(0, index01)
              newArr.splice(0, index01)
              newArr.unshift(item)
              newArr.unshift(...data)
              return true
            }
          })
        }
      })
      if (type === 'minGoToMax') {
        return newArr.reverse()
      } else if (type === 'maxGoToMin') {
        return newArr
      } else {
        throw new Error('type is not defind')
      }
    } else {
      throw new Error('typeof error')
    }
  }
  // 合并对象
  extend (object01, object02) {
    if (typeof object02 === 'object' && !Array.isArray(object02) && typeof object01 === 'object' && !Array.isArray(object01)) {
      Object.keys(object02).forEach((item, index) => {
        object01[item] = object02[item]
      })
      return object01
    } else {
      throw new Error('typeof error')
    }
  }
}
