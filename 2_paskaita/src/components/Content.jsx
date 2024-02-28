/* eslint-disable react/prop-types */
import imgTag from "../assets/imgTag.png";

import CAOCard from "./CAOCard";

const Content = (props) => {
  return (
    <div className="main">
      <h2>{props.title}</h2>
      <p>{props.pText}</p>
      <div className="gallery">
        <CAOCard img={imgTag} pText="Description" />
        <CAOCard img={imgTag} pText="Description" />
        <CAOCard img={imgTag} pText="Description" />
        <CAOCard img={imgTag} pText="Description" />
        <CAOCard img={imgTag} pText="Description" />
        <CAOCard img={imgTag} pText="Description" />
      </div>
    </div>
  );
};

export default Content;
