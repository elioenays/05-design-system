import { Box, Text, TextInput, TextInputProps } from '@eli-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size='sm'>Email address</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: { placeholder: 'Type your name' },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: { disabled: true },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: { prefix: 'cal.com/', placeholder: 'your username' },
}
