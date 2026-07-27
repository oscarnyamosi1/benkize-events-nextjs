import { Award, Heart, Leaf, Star, Users, ChefHat, Clock, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Benkiz Events | Leading Catering Services in Kisii, Kenya</title>
        <meta
          name="description"
          content="Benkiz Events is a premier catering company in Kisii, Kenya, offering authentic African cuisine, wedding catering, corporate events, and private chef services. Discover our story, values, and commitment to culinary excellence."
        />
        <meta
          name="keywords"
          content="Benkiz Events, catering services Kisii, wedding catering Kisii, corporate catering Kenya, private chef Kisii, African cuisine, event catering, professional chefs Kenya"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://events.benkiz.org/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Benkiz Events | Premier Catering Services in Kisii, Kenya" />
        <meta
          property="og:description"
          content="Discover the story behind Benkiz Events — a leading catering company in Kisii offering authentic African cuisine, wedding catering, corporate events, and private chef services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://events.benkiz.org/about" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782392526/IMG-20230607-WA0006_hydiuh.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Benkiz Events | Premier Catering Services in Kisii, Kenya" />
        <meta
          name="twitter:description"
          content="Benkiz Events delivers exceptional culinary experiences combining authentic African flavors with modern international cuisine. Trusted by families and businesses across Kisii."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782392526/IMG-20230607-WA0006_hydiuh.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About Benkiz Events',
              description:
                'Benkiz Events is a premier catering company in Kisii, Kenya, offering authentic African cuisine, wedding catering, corporate events, and private chef services.',
              url: 'https://events.benkiz.org/about',
              mainEntity: {
                '@type': 'Organization',
                name: 'Benkiz Events',
                description:
                  'One of the leading catering companies in Kisii, renowned for delivering exceptional culinary experiences that combine authentic African flavors with modern international cuisine.',
                foundingDate: '2015',
                founder: {
                  '@type': 'Person',
                  name: 'Benkiz',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kisii',
                  addressCountry: 'Kenya',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Service',
                  availableLanguage: ['English', 'Swahili'],
                },
                sameAs: [
                  'https://www.facebook.com/benkizevents',
                  'https://www.instagram.com/benkizevents',
                ],
              },
            }),
          }}
        />
      </Head>

      <Layout>
        <main className="pt-4 pb-20 min-h-screen" role="main" aria-label="About Benkiz Events">

          {/* ===== HERO SECTION ===== */}
          <section
            className="container mx-auto px-4 md:px-6 mb-16 md:mb-24"
            aria-labelledby="about-hero-title"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Text Content — Column 1 */}
              <div className="space-y-5 md:space-y-6 order-1 md:order-none">
                <p className="text-primary tracking-[0.2em] text-sm font-semibold uppercase">
                  Our Story
                </p>
                <h1
                  id="about-hero-title"
                  className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
                >
                  Elevating <br />
                  <span className="text-muted-foreground italic">African</span> Cuisine
                </h1>

                <div className="prose prose-lg prose-muted max-w-none space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                    <strong>Benkiz Events</strong> is one of the leading catering companies in
                    Kisii, renowned for delivering exceptional culinary experiences that combine
                    authentic African flavors with modern international cuisine. Whether you are
                    searching for a professional chef in Kisii, premium catering services, or
                    complete event catering solutions, <strong>Benkiz Events</strong> is committed
                    to making every occasion memorable through outstanding food, elegant
                    presentation, and impeccable service.
                  </p>

                  {/* Bullet list of event types */}
                  <div className="my-4">
                    <p className="text-base sm:text-lg font-semibold text-foreground">
                      We specialise in a wide range of events, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base sm:text-lg marker:text-primary pl-2">
                      <li>Intimate family gatherings</li>
                      <li>Grand weddings</li>
                      <li>Corporate functions and conferences</li>
                      <li>Graduations and birthdays</li>
                      <li>Private celebrations</li>
                      <li>Buffet and outdoor catering</li>
                      <li>Full‑service event planning and support</li>
                    </ul>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed">
                    Our experienced chefs and hospitality team create customized menus that suit
                    every taste, culture, and budget. Every dish is prepared using fresh, carefully
                    selected ingredients to ensure exceptional flavor, quality, and presentation.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    At <strong>Benkiz Events</strong>, we believe that great food is at the
                    heart of every successful event. Our team works closely with clients from
                    planning to execution, ensuring every detail is handled professionally and
                    every guest enjoys a five-star dining experience. Our dedication to
                    consistency, hygiene, punctuality, and customer satisfaction has earned us a
                    strong reputation among individuals, businesses, institutions, and
                    organizations throughout Kisii County and beyond.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Whether you need a private chef, wedding catering, buffet catering, outdoor
                    catering, corporate catering, event planning support, or full-service catering
                    for large events, <strong>Benkiz Events</strong> provides reliable solutions
                    tailored to your needs. We pride ourselves on delivering not just meals, but
                    unforgettable experiences that leave lasting impressions.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Our passion for excellence, creativity in menu design, and commitment to
                    outstanding hospitality continue to make <strong>Benkiz Events</strong> a
                    preferred choice for catering services in Kisii. Every event we serve reflects
                    our promise of quality, professionalism, and attention to detail.
                  </p>
                </div>

                <div className="pt-4">
                  <h2 className="font-serif text-2xl sm:text-3xl mb-3">
                    Why Choose <span className="text-primary">Benkiz Events</span>?
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-muted-foreground list-disc list-inside marker:text-primary">
                    <li>Professional chefs with extensive culinary expertise</li>
                    <li>Premium wedding, corporate, and event catering services</li>
                    <li>Authentic African cuisine alongside continental and international dishes</li>
                    <li>Fresh, high-quality ingredients sourced with care</li>
                    <li>Elegant buffet setups and food presentation</li>
                    <li>Reliable, punctual, and professional service</li>
                    <li>Customized menus for every event and budget</li>
                    <li>Exceptional customer experience from consultation to event completion</li>
                    <li>Trusted by families, businesses, schools, churches, and organizations across Kisii</li>
                  </ul>
                </div>

                <div className="pt-4 space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl">
                    Our <span className="text-primary">Vision</span>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred catering company in Kisii and across
                    Kenya, recognized for culinary excellence, innovation, and exceptional
                    customer service.
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl pt-4">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    To create memorable dining experiences by providing delicious food,
                    professional chefs, outstanding hospitality, and world-class catering services
                    that exceed our clients&apos; expectations.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
                  We don&apos;t just cook food; we curate experiences. From the sourcing of
                  authentic spices to the final exquisite plating, every step is guided by a deep
                  respect for our heritage and a passion for hospitality.
                </p>
              </div>

              {/* Image Grid — Column 2 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 md:order-none">
                <div className="glass p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem] col-span-2">
                  <Image
                    src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1782392526/IMG-20230607-WA0006_hydiuh.jpg"
                    alt="Benkiz Events culinary team presenting an elegantly plated African-inspired dish with fresh ingredients"
                    className="rounded-xl sm:rounded-[1.5rem] w-full h-auto object-cover object-center"
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="glass p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem]">
                  <Image
                    src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538196/IMG-20260615-WA0031_apsxwp.jpg"
                    alt="Mr. Benkiz, founder of Benkiz Events, professionally plating a gourmet dish in the kitchen"
                    className="rounded-xl sm:rounded-[1.5rem] w-full h-auto object-cover object-center"
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="glass p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem]">
                  <Image
                    src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538197/IMG-20260615-WA0032_lndxzt.jpg"
                    alt="Benkiz Events team preparing fresh ingredients for an upcoming event in Kisii"
                    className="rounded-xl sm:rounded-[1.5rem] w-full h-auto object-cover object-center"
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ===== VALUES / PHILOSOPHY ===== */}
          <section
            className="bg-card/50 py-16 md:py-24 relative overflow-hidden"
            aria-labelledby="philosophy-title"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2
                  id="philosophy-title"
                  className="font-serif text-3xl sm:text-4xl mb-3"
                >
                  Our Philosophy
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  The principles that guide our kitchen and our service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { icon: Star, title: 'Excellence', desc: 'Uncompromising quality in ingredients, preparation, and presentation.' },
                  { icon: Heart, title: 'Heritage', desc: 'Honoring traditional recipes while embracing modern culinary techniques.' },
                  { icon: Leaf, title: 'Sustainability', desc: 'Sourcing locally and minimizing our environmental footprint.' },
                  { icon: Award, title: 'Hospitality', desc: 'Anticipating needs and exceeding expectations at every touchpoint.' },
                ].map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl mb-2">{val.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ===== TIMELINE / JOURNEY ===== */}
          <section
            className="py-16 md:py-24"
            aria-labelledby="journey-title"
          >
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2
                id="journey-title"
                className="font-serif text-3xl sm:text-4xl mb-12 md:mb-16 text-center"
              >
                Our Journey
              </h2>

              <div className="relative">
                {/* Vertical line — hidden on mobile, visible from sm up */}
                <div
                  className="hidden sm:block absolute inset-0 ml-5 sm:ml-6 md:ml-0 md:left-1/2 -translate-x-px md:-translate-x-1/2 h-full w-0.5 bg-border"
                  aria-hidden="true"
                />

                <div className="space-y-10 sm:space-y-12">
                  {[
                    { year: '2015', title: 'The Beginning', desc: 'Started as a boutique private chef service catering to intimate gatherings of 10–20 people.' },
                    { year: '2018', title: 'Expansion', desc: 'Opened our first commercial kitchen and expanded into wedding and mid-sized corporate events.' },
                    { year: '2021', title: 'Recognition', desc: "Awarded 'Best Contemporary African Caterer' by Culinary Excellence Magazine." },
                    { year: '2024', title: 'Today', desc: 'A team of 50+ professionals executing large-scale, high-end events across the region.' },
                  ].map((item, i) => (
                    <div
                      key={item.year}
                      className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0"
                    >
                      {/* Dot */}
                      <div
                        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background border-4 border-primary shrink-0 sm:absolute sm:left-5 md:left-1/2 sm:-translate-x-1/2 md:-translate-x-1/2 z-10"
                        aria-hidden="true"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>

                      {/* Card — left on odd, right on even (desktop) */}
                      <div
                        className={`w-full sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-5 sm:p-6 rounded-2xl sm:ml-12 md:ml-0 ${
                          i % 2 === 0
                            ? 'md:mr-auto md:ml-0 md:pr-8'
                            : 'md:ml-auto md:pl-8'
                        }`}
                      >
                        <span className="text-primary font-mono font-bold text-lg sm:text-xl block mb-1">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== CTA / TRUST BADGES ===== */}
          <section
            className="container mx-auto px-4 md:px-6 py-8 md:py-12"
            aria-label="Trust and reputation"
          >
            <div className="bg-primary/5 rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { icon: Users, label: 'Happy Clients', value: '2,500+' },
                { icon: ChefHat, label: 'Expert Chefs', value: '25+' },
                { icon: Clock, label: 'Years of Excellence', value: '9+' },
                { icon: MapPin, label: 'Events Served', value: '3,000+' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label}>
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" aria-hidden="true" />
                    </div>
                    <div className="font-serif text-xl sm:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

        </main>
      </Layout>
    </>
  );
}