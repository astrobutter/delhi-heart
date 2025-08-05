export const menuCategoriesQuery = `array::unique(*[_type == "menuItem"].category)`;
