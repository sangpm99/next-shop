import { Button as AntdButton } from "antd";
import type { ButtonProps } from "antd";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

const defaultProps: Partial<Props> = {
  color: "primary",
  variant: "solid",
};

function Button({ children, ...props }: Props) {
  const mergedProps = { ...defaultProps, ...props };
  return <AntdButton {...mergedProps}>{children}</AntdButton>;
}

export default Button;
