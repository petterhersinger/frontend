import { Trans, useTranslation } from "react-i18next";

export const CalculationsContent = () => {
  const { t } = useTranslation();
  return (
    <div className="prose prose-invert mx-auto space-y-8">
      <p>{t("methodsPage.municipality.calculations.paragraph1")}</p>
      <p>
        <Trans
          i18nKey="methodsPage.municipality.calculations.paragraph2"
          components={[
            <a
              title="Här"
              className="underline hover:text-white transition-colors"
              href="https://docs.google.com/document/d/1MihysUkfunbV0LjwSUCiGSqWQSo5U03K0RMbRsVBL7U"
              target="_blank"
              rel="noopener noreferrer"
            />,
          ]}
        />
      </p>
    </div>
  );
};
