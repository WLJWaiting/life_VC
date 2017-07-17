<template>
<div>
  <life-footer :products="products"></life-footer>
</div>
</template>

<script>
  import axios from 'axios'
  import footer from '../footer/footer.vue'
  const OK = 0
  export default {
      data () {
        return {
          products: {}
        }
      },
      created () {
        setTimeout(() => {
          //使用axios发送ajax请求，用mock获取数据
          axios.get('/api/products')
            .then(response => {
              let result = response.data
              if (result.code === OK) {
                this.products = result.data
                console.log('axios', this.products)
              }
            })
            .catch(error => {
              console.log(error)
            })
        }, 1000)

      },
      components: {
        "life-footer": footer
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
