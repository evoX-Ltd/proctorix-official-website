"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { type Locale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

type Props = {
  readonly defaultValue: string;
  readonly label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const parameters = useParams();

  function onSelectChange(event: SelectChangeEvent) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { params: parameters, pathname },
        { locale: nextLocale }
      );
    });
  }

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        disabled={isPending}
        label={label}
        onChange={onSelectChange}
        value={defaultValue}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
      </Select>
    </FormControl>
  );
}
