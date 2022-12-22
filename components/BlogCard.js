import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogCard({
  title,
  author,
  content,
  coverPhoto,
  datePublished,
  slug,
}) {
  function convertDateToDayofWeek(datePublished) {
    // const dateString = "11/25/2022";
    const datePub = new Date(datePublished);
    const formattedDate = datePub.toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    const date = new Date(formattedDate);
    const dayOfWeekNumber = date.getDay();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = dayNames[dayOfWeekNumber];

    return dayOfWeek;
  }
  // console.log(convertDateToDayofWeek(datePublished)); // returns Friday Thursday  Thursday

  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt="" />
        </div>
      </Link>

      <div className={styles.text}>
        <h5>{title}</h5>
        <p>{content}</p>
        <div className={styles.details}>
          <div className="author">
            <img id="author-img" src={author.avatar.url} alt="" />
          </div>
          <div className={styles.date}>
            <h5>{author.name}</h5>
            <small>{datePublished}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
