import React from "react"

export default () => {
  const photos = [
    "bean",
    "golden-gate",
    "ajijic",
    "bill-cath",
    "costa-rica",
    "bean-bw",
    "end",
  ]

  return (
    <section id="photos">
      {photos.map((photo) => {
        return <img key={photo} src={`/${photo}.jpg`} alt={photo} />
      })}
    </section>
  )
}
