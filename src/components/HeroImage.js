import { useNavigate } from "react-router";
import Button from "../UI/Button";
import classes from "./HeroImage.module.css";

const HeroImage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/about');
  }

  return (
    <div className={classes["hero-image"]}>
      <div className={classes["text-box"]}>
        <h2>
          <span className={classes.heading}>A Dummy</span>
          <span className={classes.heading}>Ecommerce Store</span>
        </h2>
        <p>Just a little project to demonstrate some React.js skills</p>
        <Button onClick={navigateHandler}>Learn More</Button>
      </div>
    </div>
  );
};

export default HeroImage;
