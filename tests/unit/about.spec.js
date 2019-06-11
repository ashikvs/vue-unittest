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

  
})