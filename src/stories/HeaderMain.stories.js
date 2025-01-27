import HeaderMain from './HeaderMain.vue'

export default {
  title: 'Example/HeaderMain',
  component: HeaderMain,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      HeaderMain
    },
    setup() {
      return {
        ...args
      }
    },
    template: '<HeaderMain :user="user"/>'
  }),
  args: {}
}

export const Admin = {
  args: {
    user: {
      name: 'tsukahara',
      authority: 'admin'
    }
  }
}
export const Staff = {
  args: {
    user: {
      name: 'yamada',
      authority: 'staff'
    }
  }
}
export const Guest = {
  args: {
    user: {
      name: 'nanashi',
      authority: 'guest'
    }
  }
}
