export const menuItemsQuery = `*[_type == "menuItem"]{
  name,
  description,
  price,
  rating,
  "categories": categories[],
  "image": image.asset->url
}`;
