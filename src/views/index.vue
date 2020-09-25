<template>
  <div>
    <button @click="add">+</button>
    {{a}}
    {{fullName = 2}}
  </div>
</template>

<script>
import XBM from '../assets/js/index'
export default {
  data () {
    return {
      data: [
        {
          id: 0,
          row: {
            index: 0
          }
        },
        {
          id: 1,
          row: {
            index: 1
          }
        },
        {
          id: 2,
          row: {
            index: 2
          }
        },
        {
          id: 4,
          row: {
            index: 4
          }
        },
        {
          id: 3,
          row: {
            index: 3
          }
        },
        {
          id: 3,
          row: {
            index: 3
          }
        },
        {
          id: 3,
          row: {
            index: 3
          }
        },
        {
          id: 3,
          row: {
            index: 3
          }
        }
      ],
      obj: [
        {
          index: 1,
          active: false
        },
        {
          index: 1,
          active: true
        },
        {
          index: 1,
          active: true
        }
      ],
      
    }
  },
  computed: {
    a () {
      var pirc = 0
      this.obj.forEach((item, index) => {
        if (item.active === true) {
          pirc += item.index
        }
      })
      return pirc
    },
    fullName: {
      // getter
      get: function () {
        return 123
      },
      // setter
      set: function (newValue) {
         console.log(newValue)
      }
    }
  },
  // 刚能访问数据
  created () {
  },
  // 刚能访问节点
  mounted () {
    var xbm = new XBM()
    console.log(xbm.max([1,2,3]))
    console.log(xbm.min([1,2,3]))
    console.log(xbm.sort([1,2,3], 'maxGoToMin'))
    console.log(xbm.removeDuplicates([1,2,2,3]))
    console.log(xbm.objectMax(this.data, 'row.index', 'maxGoToMin'))
    console.log(xbm.objectSort(this.data, 'row.index', 'maxGoToMin'))
    console.log(xbm.extend({name:"liming"},{age:18}))
    console.log(this.$store.state.name)
    console.log(this.$store.getters.add)
    this.$store.commit('change')
    this.$store.commit('addAttr', '666')
    console.log(this.$store.state.name)
    this.$store.dispatch('addAttr')
    console.log(this.$store.state.name)
  },
  methods: {
    add () {
      this.obj[0].active = !this.obj[0].active
    }
  }
}
</script>

<style scoped lang="less">
</style>
