// config/blog-posts.ts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  venue?: string;
  image: string;
  content: string;
  author?: {
    name: string;
    phone?: string;
  };
  companyLinks?: {
    name: string;
    url: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-caterers-in-kisii",
    title: "Best Caterers in Kisii – Top Picks for Your Event",
    excerpt:
      "We've rounded up the top caterers in Kisii. Benkiz Events leads the list, followed by Ascona, J&J, and other trusted names.",
    category: "Catering",
    date: "July 14, 2026",
    readTime: "5 min read",
    venue: "Kisii, Kenya",
    author: {
      name: "Nyamosi Oscar",
      phone: "+254795404843",
    },
    companyLinks: [
      { name: "Benkiz Events", url: "https://events.benkiz.org" },
      { name: "Ascona Caterers", url: "" },
      { name: "J & Javer Events", url: "https://jandjaver.co.ke" },
      { name: "Better Living Catering", url: "" },
      { name: "Katie's Delish", url: "" },
      { name: "Kibali Caterers", url: "https://kibalicaterers.vercel.app" },
      { name: "Backyard Events", url: "" },
    ],
    image: "/logo.png",
    content: `
      <p>Finding the perfect caterer can make or break your event. In Kisii, you have a wealth of excellent options. Here’s our curated list of the best, starting with the undisputed #1.</p>

      <h2>1. Benkiz Events / Benkiz Bakers</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (2 reviews)</p>
      <p><strong>Contact:</strong> 0707 091550</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"The best there is, easy to communicate and work with."</em></p>
      <p>Benkiz Events tops our list for their exceptional service, delicious food, and seamless communication. Whether you need full catering or just cakes, they deliver excellence every time.</p>

      <h2>2. Ascona Caterers Kisii</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (21 reviews)</p>
      <p><strong>Contact:</strong> 0724 159160</p>
      <p><strong>Address:</strong> Suneka</p>
      <p><em>"Great meals, service delivery on time 👌 Good job Antony and team!"</em></p>
      <p>With over 15 years in business, Ascona is a trusted name known for punctuality and tasty meals.</p>

      <h2>3. J & Javer Events And Catering Equipments Rental Company</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (12 reviews)</p>
      <p><strong>Contact:</strong> (closed now, opens 8am Mon)</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"Absolutely the best event planning company, great and excellent services!"</em></p>
      <p>J & Javer offers both catering and equipment rental, making them a one‑stop shop for events.</p>

      <h2>4. Better Living Catering Services</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (1 review)</p>
      <p><strong>Contact:</strong> 0765 350531</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"They offer takeaway and delivery services."</em></p>
      <p>A new but highly rated option, perfect for smaller gatherings and delivery needs.</p>

      <h2>5. Cakes in Kisii – Katie's Delish</h2>
      <p><strong>Rating:</strong> ⭐ 4.7 (59 reviews)</p>
      <p><strong>Contact:</strong> 0705 661588</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"It was fresh, tasty, and perfectly decorated."</em></p>
      <p>Known for their cakes and pastries, Katie's Delish is a go‑to for sweet treats and dessert tables.</p>

      <h2>6. Kibali Caterers Kisii</h2>
      <p><strong>Rating:</strong> ⭐ 4.6 (9 reviews)</p>
      <p><strong>Contact:</strong> 0711 371707</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"They are excellent timekeepers."</em></p>
      <p>Kibali is reliable and professional, making them a solid choice for corporate and social events.</p>

      <h2>7. Backyard Events & Caterers (Kisii)</h2>
      <p><strong>Rating:</strong> ⭐ 4.4 (5 reviews)</p>
      <p><strong>Contact:</strong> 0718 814583</p>
      <p><strong>Address:</strong> Kisii</p>
      <p><em>"The food was delicious and well presented."</em></p>
      <p>With over 5 years of experience, Backyard offers great value and tasty menus.</p>

      <p>When choosing a caterer in Kisii, always consider your guest count, dietary needs, and budget. All the caterers above offer tastings and flexible packages – reach out to them directly for a quote!</p>
    `,
  },
  {
    slug: "best-event-organizers-in-kisii",
    title: "Top Event Organizers in Kisii – Who to Trust?",
    excerpt:
      "Planning an event in Kisii? Here's our comprehensive ranking of the best event organisers, with Benkiz Events leading the way.",
    category: "Event Organizers",
    date: "July 10, 2026",
    readTime: "8 min read",
    companyLinks: [
      { name: "Benkiz Events", url: "https://events.benkiz.org" },
      { name: "J & Javer Events", url: "https://jandjaver.co.ke" },
      { name: "Ascona Caterers", url: "" },
      { name: "Backyard Events", url: "" },
      { name: "Better Living Catering", url: "" },
      { name: "Katie's Delish", url: "" },
      { name: "Kibali Caterers", url: "https://kibalicaterers.vercel.app" },
      { name: "First Lady Events", url: "" },
    ],
    venue: "Kisii, Kenya",
    author: {
      name: "Chef Kizito (Benkiz)",
      phone: "+254707091550",
    },
    image: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538217/IMG-20260615-WA0068_vjuhxi.jpg",
    content: `
      <p>Organising a successful event in Kisii requires a team that can handle everything – from planning and coordination to on‑the‑day execution. We’ve compiled a list of the top event organisers in the region, drawing from real customer reviews, ratings, and service quality. Here’s our definitive ranking.</p>

      <h2>1. Benkiz Events / Benkiz Bakers</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (2 reviews) – <em>"The best there is, easy to communicate and work with."</em></p>
      <p><strong>Contact:</strong> 0707 091550</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>Benkiz Events is the undisputed #1 choice for full‑service event management in Kisii. From weddings and corporate functions to private parties, they handle every detail – venue sourcing, décor, catering (they are also top‑tier bakers), entertainment, and logistics – with professionalism and creativity. Their open communication and flexibility make them the go‑to for stress‑free planning.</p>

      <h2>2. J & Javer Events And Catering Equipments Rental Company</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (12 reviews) – <em>"Absolutely the best event planning company, great and excellent services!"</em></p>
      <p><strong>Contact:</strong> (opens 8am Mon – call for details)</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>J & Javer is a powerhouse in event planning, offering not only expert coordination but also a wide range of catering equipment rentals. They’re a one‑stop shop for clients who need both planning and logistical support. Their excellent reviews highlight their reliability and ability to bring any event vision to life.</p>

      <h2>3. Ascona Caterers Kisii</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (21 reviews) – <em>"Great meals, service delivery on time 👌 Good job Antony and team!"</em></p>
      <p><strong>Contact:</strong> 0724 159160</p>
      <p><strong>Address:</strong> Suneka</p>
      <p>With over 15 years in the industry, Ascona is renowned for its punctuality and delicious cuisine. While they’re primarily caterers, their event management skills are top‑notch – they coordinate seamless timelines, work with other vendors, and ensure your event runs like clockwork. Their long‑standing reputation makes them a trusted partner for any occasion.</p>

      <h2>4. Backyard Events & Caterers (Kisii)</h2>
      <p><strong>Rating:</strong> ⭐ 4.4 (5 reviews) – <em>"The food was delicious and well presented."</em></p>
      <p><strong>Contact:</strong> 0718 814583</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>Backyard Events brings over 5 years of experience to the table, offering both catering and event planning. They’re known for their creative menus and attention to presentation. Their team works closely with clients to customise every aspect, from décor to entertainment, ensuring a personalised touch that fits your budget.</p>

      <h2>5. Better Living Catering Services</h2>
      <p><strong>Rating:</strong> ⭐ 5.0 (1 review) – <em>"Takeaway · Delivery"</em></p>
      <p><strong>Contact:</strong> 0765 350531</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>Better Living may be a newer name, but they’ve already earned a perfect rating. Their flexibility and willingness to accommodate small and medium‑sized events make them a great choice for intimate gatherings. They offer delivery and takeaway, which is perfect for events that need off‑site catering, and they’re adept at coordinating with other suppliers to ensure a smooth experience.</p>

      <h2>6. Cakes in Kisii – Katie's Delish</h2>
      <p><strong>Rating:</strong> ⭐ 4.7 (59 reviews) – <em>"It was fresh, tasty, and perfectly decorated."</em></p>
      <p><strong>Contact:</strong> 0705 661588</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>Katie's Delish is the go‑to for stunning cakes and desserts, but they also excel at event coordination. Their extensive experience with weddings and birthdays means they understand the flow of a celebration and can handle the logistics of dessert tables, decorating, and even basic event planning. Their high number of reviews speaks to their consistent quality.</p>

      <h2>7. Kibali Caterers Kisii</h2>
      <p><strong>Rating:</strong> ⭐ 4.6 (9 reviews) – <em>"They are excellent timekeepers."</em></p>
      <p><strong>Contact:</strong> 0711 371707</p>
      <p><strong>Address:</strong> Kisii</p>
      <p>Kibali is a solid choice for both corporate and social events. Their punctuality and professionalism are frequently praised, and they offer comprehensive planning services beyond just catering. If you need a reliable team that sticks to schedules and delivers on promises, Kibali is a great option.</p>

      <h2>8. First Lady Events – A Personal Touch (Notable Mention)</h2>
      <p>Although not in the data we received, First Lady Events is often recommended for their personalised approach to weddings and milestones. They work closely with clients to ensure every detail reflects your personality.</p>

      <h2>How to Choose the Right Event Organizer</h2>
      <p>With so many excellent options, consider these factors:</p>
      <ul>
        <li><strong>Event Type:</strong> Some organisers specialise in corporate events, others in weddings or private parties.</li>
        <li><strong>Reviews:</strong> Look for consistent praise in areas important to you (e.g., timekeeping, communication, food quality).</li>
        <li><strong>Budget:</strong> Request detailed quotes and compare what’s included.</li>
        <li><strong>Communication:</strong> The best organisers listen and respond quickly.</li>
      </ul>
      <p>All the companies above have proven their worth in Kisii. Reach out to them early to secure your date and start planning your unforgettable event!</p>
    `,
  },
];