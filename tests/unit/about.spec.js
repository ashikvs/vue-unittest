<<<<<<< HEAD
import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
    
  it('renders li for each item in props.items', () => {
    debugger;
    const items = ['first','second']
    const wrapper = shallowMount(About, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  
=======
import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
    
  it('renders li for each item in props.items', () => {
    debugger;
    const items = ['first','second']
    const wrapper = shallowMount(About, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  
>>>>>>> efd32db94f0a6387c08c3e551973c9c1ae9738c1
})