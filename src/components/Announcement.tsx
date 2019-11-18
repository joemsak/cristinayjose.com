import React, { useEffect, useRef } from "react"

export default () => {
  const detailsEl = useRef(document.createElement("div"))

  useEffect(() => {
    console.log(window.innerHeight - window.innerHeight * 0.1)
    window.addEventListener("scroll", () => {
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
    })
  })

  return (
    <header id="announcement">
      <div id="script">
        <h1>Save the Date!</h1>
        <h2>Cristina García &amp; Joseph Sak</h2>
      </div>

      <div id="details" ref={detailsEl}>
        <h3>will be married on</h3>

        <h3 id="date">Saturday, November 28, 2020</h3>

        <h4>
          in{" "}
          <a
            href="https://duckduckgo.com/?q=Frente+al+Punto+Beach+Club&t=ffab&atb=v182-1&ia=web&iaxm=maps&strict_bbox=0&bbox=20.873562632881864%2C-105.43841092011411%2C20.870434896546094%2C-105.43398527523954&metatoken=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sayulita, México
          </a>
        </h4>
      </div>
    </header>
  )
}
