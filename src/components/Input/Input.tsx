import { useId } from "react";
import { clsx } from "clsx";
import Button from "../Button";
import { AiOutlineArrowRight } from "react-icons/ai"

const Input = (props: any) => {
  const {
    label,
    type = "text",
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = "",
    errorText = "",
    rounded = "lg",
    ...rest
  } = props;

  const id = useId();

  const styles = {
    base: "text-[#4B4B4B] font-normal border-solid border-[1px]  flex-1 appearance-none w-full py-2 px-4  text-gray-700  shadow-sm text-base focus:outline-none focus:border-[#4B4B4B]",
    state: {
      normal: "placeholder-gray-400 border-gray-300 focus:#4B4B4B",
      error: "border-red-600 focus:ring-red-600",
      valid: "border-[#666] focus:#4B4B4B",
      disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
    },
    rounded: {
      none: null,
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  };

  return (
    <div className={clsx("relative", className)}>
      <div className="flex">
      <input
        id={id}
        type={type}
        className={clsx([
          styles.base,
          // rounded && styles.rounded[rounded],
          error ? styles.state.error : styles.state.normal,
          valid ? styles.state.valid : styles.state.normal,
          disabled && styles.state.disabled,
        ])}
        disabled={disabled}
        required={required}
        {...rest}
      />
      <Button size="small" variant="light"> <AiOutlineArrowRight /> </Button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{errorText}</p>}
    </div>
  );
};

export default Input;
