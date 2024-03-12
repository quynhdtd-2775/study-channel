import { CSSProperties } from "react";

type Props = {
  title: string;
  icon?: string;
  style?: CSSProperties;
};

const Label = ({ title, icon, style }: Props) => {
  return (
    <label style={style} className="">
      {title}
    </label>
  );
};
export default Label;
