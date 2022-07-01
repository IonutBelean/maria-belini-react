import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} d-flex justify-content-center align-items-center`}
    >
      <Container>Maria Belini</Container>
    </div>
  );
};

export default Footer;
