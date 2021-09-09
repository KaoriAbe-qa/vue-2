import Vue from 'vue'
import Clock from '@/components/Clock'

describe('Clock.vue', () => {
  it('表示される日付が正しいかの確認', () => {
    const Constructor = Vue.extend(Clock)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.date').textContent)
      .toEqual('2021/09/03')
  })

})
