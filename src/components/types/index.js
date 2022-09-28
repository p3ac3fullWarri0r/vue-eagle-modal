import text from './input.vue';
import image from './image.vue';
import select from './select.vue';
import checkbox from './checkbox.vue';
import radio from './radio.vue';
import textarea from './textarea.vue';
import file from './file.vue';
import content from './content.vue';


let items = {text,image,checkbox,radio,select,textarea,file,content};

// modify
let _items = {};
for(let k in items) _items['eform-' + k] = items[k];
export default _items;