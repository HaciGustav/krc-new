import css from "@/styles/forms.module.css";

const SectionTitle = ({ title }) => {
  return <p className={css.section_title}>{title}</p>;
};

export default SectionTitle;
