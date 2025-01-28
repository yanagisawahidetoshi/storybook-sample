import userHeader from './userHeader.vue'

export default {
  title: 'Example/userHeader',
  component: userHeader,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Admin = {
  args: {
    user: {
      name: 'ヤマダ01',
      permission: 'admin'
    }
  }
}

export const Staff = {
  args: {
    user: {
      name: 'ヤマダ02',
      permission: 'staff'
    }
  }
}

export const Guest = {
  args: {
    user: {
      name: 'ヤマダ03',
      permission: 'guest'
    }
  }
}
