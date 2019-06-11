import Vue from 'vue';
import Heading from '@/components/Heading.vue';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  //return vm.$el;
  //return vue instance
  return vm;
}

describe('Heading.vue', () => {
  it('should be the correct color', () => {
    const headingData = mountComponentWithProps(Heading, { color: 'red' });
    //const styleData = headingData.style.getPropertyValue('color');
    const styleData = headingData._vnode.children[0].elm.style.color;
    expect(styleData).toEqual('red');
  });

  it('should have the correct title', () => {
    const headingData = mountComponentWithProps(Heading, { title: 'Hello, Vue!' });
    //const titleData = headingData.textContent;
    const titleData = headingData._vnode.children[0].elm.textContent;

    //expect(titleData).toEqual('Hello, Vue!');
    expect(titleData).toEqual('Hello, Vue!');
  });



});