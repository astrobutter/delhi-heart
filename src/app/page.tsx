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
  const bannerImages = await client.fetch(bannerquery)
  const offers = await client.fetch(getOffersQuery)
  const menuItems = await client.fetch(menuItemsQuery)
  const menuCategories = await client.fetch(menuCategoriesQuery)

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
