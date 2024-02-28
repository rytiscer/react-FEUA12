/* eslint-disable react/prop-types */
const CAOCard = (props) => {
  return (
    <div className="card">
      <img className="img" src={props.img} alt="Image" />
      <p className="imgDescription">{props.pText}</p>
    </div>
  );
};

export default CAOCard;
