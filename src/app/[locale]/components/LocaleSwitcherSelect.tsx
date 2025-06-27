"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { type Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcherSelect() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const parameters = useParams();

  // function onSelectChange(event: SelectChangeEvent) {
  //   const nextLocale = event.target.value as Locale;
  //   startTransition(() => {
  //     router.replace(
  //       // @ts-expect-error -- TypeScript will validate that only known `params`
  //       // are used in combination with a given `pathname`. Since the two will
  //       // always match for the current route, we can skip runtime checks.
  //       { params: parameters, pathname },
  //       { locale: nextLocale }
  //     );
  //   });
  // }

  return (
   
  );
}
