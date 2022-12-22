import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <Head>
        <title>About Suavetito</title>
        <meta name="description" content="About SuaveTito" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Hello!</h1>
      <p>
        AboutAbout 🌇 I live in Southern California, with a passion for
        developing web applications. 📚 I have been learning to code online
        since the beginning of 2018. I joined Flatiron school in the beginning
        of 2022 to sharpen my skills. I have been solving a variety of code
        challenges and creating small websites. Although I know how to use HTML/
        CSS/ SASS, I love to use React and some open source projects like
        Material-UI to speed up the process of styling Apps. I am currently
        learning Ruby on Rails to start creating a back-end for my apps and
        APIs. 🎓 Grad of Flatirons Software Engineering Boot Camp 💻 My passion
        is to become a Full Stack Developer and learn about Data Engineering &
        Cloud Engineering. 🕹 In my free time I like playing video games and
        learning about Unreal Engine 5. I also love to do digital art. 🎨 💪🏽 My
        skills include: Web Development using JavaScript, React.js, Ruby on
        Rails, Git/GitHub, SQL. 🍦 Soft Skills include: Teamwork, Public
        Speaking, Problem Solving, and Constructive Feedback.
      </p>
    </div>
  );
}
