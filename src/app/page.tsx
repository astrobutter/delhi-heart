import { Navbar } from "@/components/Navbar"
import MenuSection from "@/components/MenuSection"
import Head from "next/head"
import { Banner } from "@/components/Banner"
import { client } from "@/sanity/lib/client"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { OfferSlider } from "@/components/OfferSlider"
import { bannerquery } from "@/sanity/queries/bannerquery"
import { getOffersQuery } from "@/sanity/queries/offerQuery"
import { menuItemsQuery } from "@/sanity/queries/menuItemsQuery"
import { menuCategoriesQuery } from "@/sanity/queries/menuCategoriesQuery"

export default async function Home() {
   const bannerImages = await client.fetch(bannerquery,{},{cache: 'no-store'})
  const offers = await client.fetch(getOffersQuery,{},{cache: 'no-store'})
  const menuItems = await client.fetch(menuItemsQuery,{},{cache: 'no-store'})
  const menuCategories = await client.fetch(menuCategoriesQuery,{},{cache: 'no-store'})

  return (
    <>
    <div>
      <Navbar />
      <Banner images={bannerImages} />
      <MenuSection menuItems={menuItems} categories={menuCategories} />
      <OfferSlider offers={offers} />
      <Contact />
      <Footer />
    </div>
    </>
  )
}
