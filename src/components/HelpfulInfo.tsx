import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import "./HelpfulInfo.scss"

export default () => {
  const [isActive, setActive] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <button
        className={isActive ? "info-active" : ""}
        id="info-open"
        onClick={() => setActive(true)}
      >
        {t("info.more_btn")}
      </button>

      <ul className={isActive ? "active" : "hidden"} id="more-info">
        <button id="info-close" onClick={() => setActive(false)}>&times;</button>

        <li>
          <strong>{t("info.hotel_strong")}</strong>. {t("info.hotel")}
        </li>

        <li>
          {t("info.flight")} <strong>PRV</strong>.&nbsp;
          {t("info.transportation")}
        </li>

        <li>{t("info.join_us")}</li>

        <li>
          <strong>
            {t("info.gifts_intro_strong")},&nbsp;
            <em>{t("dict.especially")}</em>&nbsp;
            {t("info.gifts_outro_strong")}
          </strong>
          &nbsp;{t("info.gifts_intro")}&nbsp;
          <a
            href={`mailto:${t("info.gifts_email")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("info.gifts_email_text")}
          </a>
          &nbsp;
          {t("info.gifts_outro")}
        </li>
        <li>{t("info.venue_space")}</li>
        <li>{t("info.gratitude")}</li>
      </ul>
    </>
  )
}
