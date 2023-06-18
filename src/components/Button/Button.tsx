
import { type ButtonHTMLAttributes, type ReactNode } from "react"
import clsx from "clsx"

type TButtonVariant = "regular" | "red" | "link" | "icon" | "iconSlider" | "light"
type TButtonSize = "regular" | "large" | "small"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize
  variant?: TButtonVariant
  children: ReactNode
  className?: string
}

const Button = ({
  size = "regular",
  variant = "regular",
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        "px-[50px] py-[20px] text-[14px] uppercase transition-all",
        "disabled:cursor-not-allowed disabled:opacity-50",
        size === "large" && "px-[70px] py-[15px] text-base",
        size === "regular" && "px-[50px] py-[10px] text-[14px]",
        size === "small" && "px-[30px] py-[5px]",
        variant === "regular" &&
          "text-[#4B4B4B] font-normal border-solid border-[1px] border-[#666] hover:bg-[#ff4136] hover:border-[#ff4136] hover:text-[#ffffff] disabled:hover:bg-brand",
        variant === "red" &&
          "text-[#4B4B4B] font-normal border-solid border-[1px] border-[#666] hover:bg-[#ff4136] hover:border-[#ff4136] hover:text-[#ffffff] disabled:hover:bg-brand",
        variant === "light" &&
          "px-[8px] py-[20px] text-[#4B4B4B] font-normal border-solid border-[1px] border-[#D7DBDD] hover:bg-[#ff4136] hover:border-[#ff4136] hover:text-[#ffffff] disabled:hover:bg-brand",
        variant === "icon" && "px-[8px] py-[8px]",
        variant === "iconSlider" && "px-[6px] py-[6px] bg-[#CACFD2] hover:bg-[#626567] rounded-[50%]",
        
        variant === "link" && "rounded-[50%] px-[8px] py-[8px] border-solid border-[1px] border-[#c1c1c1] hover:bg-[#ff4136] hover:border-[#ff4136] disabled:no-underline",
        className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
