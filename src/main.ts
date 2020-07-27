import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import moment from 'moment';
// moment.locale('zh-cn');
import { Button, Select, Option, Input, Radio, RadioGroup, Message, Table, TableColumn, Form, FormItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/base.css';

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
