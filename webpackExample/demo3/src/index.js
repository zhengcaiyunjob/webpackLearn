/**
 * Created by zhengcaiyun on 2017/7/13.
 */
import Library from './library';

if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!');
        Library.log('loading ...');
    })
}