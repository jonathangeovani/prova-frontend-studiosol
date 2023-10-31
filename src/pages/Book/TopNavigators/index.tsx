import back from "../../../assets/icons/back.svg";
import overflow from "../../../assets/icons/overflow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const TopNavigators = () => {
  const navigate = useNavigate();

  return (
    <div className="top-navigators">
      <img src={back} className="navigator" onClick={() => navigate(-1)} />
      <img src={overflow} className="navigator" />
    </div>
  );
};
export default TopNavigators;
