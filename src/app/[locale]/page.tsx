import LocaleSwitcherSelect from "./components/LocaleSwitcherSelect";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <LocaleSwitcherSelect defaultValue={locale} label={t("language")} />
    </div>
  );
}
