<template>
  <div>
    <!--上传数据-->
    <div class="pinterest">
    名字<input type="text" v-model="val1">
    性别<input type="text" v-model="val2">
    id<input type="text" v-model="val3">
    <button @click="sc">上传</button>
    </div><br/>

    <table border="1">
      <tr>
        <th>名字</th>
        <th>性别</th>
        <th>id</th>
      </tr>
      <tr  v-for="(item, index) in objList.data" :key="index">
        <td>{{ item.username }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.id }}</td>
      </tr>
    </table>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="103">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {sca, skip} from '../../service/getData'
  export default {
    data() {
      return {
        val1: '',   //姓名
        val2: '',   //性别
        val3: '',   //id
        ida: 1,    //获取数据
        objList: {},   //后台数据
        currentPage1: 1,
      }
    },
    mounted() {
      this.handleCurrentChange(this.ida)
    },
    methods: {
//      上传数据
      async sc() {
        let res = await sca(this.val1,this.val2,this.val3);
      },
      async handleCurrentChange(val) {
        let obj = await skip(val-1)
        this.objList = {...obj}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
