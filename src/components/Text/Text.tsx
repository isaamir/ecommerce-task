import { clsx } from 'clsx';

const Text = ({ size = 'md', variant = 'gray', as = 'p', className, children }:any) => {

  const Tag = as;

  const sizes = {
    sm: 'font-[12px]',
    md: 'text-[14px] font-normal',
    lg: 'text-[18px] font-medium'
  } as any

  const variants = {
    gray: 'text-[14px] text-[#666]',
    white: 'text-white',
    dark: 'text-gray-900'
  } as any

  return (
    <Tag className={clsx(sizes[size], variants[variant], className)}>
      {children}
    </Tag>
  )
}

export default Text;