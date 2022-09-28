/*
	Copyright © 2018 Vue Eagle Modal, All rights reserved. eagle-design.ir
*/

import M from './components/List.vue';
import Modal from './components/EagleModal.vue';
import ParentFile from './components/types/Parent.js';

M.install = (Vue, options) => {
  Vue.prototype.$modals = new (Vue.extend(M))({ 
    propsData: options 
  })
  Vue.modals = Vue.prototype.$modals
}

// Auto-install when vue is found (eg. in browser via <script> tag)
// import Vue from 'vue';
// Vue.use(Modals);

export const EagleModal = M;
export const Parent = ParentFile;
export const eModal = Modal;
