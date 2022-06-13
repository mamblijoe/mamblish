import { FC } from "react";
import cn from './style.module.sass'
interface IProps {}

const Loader: FC<IProps> = (props) => {
  return <div className={cn.spinner}>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>;
};

export default Loader;
