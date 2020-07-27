<template>
    <div class="result">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formInline.name" placeholder="答题人"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="formInline.phoneNumber" placeholder="电话号码"></el-input>
            </el-form-item>
            <el-form-item label="单位">
                <el-select v-model="formInline.dw" placeholder="单位名称">
                    <el-option label="全部" value="0"></el-option>
                    <el-option label="栖霞区水务局" value="1"></el-option>
                    <el-option label="街道办" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="resList"
            style="width: 100%" border
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
            formInline: {
                name: '',
                phoneNumber: '',
                dw: 1
            },
            resList: [
                {
                    name: '张三',
                    dwmc: '栖霞区水务局',
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
        onSubmit() {
            console.log(this.formInline);
        },
    },
};
</script>
<style scoped lang="less">
.result {
    .demo-form-inline{
        display: flex;
    }
}
</style>
