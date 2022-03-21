import Image from "next/image";
import classes from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/vercel.scg" alt="" width={300} height={300} />
      </div>
      <h1>ようこそ</h1>
      <p>私ブログへようこそ、Reactの練習中です</p>
    </section>
  );
};
