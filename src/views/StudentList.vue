<template>
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
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      xx: false,
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
    }
  }
}

</script>

<style>
.delbutton {
  display: inline;
}
</style>