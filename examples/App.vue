<template>
  <div id="app">
    <div class="page-header">
      <h1>CG-WEB-UI</h1>
      <h2>基于 ElementUI 二次封装的WebUI组件库</h2>
      <a href="" class="btn" target="_blank">演示DEMO</a>
    </div>
    <div class="page-content" v-hljs>
      <h1>cg-web-ui</h1>
      <p>基于<code>ElementUI</code>的<code><a href="" target="_blank">组件</a></code>二次封装制作</p>
      
      <h1>组件示例</h1>

      <h3 style="margin-bottom:10px;">输入框</h3>
      <cg-input></cg-input>

      <h3 style="margin-top:50px;margin-bottom:10px;">表格</h3>
      <cg-table :dataList="MTable.list"
                :tableConfig.sync="MTable.config"
                :getListHandle="getDataList">
        <!-- operation tpl -->
        <template ref="operationTpl" slot-scope="scope" slot="operationTpl">
          <cg-button useElementType="text" size="small">
            详情
          </cg-button>
        </template>
      </cg-table>


      <pre>
        
      </pre>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ff0000',
      color2: '#000000',
      MTable: {
        config: {
          pageNum: 1,
          pageSizeOptions: [5, 10, 50, 100],
          pageSize: 5,
          total: 0,
          border: true,
          loading: false,
          showCheckbox: false,
          showPagination: false,
          headers: [
            { title: '会员ID', field: 'id' },
            { title: '会员姓名', field: 'cardName' },
            { title: '会员地址', field: 'address' },
            { title: '会员类型', field: 'cardType', pipe: 'cardType' },
            // { title: '会员等级', field: 'cardChannel', pipe: 'cardChannel' },
            // { title: '操作', tdTemplate: 'operationTpl' }
          ]
        },
        list: []
      }
    }
  },
  created() {
    this.getDataList()
  },
  methods: {
    getDataList() {
      setTimeout(() => {
        this.MTable.list = [
          { id: '1', cardName: '张三', cardType: 1, cardChannel: 1, address: '南京市雨花台世贸城品' },
          { id: '2', cardName: '李四', cardType: 2, cardChannel: 1, address: '南京市雨花台世贸城品' },
          { id: '3', cardName: '王舞', cardType: 1, cardChannel: 1, address: '南京市雨花台世贸城品' },
          { id: '4', cardName: '王陆', cardType: 2, cardChannel: 1, address: '南京市雨花台世贸城品' },
          { id: '5', cardName: '田七', cardType: 1, cardChannel: 1, address: '南京市雨花台世贸城品' }
        ]
      }, 500)
    }
  }
}
</script>

<style lang="sass">
@import "assets/style.scss";
</style>
  