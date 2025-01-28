import ContactHeader from './ContactHeader.vue'

export default {
  title: 'Example/ContactHeader',
  component: ContactHeader,
  tags: ['autodocs'],
}

export const Admin = {
  args: {
    user: {
      name: "suzuki",
      authority: "admin"
    },
  }
}
export const Staff = {
  args: {
    user: {
      name: "yamada",
      authority: "staff"
    },
  }
}
export const Guest = {
  args: {
    user: {
      name: "tanaka",
      authority: "guest"
    },
  }
}

