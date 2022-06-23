<template>
  <div>
    <div class="studentList">
      <el-button type="primary" class="addBtu" @click="addIsShow = true">添加学生</el-button>
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
            <el-button type="text" size="small" @click="addIsShow = true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="Box" v-show="addIsShow">
      <div class="addStuBox">
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
          <el-form-item label="性别">
            <el-input v-model="newStuInfo.gender"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="newStuInfo.major"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="newStuInfo.id"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-input v-model="newStuInfo.birth"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input v-model="newStuInfo.political"></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-input v-model="newStuInfo.nation"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input v-model="newStuInfo.address"></el-input>
          </el-form-item>
        </el-form>
        <div class="scBtu">
          <el-button type="success">保存</el-button>
          <el-button type="danger" @click="addIsShow = false">关闭</el-button>
        </div>


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
        type: '',
        gender: '',
        major: '',
        id: '',
        birth: '',
        political: '',
        nation: '',
        address: ''
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

.Box {
  width: 45vw;
  height: 95vh;
  position: absolute;
  top: 20vh;
  border-radius: 10px;
  left: 30vw;
  border: 2px solid black;
}

.addStuBox {
  width: 40vw;
  height: 90vh;
  backdrop-filter: blur(50px);
  border-radius: 10px;
  /* opacity: 0.5; */
}

.scBtu {
  text-align: center;
}
</style>
