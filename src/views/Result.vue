<template>
    <div class="result">
        <el-table
            :data="resList"
            style="width: 100%"
            :default-sort="{prop: 'score', order: 'descending'}"
        >
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="score" label="得分" sortable width="150"></el-table-column>
            <el-table-column prop="dwmc" label="单位"></el-table-column>
            <el-table-column prop="phoneNumber" label="电话" width="180"></el-table-column>
            <el-table-column prop="answerTime" label="答题时间" sortable width="180"></el-table-column>
        </el-table>
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
            resList: [
                {
                    name: '张三',
                    dwmc: '水利局',
                    phoneNumber: '15957665904',
                    answerTime: '2020-07-21 17:22:35',
                    score: 90,
                },
                {
                    name: '李四',
                    dwmc: '街道办',
                    phoneNumber: '15957615904',
                    answerTime: '2020-07-22 12:22:35',
                    score: 89,
                },
                {
                    name: '王五',
                    dwmc: '社区',
                    phoneNumber: '15957621904',
                    answerTime: '2020-07-23 08:22:35',
                    score: 89,
                },
                {
                    name: '赵柳',
                    dwmc: '门卫处',
                    phoneNumber: '15957634904',
                    answerTime: '2020-07-21 16:22:35',
                    score: 95,
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
.result {
}
</style>
