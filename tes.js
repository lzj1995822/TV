function GetSubDirectory(){
  alert("123");
}
var btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', showMsg, false); //鼠标单击的时候调用showMes这个函数


function showMsg() {
    alert("事件监听");
}
import axios from 'axios';
import { Message } from 'element-ui';
// 创建实例
const service = axios.create({
    baseURL: '/api', // 基准地址
    timeout: 50000 // 超时时间
});
/*
* 普通请求
*/
export const common = new Proxy({}, {
    get: function () {
        // 返回动态构造的函数！
        return (...args) => {
            let method = args[0] || {};
            let url = args[1] || {};
            let data = args[2] || {};
            // 控制成功是否需要彈框
            let showMessage = args.pop() !== false;
            return service({method, url, data, showMessage});
        };
    }
});
import axios from 'axios'
