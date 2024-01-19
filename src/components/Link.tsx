import type { FC } from 'react'

import type { IconType } from 'react-icons'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  Icon?: IconType
  children: string
  href?: string
  isExternalLink?: boolean
}

const Link: FC<Props> = ({ children, isExternalLink, href, Icon }) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-center justify-items-center bg-dark-400/5 dark:bg-dark-800 rounded-full overflow-hidden py-[1.5px] px-[1.49px] relative z-10 ${!href ? 'cursor-default' : 'cursor-pointer'}`}
      target={isExternalLink ? '_blank' : undefined}
    >
      <div
        className={`flex items-center justify-center text-sm bg-grey-50 text-dark-400 dark:text-white px-[6px] py-[5px] rounded-full gap-x-1 dark:bg-dark-800 before:absolute before:-bottom-2 before:-left-2 before:w-full before:h-9 before:rounded-3xl before:bg-grey-200 before:-z-10 before:content-[''] before:blur-sm hover:before:h-20 hover:before:w-[115%] before:transition-all before:duration-[300ms]`}
      >
        {Icon && <Icon className='text-xl' />}

        <span className='font-medium dark:font-normal'>{children}</span>

        {isExternalLink && <FiExternalLink className='text-lg' />}
      </div>
    </a>
  )
}

export default Link
