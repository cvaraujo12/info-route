import { IntroSection } from "@/components/sections/IntroSection"
import { FeatureSection } from "@/components/sections/FeatureSection"
import { NewsSection } from "@/components/sections/NewsSection"
import { MapComponent } from "@/components/maps/MapComponent"
import { countries } from "@/data/countries"

export default function Home() {
  return (
    <>
      <IntroSection />
      <div className="p-4">
        <MapComponent countries={countries} />
      </div>
      <FeatureSection />
      <NewsSection />
    </>
  )
} 