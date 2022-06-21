<template>
  <div>
    <div class="studentList">
      <el-button type="primary" class="addBtu" @click="addIsShow=true">添加学生</el-button>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="studentClass" label="班级" width="120">
        </el-table-column>
        <el-table-column prop="studentId" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="studentName" label="姓名" width="80">
        </el-table-column>
        <el-table-column prop="studentSex" label="性别" width="80">
        </el-table-column>
        <el-table-column prop="studentMajor" label="专业" width="120">
        </el-table-column>
        <el-table-column prop="studentIdNum" label="身份证号" width="200">
        </el-table-column>
        <el-table-column prop="studentBirthday" label="出生年月" width="120">
        </el-table-column>
        <el-table-column prop="politicalOutlook" label="政治面貌" width="100">
        </el-table-column>
        <el-table-column prop="studentNation" label="民族" width="80">
        </el-table-column>
        <el-table-column prop="homeAddress" label="家庭住址" width="380">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <div class="bottom clearfix delbutton">
              <el-popconfirm title="您确定要删除这个学生吗？" @confirm="deleteStudent(scope.row.studentId)">
                <el-button slot="reference" type="text" size="small">删除</el-button>
              </el-popconfirm>
            </div>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="addStuBox" v-show="addIsShow">
      <!--      <el-radio-group v-model="labelPosition" size="small">-->
      <!--        <el-radio-button label="left">左对齐</el-radio-button>-->
      <!--        <el-radio-button label="right">右对齐</el-radio-button>-->
      <!--        <el-radio-button label="top">顶部对齐</el-radio-button>-->
      <!--      </el-radio-group>-->

      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="班级">
          <el-input v-model="newStuInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="newStuInfo.region"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="newStuInfo.type"></el-input>
        </el-form-item>
      </el-form>
      <div class="scBtu">
        <el-button type="success" >保存</el-button>
        <el-button type="danger" @click="addIsShow=false">关闭</el-button>
      </div>

    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      addIsShow: false,
      tableData: [{
        id: '',
        studentClass: '',
        studentId: '',
        studentName: '',
        studentSex: '',
        studentMajor: '',
        studentIdNum: '',
        studentBirthday: '',
        politicalOutlook: '',
        studentNation: '',
        homeAddress: ''
      }],
      labelPosition: 'right',
      newStuInfo: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  created() {
    this.geiStudentList()
  },
  methods: {
    geiStudentList() {
      axios({
        url: '/api/studentList',
        method: 'GET',
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    deleteStudent(StuId) {
      axios({
        url: '/api/deleteStu/' + StuId,
        method: 'DELETE',
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res)
      })
    },

  }
}

</script>

<style>
.delbutton {
  display: inline;
}
.addBtu {
  margin: 10px 20px;
  float: right;
}
.addStuBox {
  border: 10px solid;
  width: 40vw;
  height: 50vh;
  position: absolute;
  top: 20vh;
  left: 30vw;
}
.scBtu {
  text-align: center;
}
</style>
