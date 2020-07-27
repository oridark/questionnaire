<template>
    <div class="home">
        <div class="formItem">
            <div class="label">姓名:</div>
            <div class="formInside">
                <el-input v-model="name" placeholder="请输入姓名"></el-input>
            </div>
        </div>
        <div class="formItem">
            <div class="label">电话:</div>
            <div class="formInside">
                <el-input v-model="phoneNumber" placeholder="请输入手机号" type="number"></el-input>
            </div>
        </div>
        <div class="formItem">
            <div class="label">单位:</div>
            <div class="formInside">
                <el-select v-model="dw" placeholder="请选择">
                    <el-option
                        v-for="item in dwList"
                        :key="item.dwmc"
                        :label="item.dwmc"
                        :value="item.dwId"
                    ></el-option>
                </el-select>
            </div>
        </div>
        <el-button round type="primary" style="margin-top: 0.5rem;" @click="start">开始答题</el-button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'AnswerManInfo',
    data() {
        return {
            name: '',
            phoneNumber: '',
            dw: 1,
            dwList: [
                {
                    dwId: 1,
                    dwmc: '栖霞区水务局',
                },
                {
                    dwId: 2,
                    dwmc: '街道办',
                },
            ],
        };
    },
    methods: {
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        start() {
            if (!!this.name && this.phoneNumber) {
                this.$router.push('/questions');
            } else {
                this.$message({
                    message: '请先填写身份信息!',
                    type: 'warning',
                });
            }
        },
    },
};
</script>
<style scoped lang="less">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    .formItem {
        display: flex;
        padding: 0.2rem 0;
        .label {
            width: 1rem;
            height: 40px;
            line-height: 40px;
            font-size: 0.26rem;
        }
        .formInside {
            width: 4rem;
        }
    }
}
</style>
