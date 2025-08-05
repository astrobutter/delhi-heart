export const getOffersQuery = `*[_type == "offer"]{
  _id,
  headline,
  subtext,
  details,
  "image": image.asset->url
}`;
