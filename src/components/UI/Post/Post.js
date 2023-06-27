import React from "react";
import Link from "next/link";

const Post = ({ typePost = "base", className, url, title }) => {
  const addClassName = className ? className : `relative`;

  const addUrl = url ? url : "";
  const addTitle = title ? title : "This Post";

  return (
    <>
      {/* Post (Default) */}
      {typePost === "base" && <li className={`${addClassName}`}>{addTitle}</li>}

      {/* Post (With Link) */}
      {typePost === "link" && (
        <li className={`${addClassName}`}>
          <Link
            className="leading-initial outline-none hocus:outline-none"
            href={addUrl}
          >
            {addTitle}
          </Link>
        </li>
      )}

      {/* Post (With Blank Link) */}
      {typePost === "blank-link" && (
        <li className={`${addClassName}`}>
          <Link
            className="leading-initial outline-none hocus:outline-none"
            href={addUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {addTitle}
          </Link>
        </li>
      )}
    </>
  );
};

export default Post;
