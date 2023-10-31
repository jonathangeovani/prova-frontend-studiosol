import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer hide-mobile">
      <div className="footer-wrapper">
        <a href="/home.html">
          <span className="footer-logo">SSBOOK</span>
        </a>
        <p className="footer-rights">
          Todos os direitos reservados
          <br />
          Studio Sol Books &copy; 2023
        </p>
      </div>
    </footer>
  );
};
export default Footer;
