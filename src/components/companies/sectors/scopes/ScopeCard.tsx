import { useLanguage } from "@/components/LanguageProvider";
import { formatEmissionsAbsolute, formatPercent } from "@/utils/localizeUnit";
import React from "react";
import { useTranslation } from "react-i18next";

interface ScopeCardProps {
  title: string;
  icon: React.ElementType;
  value: number;
  companies: number;
  color: string;
  percent: number;
  description: string;
  onClick: () => void;
}

const ScopeCard: React.FC<ScopeCardProps> = ({
  title,
  icon: Icon,
  value,
  companies,
  color,
  percent,
  description,
  onClick,
}) => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <div
      className="bg-black-2 rounded-lg p-6 space-y-4 cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`rounded-full p-2 ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-light text-white">{title}</h3>
      </div>

      <p className="text-sm text-grey">{description}</p>

      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm text-grey">
            {t("companiesPage.sectorGraphs.totalEmissions")}
          </div>
          <div
            className={`text-xl font-light ${color.replace("bg-", "text-")}`}
          >
            {formatEmissionsAbsolute(value, currentLanguage)}{" "}
            {t("emissionsUnit")}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-grey">
            {t("companiesPage.sectorGraphs.companiesReporting")}
          </div>
          <div className="text-sm text-white">
            {companies} {t("companiesPage.sectorGraphs.companies")}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-grey">
            {t("companiesPage.sectorGraphs.shareOfTotal")}
          </div>
          <div className={`text-sm ${color.replace("bg-", "text-")}`}>
            {formatPercent(percent, currentLanguage)}
          </div>
        </div>

        <div className="h-2 bg-black-1 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ease-out ${color}`}
            style={{ width: `${percent * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScopeCard;
