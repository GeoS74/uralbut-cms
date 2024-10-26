import { useLoaderData } from "react-router-dom"
import classNames from "classnames";
import styles from "./styles.module.css"
import BackArrow from "../../BackArrow/BackArrow";
import OptionalHeader from "../ProgressOptionalHeader/ProgressOptionalHeader";

export default function ProgressPage() {
  const s = useLoaderData() as IInfoBlock;

  return <>
    <BackArrow path={"/progress"} />
    <div className={classNames(styles.root, "card")}>
      <OptionalHeader {...s} />

      <div className={classNames(styles.nested)}>
        <div><h5>{s.title}</h5></div>

        {s.message ? <div>{s.message}</div> : <></>}

        <div>css class: {s.cssClass || 'css класс не указан'}</div>

        <div>Отображается на странице: {s.isPublic ? "да" : "нет"}</div>
      </div>

    </div>
  </>
}