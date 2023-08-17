import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data displaty/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/elioenays.png',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
