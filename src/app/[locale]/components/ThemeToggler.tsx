"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("ThemeToggler");

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   // to avoid layout shift, render a placeholder button
  //   return (

  //   );
  // }

  return <div>hello Mohammed</div>;
};

export default ThemeToggler;
