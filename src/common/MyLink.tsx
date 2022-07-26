import { Link, LinkProps } from "react-router-dom";
interface Props extends LinkProps {}
export default function MyLink(props: Props) {
  const { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
}
