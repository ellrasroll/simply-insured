import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home1/Feature"
import Funfacts from "@/components/sections/home1/Funfacts"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Work from "@/components/sections/home1/Work"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Faq from "@/components/sections/home1/Faq"
import Quote from "@/components/sections/home1/Quote"
import Testimonial from "@/components/sections/home1/Testimonial"
import ToolsAndCalculators from "@/components/sections/home1/Tools"
import Cta from "@/components/sections/home1/Cta"
import SEO from "@/components/Seo"
export default function Home() {

    return (
        <>
          <SEO 
                title="Welcome to Our Insurance Services || Simply Insured" 
                description="Explore our comprehensive insurance solutions and discover how we can help you protect what matters most." 
                image="/assets/images/resources/logo-1.png"
                url="https://simplyinsured.co.uk/"
            />
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Funfacts />
                <Cta />
                <Service />
                <WhyChooseUs />
                <Work />
                <Faq />
                <Testimonial />
                <Quote />
                <Brand />
                <Blog />
                {/* <ToolsAndCalculators/> */}
            </Layout>

        </>
    )
}