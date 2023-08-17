import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}