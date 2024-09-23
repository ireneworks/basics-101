import { annotation, linkButton } from "./annotation.css.ts";

interface Props {
  label: string;
  link: string;
}

export default function Annotation({ link, label }: Props) {
  return (
    <div className={annotation}>
      <a href={link} target={"_blank"} className={linkButton}>
        <span>{label}</span>
      </a>
    </div>
  );
}
