/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
