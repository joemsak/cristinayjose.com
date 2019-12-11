import React, { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

import "./Announcement.scss"

export default () => {
  const detailsEl = useRef(document.createElement("div"))
  const { t } = useTranslation()

  useEffect(() => {
    const revealDetails = () => {
      const windowHeight = window.innerHeight
      const heightLimit = windowHeight - windowHeight * 0.1
      const offsetTop = detailsEl.current.getBoundingClientRect().top

      if (offsetTop < heightLimit) {
        detailsEl.current.style.maxHeight = "500px"
        detailsEl.current.style.transition = "max-height 2s"
      } else if (offsetTop >= windowHeight) {
        detailsEl.current.style.maxHeight = "0"
        detailsEl.current.style.transition = "none"
      }
    }

    window.addEventListener("scroll", revealDetails)
    revealDetails()
  })

  return (
    <header id="announcement">
      <div id="script">
        <h1>{t("announcement.save_the_date")}!</h1>
        <h2>Cristina García &amp; Joseph Sak</h2>
      </div>

      <div id="details" ref={detailsEl}>
        <h3>{t("announcement.will_be_married_on")}</h3>

        <h3 id="date">
          {t("days.saturday")}, {t("months.november")} 28, 2020
        </h3>

        <h4>
          {t("dict.in")}&nbsp;
          <a
            href="https://maraica.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            San Pancho, México
          </a>
        </h4>
      </div>
    </header>
  )
}
