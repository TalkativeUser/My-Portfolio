import styles from "./TextEffect3D.module.css";

export default function TextEffect3D({text}:{text:string}) {
  return (
    <div className={styles.textEffect3d}>

      <h1 >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </h1>

    </div>
  );
}
