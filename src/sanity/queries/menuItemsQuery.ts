export const menuItemsQuery = `*[_type == "menuItem"]{
  name,
  description,
  price,
  rating,
  category,
  "image": image.asset->url
}`;
