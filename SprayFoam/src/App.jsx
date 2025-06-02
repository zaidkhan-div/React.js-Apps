import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Cta from './Components/Cta'
import Container from '../src/Components/Container'
import Counters from './Components/Counters'
import TwoDivs from './Components/TwoDivs'
import MidSection from './Components/MidSection'
import paintingImage1 from './assets/Images/painting1.png'
import paintingImage2 from './assets/Images/painting2.png'
import paintingImag3 from './assets/Images/painting2.png'
import BenefitsSection from './Components/BenefitsSection'
import Insulation from './Components/Insulation'
import PricingTable from './Components/PricingTable'
import ContactSection from './Components/ContactSection'
import Faqs from './Components/Faqs'
import BlogSection from './Components/BlogSection'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <Cta />
        <Counters />
        <TwoDivs
          title="Best Spray Foam Insulation Contractors in NYC"
          description="Insulation contractors can make a significant impact on the energy efficiency and coziness of your home. By adding insulation to your walls, ceilings, floors, and even attics and basements, they can help regulate the temperature of your home, saving you money on energy bills while keeping you comfortable throughout the year."
          buttonText="Learn More"
          imageSrc={paintingImage1}
        />
      </Container>

      <MidSection
        name='How Spray Foam Insulation Works?'
        para=' Spray foam is typically applied within the cavities of your home. It forms a continuous barrier on the surface it is applied to. The foam is typically stored as two separate chemicals and is mixed onsite as it’s applied.'
        button='Join Us'
      />

      <Container>
        <TwoDivs
          title="SPRAY FOAM INSULATION CONTRACTOR"
          description="We’ve got the experience and the knowledge to work with many contractors, builders, architects and helping homeowners to reduce energy cost that can greatly increase energy efficiency"
          description2='when operating a heating and cooling system We have experience performing Spray Foam insulation “Thermal and Moisture Protection” as a subcontractor, bidding projects on prevailing wage and non-union, in New York and New Jersey Licensed & Insured · More than 15 year of Experience. 100% Satisfaction. insulation companies near me'
          buttonText="Learn More"
          imageSrc={paintingImage2}
          reverseLayout={true}
        />
        <BenefitsSection />
      </Container>

      <Insulation />

      <Container>
        <TwoDivs
          title="Licensed Spray Foam insulation contractor"
          description="There are many insulation companies in New York & New Jersey—why choose Spray Foam Insulation NY?"
          bulletPoints={[
            "License: Never hire an insulation company that isn’t licensed and insured—and with us, you won’t need to worry.",
            "Experience: With over 15 years of experience insulating homes, we understand the ins and outs of the business and can recommend good solutions for your residential or commercial client.",
            "Excellent Service: We are committed to providing the highest quality service, but don’t just take our word for it! Read what our customers have said.",
            "Competitive pricing: We stay up to date with local insulation trends so we can always deliver competitive insulation prices in the area. We even offer free initial estimates!"
          ]}
          buttonText={false}
          imageSrc={paintingImag3}
          reverseLayout={false}
        />
      </Container>

      <MidSection
        name='Insulation Contractors in NYC'
        para='If you’re a contractor or developer who needs insulation for a residential or commercial project in the NYC Area, Peninsula and surrounding areas'
        number={true}
        button='Get In Touch'
      />

      <Container>
        <TwoDivs
          title='Seal in the savings with spray foam insulation!'
          description='Overall, hiring a professional spray foam insulation service contractor can help ensure that your insulation is installed correctly and efficiently, providing long-lasting benefits such as improved energy efficiency, reduced noise levels, and better moisture control.'
          description1='We uphold the highest standards in all our projects to ensure our clients are happy with what we deliver.'
          bulletPoints={[
            "Stops air and moisture infiltration",
            "Makes your home more comfortable",
            "Saves on energy costs",
            "Adds strength to the building structure",
            "It is permanent and will not sag",
            "Keeps dust and pollen out",
            "Reduces capacity requirements, maintenance and wear of HVAC equipment"
          ]}
          imageSrc={paintingImag3}
          buttonText={false}
          reverseLayout={true}
        />
        <PricingTable />
        <BlogSection />
      </Container>

      <MidSection
        name='Save money and live more comfortably'
        para1='Trusted Professionals in New York City'
        para='by increasing the energy efficiency of your home'
        para2='Spray foam Insulation, Fireproofing & Drywall Contractors Serving, New York City, Queens, Brooklyn, Staten Island, Manhattan, NJ. '
        button='Get In Touch'
        number={true}
      />
      <Container>
        <Faqs />
      </Container>
      <ContactSection />

    </>
  )
}

export default App