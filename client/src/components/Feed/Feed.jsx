import "./feed.css";
import Avatar from "../Avatar/Avatar";
import React from "react";

function Feed() {
  return (
    // date
    <div className="feed">
      <div className="feed_date">
        <Avatar/>
        <p>2/22/2008</p>
      </div>
      {/* img */}
      <div className="feed_img">
        <img src="https://picsum.photos/200/300?random=2" alt="feed_image" />
      </div>
      {/* content */}
      <div className="feed_content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro
          molestias inventore nemo, eius maxime quos corrupti maiores dolorum
          saepe, magni omnis soluta natus doloremque accusantium praesentium ea
          reiciendis qui.
        </p>
      </div>
    </div>
  );
}

export default Feed;
