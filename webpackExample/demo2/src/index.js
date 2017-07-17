/**
 * Created by zhengcaiyun on 2017/7/13.
 */
import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    console.log('顶顶顶顶');
    return element;
}

document.body.appendChild(component());