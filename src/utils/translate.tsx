import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: string;
}

const Tl: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return <>{t(props.children)}</>;
};

export default Tl;
