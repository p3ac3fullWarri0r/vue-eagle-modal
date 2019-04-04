# vue-eagle-modal

[Document](https://eagle-design.ir/vue-eagle-modal)
<br>
[Demos](https://eagle-design.ir/vue-eagle-modal/demo.html)
<br>
[Design and Developed by eagle design](https://eagle-design.ir)
<br>
[Fork developing by **bees4ever**](https://github.com/bees4ever/)

## Project setup
```
 NPM not working yet
```
Register Plugin
```
import {EagleModal} from 'vue-eagle-modal'
Vue.use(EagleModal);
```

### Usage
```
let m = this.$modals.add({
    title: 'Title',
	subtitle: 'Some description',
    theme: 'osx', // || mojave,
    items: [
    	{
    		label: 'Username',
    		name: 'username',
    		type: 'text',
    		value: 'Daniel',
    	},
    	{
    		label: 'Bio',
    		name: 'bio',
    		type: 'textarea',
    		value: 'web developer',
    	}
    ],
  });
  m.open();
  
  m.onsave( (m) => {
  	m.loading();
  	setTimeout(() => {
	  	console.log(m.formData())
	  	console.log(m.getItems())
  		m.loaded()
	},500)
  })

  m.onreload( () => {
  	console.log('Reloaded')
  })

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


> You can use this package in your projects : )
<br>

Design and Developed by
[Eagle Design](https://eagle-design.ir) studio :heart:

`Email` [eagledesign.ir@gmail.com](mailto:eagledesign.ir@gmail.com)
<br>
`Phone` [+989169942377](tel:+989169942377)
<br>
`Telegram` [Get in touch with me in telegream](https://t.me/eagledesign)
