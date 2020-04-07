import Error from '@layouts/error.vue'

describe('Error', () => {
  let wrapper
  let options

  beforeEach(() => {
    options = {
      propsData: {
        error: {
          statusCode: '404',
        },
      },
    }

    wrapper = createWrapper(Error, options)
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders generic message', () => {
    wrapper.setProps({
      error: null,
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('does not render image if src path is not available', async () => {
    wrapper.setData({ artwork: null })

    await wrapper.vm.$nextTick()

    expect(wrapper).toMatchSnapshot()
  })
})
