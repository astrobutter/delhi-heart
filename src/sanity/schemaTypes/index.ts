import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { bannerType } from "./bannerSection";
import { offerType } from "./offerType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { menuItemType } from "./menuType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, postType, authorType, bannerType,offerType, menuItemType],
};
