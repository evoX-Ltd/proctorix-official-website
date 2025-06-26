import LocaleSwitcherSelect from "./components/LocaleSwitcherSelect";
import ThemeToggler from "./components/ThemeToggler";
import { Link } from "@/i18n/navigation";
import { Card } from "@mui/material";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <Card>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <ThemeToggler />
      <LocaleSwitcherSelect />
    </Card>
  );
}
