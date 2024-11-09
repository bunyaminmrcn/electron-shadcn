import React from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <>
            <h1> {t("title")}</h1>
            <ToggleTheme />
            <LangToggle />
        </>
    );
}
