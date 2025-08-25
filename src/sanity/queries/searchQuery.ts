import { groq } from 'next-sanity'

export const searchMenuItems = groq`
*[_type == "menuItem" && (name match $searchQuery + "*" || description match $searchQuery + "*")] {
  name,
  description,
  price,
  categories,
  "image": image.asset->url
}
`
