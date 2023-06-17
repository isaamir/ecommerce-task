import { clsx } from 'clsx';

const Text = ({ size = 'md', variant = 'gray', as = 'p', className, children }:any) => {

  const Tag = as;

  const sizes = {
    sm: 'text-[12px]',
    md: 'text-[14px] font-normal',
    lg: 'text-[16px] font-medium',
    xl: 'text-[24px] text-[#505050]'
  } as any

  const variants = {
    gray: 'text-[14px] text-[#666]',
    red: ' text-[#ff4136]',
    contrast: 'text-[#666] hover:text-[#ff4136]',
    white: 'text-[#ffffff] font-normal',
    underline: 'text-[#ffffff] font-normal text-[16px] py-2 border-b-[1px] border-[#ffffff]-1',
    dark: 'text-[444] font-medium'
  } as any

  return (
    <Tag className={clsx(sizes[size], variants[variant], className)}>
      {children}
    </Tag>
  )
}

export default Text;