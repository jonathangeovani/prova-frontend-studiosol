import "./styles.css";

type SectionTitleProps = {
  title: string;
  btnText: string;
};

const SectionTitle = ({ title, btnText }: SectionTitleProps) => {
  return (
    <div className="fav-top">
      <h2>{title}</h2>
      <button className="btn-ver">{btnText}</button>
    </div>
  );
};

export default SectionTitle;
