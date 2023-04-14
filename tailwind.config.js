/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{

        'agora': 'url("./assets/icons/Agora.svg")',
        'agora_auth': 'url("./assets/icons/Agora-auth.svg")',
        'agora_icon': 'url("./assets/icons/Agora-icon.svg")',
        'inbox_stack': 'url("./assets/icons/inbox-stack.svg")',
        'shopping_bag': 'url("./assets/icons/shopping-bag.svg")',
        'shopping_bag_dark': 'url("./assets/icons/shopping-bag-dark.svg")',
        'user': 'url("./assets/icons/user.svg")',
      }
    },
  },
  plugins: [],
}

