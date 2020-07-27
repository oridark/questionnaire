<template>
    <div class="questions">
        <transition name="el-zoom-in-center">
            <div class="question">
                <div v-show="showQue" class="transition-box">
                    <div class="title">{{curQue.index}}.{{curQue.content}}</div>
                    <div class="content">
                        <el-radio-group v-model="curQue.value">
                            <div class="select" v-for="select in curQue.selects" :key="select.label">
                                <el-radio :label="select.label" class="selectLabel">{{select.label}}.</el-radio>
                                <div class="selectContent">{{select.content}}</div>
                            </div>
                        </el-radio-group>
                    </div>
                </div>
            </div>
        </transition>
        <el-button round type="primary" @click="prev" :disabled="curIndex === 0">上一题</el-button>
        <el-button round type="primary" @click="next" :disabled="curIndex >= questionList.length - 1">下一题</el-button>
    </div>
</template>
<script>
// @ is an alias to /src
// import { Radio } from 'ant-design-vue';
export default {
    name: 'Questions',
    data() {
        return {
            curIndex: 0,
            showQue: true,
            questionList: [
                {
                    index: 1,
                    cur: true,
                    content: '栖霞区水务局为什么这么厉害，请选择正确选项？',
                    selects: [
                        {
                            label: 'A',
                            content:
                                '因为这里的工作人员都很棒，说话又好听，人也是很nice，工作效率很高',
                        },
                        {
                            label: 'B',
                            content: '好就是好，哪里有什么原因',
                        },
                        {
                            label: 'C',
                            content: '我也不知道',
                        },
                        {
                            label: 'D',
                            content: '讲真的这个还用说？很简单的道理。',
                        },
                    ],
                    answer: 'A',
                    value: ''
                },
                {
                    index: 2,
                    cur: false,
                    content:
                        '让我哥同人歌让他getget和太狠 格瑞特get个体隔热 让他各奔回家以后内容页推荐人一句？',
                    selects: [
                        {
                            label: 'A',
                            content: '让他玩如果我听法尔范无色歌贺一航瑞庭苑让他',
                        },
                        {
                            label: 'B',
                            content: '让他玩二五二分为二服务费v让他',
                        },
                        {
                            label: 'C',
                            content: '儿服务而非我而 是否吧是王夫人是如违反温热',
                        },
                        {
                            label: 'D',
                            content: '若干让她有劲儿发我eryeyhyuk6ik5乳房34染发24人GV儿童歌染发uj57uj56  ',
                        },
                    ],
                    answer: 'B',
                    value: ''
                },
            ],
            curQue: {},
            value: 1,
            radioStyle: {
                display: 'block',
                height: '30px',
                lineHeight: '30px',
            },
        };
    },
    beforeMount() {
        this.curQue = this.questionList[0];
    },
    components: {
        // ARadio: Radio,
        // ARadioGroup: Radio.Group,
    },
    methods: {
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        prev() {
            if (this.curIndex > 0) {
                this.showQue = false;
                setTimeout(() => {
                    this.curIndex--;
                    this.curQue = this.questionList[this.curIndex];
                    this.showQue = true;
                }, 200);
            }
        },
        next() {
            if (this.curIndex < this.questionList.length - 1) {
                this.showQue = false;
                setTimeout(() => {
                    this.curIndex++;
                    this.curQue = this.questionList[this.curIndex];
                    this.showQue = true;
                }, 200);
            }
        }
    },
};
</script>
<style scoped lang="less">
.questions {
    .question {
        margin: 0.4rem 0;
        height: 5.77rem;
        margin-bottom: 0.5rem;
        .title {
            text-align: left;
            padding: 0.2rem 0;
            border-bottom: 1px solid #4873a6;
            font-size: 0.3rem;
            color: #333;
        }
        .content {
            text-align: left;
            padding: 0.4rem 0;
            .select {
                padding: 0.2rem 0;
                margin-left: 4px;
                color: #666;
                display: flex;
                .selectLabel{
                    margin-right: 10px;
                }
                .index {
                    margin-right: 4px;
                }
                .selectContent {
                    flex: 1;
                    word-break: break-all;
                    font-size: 0.26rem;
                    line-height: 1.2;
                    padding-bottom: 0.2rem;
                }
            }
        }
    }
}
</style>
