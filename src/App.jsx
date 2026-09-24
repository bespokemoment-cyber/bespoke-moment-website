import { useEffect, useState } from 'react'
import './App.css'

const portfolioData = {
  engagement: {
    eyebrow: 'CUSTOM JEWELLERY',
    title: 'Engagement Rings',
    intro: 'A selection of custom engagement rings created around different stones, styles and personal ideas.',
    note: 'Previous custom pieces are shown for design inspiration and reference only.',
projects: [
  {
    slug: 'custom-engagement-ring-01',
    title: 'Custom Oval Diamond Engagement Ring',
    meta: 'Oval diamond • 18K white gold',
    image: '/portfolio-images/engagement-ring-01.jpg',
    alt: 'Custom oval diamond engagement ring',

    description:
      'A luxurious custom design featuring diamonds surrounding the centre stone and a fully diamond-set outer band.',

    referencePrice: 'AUD $4,780',

    specs: [
      ['Metal', '18K Gold'],
      ['Centre Stone', '3.00ct Lab-Grown Diamond'],
      ['Shape', 'Oval'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU J/2']
    ],

    story:
      'The client had a clear vision for an oval diamond and wanted a more luxurious statement style, with a budget of around AUD $5,000. We specially selected a loose diamond for her, then worked with our jeweller to create the setting according to her preferred design.',

    others: 'IGI Certified Centre Stone'
  },

  {
    slug: 'custom-oval-three-stone-engagement-ring',
    title: 'Custom Oval Three-Stone Diamond Engagement Ring',
    meta: 'Oval diamond • 18K yellow gold',
    image: '/portfolio-images/engagement-ring-02.jpg',
    alt: 'Custom oval three-stone diamond engagement ring',

    description:
      'An elegant three-stone design featuring an oval centre diamond with pear-shaped side stones in a warm yellow gold setting.',

    referencePrice: 'AUD $3,690',

    specs: [
      ['Metal', '18K Yellow Gold'],
      ['Centre Stone', '1.50ct Lab-Grown Oval Diamond'],
      ['Side Stones', 'Two Pear-Shaped Diamonds, 3.2mm × 4.7mm'],
      ['Shape', 'Oval & Pear'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU J']
    ],

    story:
      'The client had her preferred oval diamond and a specific design in mind, with a budget of under AUD $4,000. We specially selected the loose diamond for her, then worked with our jeweller to create the setting according to her requested style.',

    others: 'IGI Certified Centre Stone'
  },

  {
    slug: 'custom-oval-diamond-engagement-ring-03',
    title: 'Custom Oval Diamond Engagement Ring',
    meta: 'Oval diamond • 18K yellow gold',
    image: '/portfolio-images/engagement-ring-03.jpg',
    alt: 'Custom oval diamond engagement ring in 18K yellow gold',

    description:
      'A classic and elegant design centred around a statement oval diamond.',

    referencePrice: 'AUD $3,890',

    specs: [
      ['Metal', '18K Yellow Gold'],
      ['Centre Stone', '3.50ct Lab-Grown Diamond, F/VVS2'],
      ['Shape', 'Oval'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU K']
    ],

    story:
      'The client had her preferred oval diamond and a specific style in mind, with a budget of around AUD $4,000. We specially selected the loose diamond for her, then worked with our jeweller to create the setting according to her requested design.',

    others: 'IGI Certified Centre Stone'
  },

  {
    slug: 'custom-yellow-diamond-three-stone-engagement-ring',
    title: 'Custom Yellow Diamond Three-Stone Engagement Ring',
    meta: 'Radiant diamond • 14K white gold',
    image: '/portfolio-images/engagement-ring-04.jpg',
    alt: 'Custom yellow radiant three-stone engagement ring',

    description:
      'A distinctive three-stone engagement ring featuring a yellow radiant-cut centre diamond and contrasting side stones.',

    referencePrice: 'AUD $3,290',

    specs: [
      ['Metal', '14K White Gold'],
      ['Centre Stone', '3.00ct Lab-Grown Yellow Diamond'],
      ['Side Stones', 'Two Trilliant Diamonds, 4.0 × 4.0mm'],
      ['Shape', 'Radiant & Trilliant'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU K']
    ],

    story:
      'The client wanted a yellow diamond and ultimately chose a radiant-cut three-stone design, with a budget of around AUD $3,000. We specially selected the loose centre diamond, then worked with our jeweller to create the setting according to her chosen design.',

    others: 'IGI Certified Centre Stone'
  },

  {
    slug: 'custom-round-diamond-engagement-ring',
    title: 'Custom Round Diamond Engagement Ring',
    meta: 'Round diamond • 18K white gold',
    image: '/portfolio-images/engagement-ring-05.jpg',
    alt: 'Custom round diamond engagement ring',

    description:
      'A classic custom design featuring a round centre diamond with a luxurious diamond-set setting.',

    referencePrice: 'AUD $3,980',

    specs: [
      ['Metal', '18K White Gold'],
      ['Centre Stone', '1.00ct Lab-Grown Diamond'],
      ['Shape', 'Round'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU K']
    ],

    story:
      'The client chose a round diamond and preferred a more classic style, with a budget of around AUD $4,000. We specially selected the loose diamond for her, then worked with our jeweller to create the setting according to her preferred design.',

    others: 'IGI Certified Centre Stone'
  },

  {
    slug: 'custom-square-cut-green-diamond-ring',
    title: 'Custom Square-Cut Green Diamond Ring',
    meta: 'Square-cut green diamond • 18K yellow gold',
    image: '/portfolio-images/engagement-ring-06.jpg',
    alt: 'Custom square-cut green diamond ring in 18K yellow gold',

    description:
      "A bespoke ring created from the client's own hand-drawn design.",

    referencePrice: 'AUD $3,680',

    specs: [
      ['Metal', '18K Yellow Gold'],
      ['Centre Stone', '1.00ct Lab-Grown Green Diamond'],
      ['Shape', 'Square-Cut'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Engagement Ring'],
      ['Ring Size', 'AU I']
    ],

    story:
      'The client provided her own hand-drawn design and requested a very specific style. We specially selected the loose diamond, developed a 3D digital version of the design for review, and then worked with our jeweller to produce the final piece.',

    others: 'IGI Certified Centre Stone'
  }
]
  },

  wedding: {
    eyebrow: 'FOR TWO',
    title: 'Wedding Bands',
    intro: 'Wedding bands designed to work together in your own way.',
    note: 'Previous custom pieces are shown for design inspiration and reference only.',
    projects: [
  {
    slug: 'custom-matching-wedding-bands-01',
    title: 'Custom Matching Wedding Bands',
    meta: '18K rose gold • Natural diamond-set design',
    image: '/portfolio-images/wedding-band-01.jpg',
    alt: 'Custom matching rose gold wedding bands',

    description:
      "A matching pair of rose gold wedding bands with a graceful serpent-inspired design. The women's band features a diamond-set outer band, paired with a coordinating men's band.",

    referencePrice: "Women's: AUD $2,020\nMen's: AUD $2,380",

    specs: [
      ['Metal', '18K Rose Gold • Natural Diamonds'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Matching Wedding Bands'],
      ['Ring Size', "Women's AU J\nMen's AU R"]
    ],

    story:
      'The client came to us with a specific design in mind and wanted a matching set created especially for them. We refined the details around their preferences and worked with our jeweller to turn the chosen design into a coordinated pair of rose gold wedding bands.',

    others:
      'Women’s ring approximately 4.5g; men’s ring approximately 9.5g. Metal prices fluctuate, so the reference price is for guidance only.'
  },

  {
    slug: 'custom-matching-geometric-lines-wedding-bands',
    title: 'Custom Matching Geometric Lines Wedding Bands',
    meta: 'Platinum • Natural diamond-set design',
    image: '/portfolio-images/wedding-band-02.jpg',
    alt: 'Custom matching geometric platinum wedding bands',

    description:
      'A clean geometric lines design created for a professional couple, combining a refined look with an easy-to-wear style for everyday life.',

    referencePrice: "Women's: AUD $1,790\nMen's: AUD $1,980",

    specs: [
      ['Metal', 'Platinum • Natural Diamonds'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Matching Wedding Bands'],
      ['Ring Size', "Women's AU I\nMen's AU P"]
    ],

    story:
      'We created these matching wedding bands for a professional couple who wanted a clean and refined design that would complement their everyday style.',

    others:
      "Women's ring approximately 4g; men's ring approximately 8.5g. Metal prices fluctuate, so the reference price is for guidance only."
  },

  {
    slug: 'custom-mens-diamond-wedding-band-01',
    title: "Custom Men's Diamond Wedding Band",
    meta: 'Platinum • Lab-grown diamond-set design',
    image: '/portfolio-images/wedding-band-03.jpg',
    alt: "Custom men's platinum diamond wedding band",

    description:
      'A refined men’s wedding band featuring a 1.00ct square-cut lab-grown diamond, balancing a clean profile with a distinctive, elevated look.',

    referencePrice: 'AUD $2,865',

    specs: [
      ['Metal', 'Platinum • Lab-Grown Diamond'],
      ['Centre Stone', '1.00ct Square-Cut Lab-Grown Diamond, D/VS2'],
      ['Shape', 'Square-Cut'],
      ['Setting', 'Bespoke Setting'],
      ["Style", "Men's Wedding Band"],
      ['Ring Size', 'AU P/2']
    ],

    story:
      'The client wanted a wedding band featuring a diamond. We sourced this square-cut loose diamond and recommended a refined yet understated design to complement his personal style.',

    others:
      'Platinum weight approximately 10g. Metal prices fluctuate, so the reference price is for guidance only.'
  },

  {
    slug: 'custom-mens-diamond-wedding-band-02',
    title: "Custom Men's Diamond Wedding Band",
    meta: 'Platinum • Lab-grown diamond-set design',
    image: '/portfolio-images/wedding-band-04.jpg',
    alt: "Custom men's platinum diamond-set wedding band",

    description:
      "A men's wedding band featuring a half-set diamond band, adding a distinctive touch while keeping the overall design clean and refined.",

    referencePrice: 'AUD $1,960',

    specs: [
      ['Metal', 'Platinum • Lab-Grown Diamonds'],
      ['Setting', 'Bespoke Setting'],
      ["Style", "Men's Wedding Band"],
      ['Ring Size', 'AU R']
    ],

    story:
      'The client wanted to incorporate diamonds into his wedding band and came to us with a specific design. We translated his chosen style into a bespoke piece, keeping the half-set diamond detail distinctive while maintaining a clean overall profile.',

    others:
      'Platinum weight approximately 9.5g. Metal prices fluctuate, so the reference price is for guidance only.'
  },

  {
    slug: 'custom-mens-natural-diamond-wedding-band',
    title: "Custom Men's Natural Diamond Wedding Band",
    meta: '18K white gold • 0.15ct natural diamond',
    image: '/portfolio-images/wedding-band-05.jpg',
    alt: "Custom men's 18K white gold natural diamond wedding band",

    description:
      'A clean men’s wedding band featuring a 0.15ct natural diamond.',

    referencePrice: 'AUD $2,260',

    specs: [
      ['Metal', '18K White Gold • Natural Diamond'],
      ['Centre Stone', '0.15ct Natural Diamond'],
      ['Shape', 'Round'],
      ['Setting', 'Bespoke Setting'],
      ["Style", "Men's Wedding Band"],
      ['Ring Size', 'AU P']
    ],

    story:
      "Created as part of a matching wedding ring set for the client and his wife, this men's band keeps the design clean and refined, with a subtle 0.15ct natural diamond detail.",

    others:
      'Gold weight approximately 8.5g. Metal prices fluctuate, so the reference price is for guidance only.'
  },

  {
    slug: 'custom-matching-natural-diamond-wedding-bands',
    title: 'Custom Matching Natural Diamond Wedding Bands',
    meta: '18K rose gold • Natural diamond',
    image: '/portfolio-images/wedding-band-06.jpg',
    alt: 'Custom matching rose gold natural diamond wedding bands',

    description:
      "A matching couple's wedding band set featuring a distinctive crossover design, with natural diamonds set into the women's band.",

    referencePrice: "Women's: AUD $1,620\nMen's: AUD $1,870",

    specs: [
      ['Metal', '18K Rose Gold • Natural Diamonds'],
      ['Setting', 'Bespoke Setting'],
      ['Style', 'Matching Wedding Bands'],
      ['Ring Size', "Women's AU J\nMen's AU Q"]
    ],

    story:
      "Created for a couple looking for something a little more distinctive than a traditional matching set, these crossover bands feature a flowing design that connects the two rings while keeping each piece individual. Natural diamonds add a subtle touch of detail to the women's band.",

    others:
      "Women's ring approximately 3.7g; men's ring approximately 8.5g. Metal prices fluctuate, so the reference price is for guidance only."
  }
]
  },

  jewellery: {
    eyebrow: 'SPECIAL MOMENTS',
    title: 'Gift Jewellery',
    intro: 'Personalised jewellery for birthdays, anniversaries, milestones and the moments worth celebrating.',
    note: 'Custom pieces created for birthdays, anniversaries, milestones and the moments worth celebrating.',
projects: [
  {
    slug: 'custom-18k-gold-diamond-halo-drop-earrings',
    title: '18K Gold Diamond Halo Drop Earrings',
    meta: '18K yellow gold • Natural diamonds',
    image: '/portfolio-images/gift-jewellery-01.jpg',
    alt: '18K gold natural diamond halo drop earrings',

    description:
      'Elegant 18K gold drop earrings featuring natural diamonds in a delicate halo design. The layered circular silhouette creates plenty of sparkle while giving the earrings a distinctive statement look.',

    referencePrice: 'AUD $3,080',

    specs: [
      ['Metal', '18K Yellow Gold • Natural Diamonds'],
      ['Style', 'Drop Earrings'],
      ['Design', 'Halo'],
      ['Weight', 'Approx. 5.8g']
    ],

    story:
      'A refined statement piece created around a layered halo design, combining the warmth of 18K yellow gold with the sparkle of natural diamonds.',

    others:
      'This piece is shown as a past design for inspiration and price reference. We have access to a broad range of jewellery designs and can customise selected pieces. For more design options, please contact us or follow @bespokemoment.co on Instagram and TikTok.'
  },

  {
    slug: 'custom-18k-gold-essential-chain-necklace',
    title: 'Custom 18K Gold Essential Chain Necklace',
    meta: '18K yellow or white gold • Everyday chain',
    image: '/portfolio-images/gift-jewellery-02.jpg',
    alt: 'Custom 18K gold everyday chain necklace',

    description:
      'A versatile 18K gold chain designed to be worn on its own, paired with a pendant or layered with another chain. Available in three lengths, with the 18-inch and 20-inch options especially suited to layering.',

    referencePrice: 'AUD $750',

    specs: [
      ['Metal', '18K Yellow Gold or White Gold'],
      ['Style', 'Everyday Chain Necklace'],
      ['Length', 'S — 16" · M — 18" · L — 20"']
    ],

    story:
      'Designed as an everyday essential, this versatile chain can be worn on its own or styled with a pendant. It also works beautifully as part of a layered look, giving customers an easy foundation for personalised jewellery combinations.',

    others:
      'The reference price is intended to reflect the base cost of the custom piece. Metal prices may fluctuate. This design is available in different lengths and can be customised according to your preferred style.'
  },

  {
    slug: '18k-gold-2ct-lab-grown-emerald-cut-diamond-earrings',
    title: '18K Gold 2ct Lab-Grown Emerald-Cut Diamond Earrings',
    meta: '18K gold • Lab-grown emerald-cut diamonds',
    image: '/portfolio-images/gift-jewellery-03.jpg',
    alt: '18K gold lab-grown emerald-cut diamond earrings',

    description:
      'Elegant 18K gold earrings featuring a pair of 2.00ct lab-grown emerald-cut diamonds in a sleek, clean design. The elongated emerald cut and polished setting create a modern look with a strong sense of presence.',

    referencePrice: 'AUD $7,800',

    specs: [
      ['Metal', '18K Yellow Gold or White Gold'],
      ['Centre Stones', '2.00ct Lab-Grown Emerald-Cut Diamonds (Each)'],
      ['Style', 'Statement Earrings'],
      ['Weight', 'Approx. 4.7g']
    ],

    story:
      'Created for a clean and modern look, this design focuses on the elongated lines of emerald-cut diamonds and the simplicity of a polished 18K gold setting.',

    others:
      'This piece is shown as a past design for inspiration and price reference. We have access to a broad range of jewellery designs and can customise selected pieces. For more design options, please contact us or follow @bespokemoment.co on Instagram and TikTok.'
  },

  {
    slug: 'custom-18k-gold-camellia-earrings',
    title: 'Custom 18K Gold Camellia Earrings',
    meta: '18K yellow gold • Natural diamond',
    image: '/portfolio-images/gift-jewellery-04.jpg',
    alt: 'Custom 18K gold camellia earrings with natural diamonds',

    description:
      'A custom camellia-inspired design crafted entirely in 18K yellow gold, with a small natural diamond set at the centre of each flower.',

    referencePrice: 'AUD $960',

    specs: [
      ['Metal', '18K Yellow Gold • Natural Diamonds'],
      ['Style', 'Stud Earrings'],
      ['Design', 'Camellia'],
      ['Weight', 'Approx. 2.5g']
    ],

    story:
      'The client came to us with a specific camellia-inspired design and asked us to customise the piece in 18K yellow gold. A small natural diamond was set at the centre of each flower to complete the design.',

    others:
      'Custom-made to the client’s selected design. This piece is shown for design inspiration and price reference only. Metal prices may fluctuate.'
  },

  {
    slug: 'custom-marquise-lab-grown-diamond-ring',
    title: 'Custom Marquise Lab-Grown Diamond Ring',
    meta: 'Lab-grown marquise diamond • 9K gold',
    image: '/portfolio-images/gift-jewellery-05.jpg',
    alt: 'Custom marquise lab-grown diamond ring in 9K gold',

    description:
      'A versatile marquise diamond ring designed for everyday wear. Developed with a younger, contemporary audience in mind, this piece offers a light-luxury feel and can be customised in different gold colours, making it a thoughtful option for birthdays, graduations and other milestones.',

    referencePrice: 'AUD $899',

    specs: [
      ['Metal', '9K Gold'],
      ['Centre Stone', '0.50ct Lab-Grown Marquise Diamond'],
      ['Shape', 'Marquise'],
      ['Style', 'Everyday Ring'],
      ['Ring Size', 'Custom Size Available']
    ],

    story:
      'Created as an easy-to-wear everyday piece for younger women, this design combines a soft marquise shape with a clean, versatile silhouette. It was developed with gifting occasions such as 21st birthdays and graduations in mind, while allowing the gold colour and ring size to be customised.',

    others:
      'This is a custom-made piece and ring size must be provided before production. Approximate production time is 10–15 business days, followed by approximately 7–15 business days for air delivery. Please allow sufficient time when ordering a custom piece.'
  },

  {
    slug: 'custom-18k-gold-diamond-stud-earrings',
    title: 'Custom 18K Gold Diamond Stud Earrings',
    meta: '18K gold • Natural diamonds',
    image: '/portfolio-images/gift-jewellery-06.jpg',
    alt: 'Custom 18K gold natural diamond stud earrings',

    description:
      'A simple and versatile pair of diamond stud earrings designed for everyday wear. Created with a younger, modern aesthetic in mind, they make an easy choice for birthdays, graduations and other meaningful occasions.',

    referencePrice: 'AUD $890',

    specs: [
      ['Metal', '18K Gold • Natural Diamonds'],
      ['Centre Stones', '0.10ct / 0.10ct / 0.12ct'],
      ['Shape', 'Round'],
      ['Style', 'Diamond Stud Earrings'],
      ['Weight', 'Approx. 2g']
    ],

    story:
      'Designed as an everyday jewellery staple, this pair keeps the look simple and versatile while adding just enough sparkle for a polished finish. The design was developed with younger women in mind, making it especially suitable for gifting occasions such as birthdays and graduations.',

    others:
      'This piece is shown for design inspiration and price reference only. We have access to a broad range of jewellery designs and can customise selected pieces. For more designs, please contact us or follow @bespokemoment.co on Instagram and TikTok.'
  }
]
  }
}

const homepageImages = {
  hero: {
    image: '/portfolio-images/homepage-hero.png',
    alt: 'Bespoke Moment fine jewellery collection'
  },
  collection: {
    image: '/portfolio-images/homepage-jewellery-collection.jpg',
    alt: 'Bespoke Moment jewellery collection'
  },
  diamonds: {
    image: '/portfolio-images/homepage-diamond-selection.jpg',
    alt: 'Selection of diamond shapes and cuts'
  },
  engagement: {
    image: '/portfolio-images/homepage-engagement-ring.jpg',
    alt: 'Custom engagement ring by Bespoke Moment'
  },
  wedding: {
    image: '/portfolio-images/homepage-ring-styling.jpg',
    alt: 'Custom wedding band styling'
  },
  jewellery: {
    image: '/portfolio-images/homepage-ring-detail.jpg',
    alt: 'Fine jewellery detail by Bespoke Moment'
  }
}

function getPageFromHash() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const hash = window.location.hash

  if (
    pathname === '/portfolio-engagement' ||
    hash === '#portfolio-engagement'
  ) {
    return 'engagement'
  }

  if (
    pathname === '/portfolio-wedding' ||
    hash === '#portfolio-wedding'
  ) {
    return 'wedding'
  }

  if (
    pathname === '/portfolio-jewellery' ||
    hash === '#portfolio-jewellery'
  ) {
    return 'jewellery'
  }

  return 'home'
}

function getPortfolioDetailFromPath() {
  const pathname = window.location.pathname.replace(/\/+$/, '')

  if (!pathname.startsWith('/portfolio/')) {
    return null
  }

  const parts = pathname.split('/').filter(Boolean)

  if (parts.length !== 3) {
    return null
  }

  const [, type, slug] = parts

  const data = portfolioData[type]

  if (!data) {
    return null
  }

  const project = data.projects.find(
    (item) => item.slug === slug
  )

  if (!project) {
    return null
  }

  return {
    type,
    slug,
    project
  }
}


function PortfolioPage({ type, onHome }) {
  const data = portfolioData[type]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <button className="back-link" onClick={onHome}>
          ← Back to home
        </button>

        <h1>{data.title}</h1>
        <p className="portfolio-intro">{data.intro}</p>
        <p className="portfolio-note">{data.note}</p>
      </section>

      <section className="portfolio-grid">

{data.projects.map((project, index) => (
  <article
    className={`portfolio-card ${project.slug ? 'portfolio-card-clickable' : ''}`}
    key={`${project.title}-${index}`}
    onClick={() => {
      if (project.slug) {
        window.location.href = `/portfolio/${type}/${project.slug}`
      }
    }}
  >

            <div className="portfolio-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt || project.title}
                  loading="lazy"
                />
              ) : (
                <span>YOUR JEWELLERY IMAGE</span>
              )}
            </div>

            <div className="portfolio-card-content">
              <h2>{project.title}</h2>
              <p>{project.meta}</p>
              <span className="portfolio-reference">
                Custom piece · Design reference
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="portfolio-cta">
        <p className="eyebrow">YOUR IDEA. YOUR JEWELLERY.</p>
        <h2>
          Have something<br />
          special in mind?
        </h2>
        <p>
          Send us an inspiration image, sketch or simply tell us what you're looking for.
        </p>
        <a
          href="#contact"
          className="button button-dark"
          onClick={onHome}
        >
          START YOUR ENQUIRY
        </a>
      </section>
    </div>
  )
}
function PortfolioDetailPage({ project, categoryTitle, onBack, onHome }) {
  return (
    <div className="portfolio-detail">

      <section className="portfolio-detail-hero">
        <button
          className="portfolio-detail-back"
          type="button"
          onClick={onBack}
        >
          ← Back to {categoryTitle}
        </button>

        <p className="eyebrow">CUSTOM ENGAGEMENT RING</p>

        <h1>{project.title}</h1>

        <p className="portfolio-detail-meta">
          {project.meta}
        </p>
      </section>

      <section className="portfolio-detail-content">

        <div className="portfolio-detail-image-wrap">
          <img
            src={project.image}
            alt={project.alt || project.title}
          />
        </div>

        <div className="portfolio-detail-info">

          <span className="portfolio-detail-reference">
            CUSTOM PIECE · DESIGN REFERENCE
          </span>

          <p className="portfolio-detail-description">
            {project.description}
          </p>

          <div className="portfolio-detail-section">

            <h2>THE DETAILS</h2>

            <div className="portfolio-detail-specs">
              {project.specs.map(([label, value]) => (
                <div
                  className="portfolio-detail-spec"
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

          </div>

<div className="portfolio-detail-section portfolio-detail-price">

  <h2>REFERENCE PRICE</h2>

  <p>
  {project.referencePrice.split('\n').map((line, index) => (
    <span key={index}>{line}</span>
  ))}
</p>

  <small>
    Reference pricing only. Final pricing varies based on
    the selected gemstone, metal, specifications and design.
  </small>

</div>


{project.story && (
  <div className="portfolio-detail-section portfolio-detail-story">

    <h2>THE STORY</h2>

    <p>{project.story}</p>

  </div>
)}


{project.certificate && (
  <div className="portfolio-detail-section portfolio-detail-others">
    <h2>OTHERS</h2>
    <p>{project.certificate}</p>
  </div>
)}

          <div className="portfolio-detail-action">
            <a
              href="#contact"
              className="button button-dark"
              onClick={onHome}
            >
              START YOUR ENQUIRY
            </a>
          </div>

        </div>

      </section>

    </div>
  )
}
function TermsPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <h1>
          Terms & Conditions
        </h1>

        <p className="legal-updated">
          Last updated: 31 August 2026
        </p>
      </section>


      <section className="legal-content">

        <div className="legal-section">
          <h2>1. Agreement</h2>

          <p>
            These Terms & Conditions apply to purchases made through the
            Bespoke Moment website, approved payment links and authorised
            sales channels.
          </p>

          <p>
            By placing a custom jewellery order with Bespoke Moment, you
            agree to these Terms & Conditions and any policies incorporated
            by reference.
          </p>
        </div>


        <div className="legal-section">
          <h2>2. Business Information</h2>

          <p>
            Bespoke Moment is operated by:
          </p>

          <p>
            <strong>Tiana Jiang</strong><br />
            <strong>Legal entity:</strong> Bespoke Moment Trading<br />
            <strong>Registration number:</strong> 66176712751
          </p>

          <p>
            <strong>Australian business / correspondence address:</strong><br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <strong>Manufacturing / operational location:</strong><br />
            1516, Building No. 1, Xuepan Mansion, Panyu, Guangzhou, China
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>
        </div>


        <div className="legal-section">
          <h2>3. Eligibility</h2>

          <p>
            You must be legally capable of entering into a binding contract
            and authorised to use the selected payment method.
          </p>
        </div>


        <div className="legal-section">
          <h2>4. Custom Jewellery</h2>

          <p>
            Bespoke Moment specialises in custom-made jewellery created
            according to each customer's preferences and specifications.
          </p>

          <p>
            Custom orders may include personalised designs, selected diamonds
            or gemstones, metal choices, ring sizes, engraving and other
            agreed specifications.
          </p>

          <p>
            Because each piece is made specifically for the customer, the
            final product may differ slightly from reference images or design
            inspirations where reasonably necessary to accommodate practical
            manufacturing and craftsmanship requirements.
          </p>
        </div>


        <div className="legal-section">
          <h2>5. Product Information</h2>

          <p>
            We take reasonable care to describe our jewellery accurately.
          </p>

          <p>
            Measurements, weights, dimensions and colours may be approximate
            unless expressly confirmed in the personalised quotation or final
            approved design.
          </p>

          <p>
            Where a specific specification has been agreed in writing, the
            agreed specification will apply.
          </p>
        </div>


        <div className="legal-section">
          <h2>6. Pricing</h2>

          <p>
            Prices are displayed in Australian dollars unless otherwise stated.
          </p>

          <p>
            The personalised quotation or approved checkout will identify the
            amount payable for your custom order.
          </p>

          <p>
            A quotation is based on the design, materials, gemstones,
            specifications and other information available at the time of
            quotation.
          </p>
        </div>


        <div className="legal-section">
          <h2>7. Pricing or Description Errors</h2>

          <p>
            Where a genuine pricing or description error occurs, we may contact
            you before fulfilment to confirm the corrected details, offer a
            suitable alternative, or cancel and refund the affected order.
          </p>
        </div>


        <div className="legal-section">
          <h2>8. Payment</h2>

          <p>
            Custom orders require a <strong>70% deposit</strong> to commence
            the customisation and production process.
          </p>

          <p>
            The remaining <strong>30% balance</strong> is payable after the
            finished piece has been reviewed and approved, and before dispatch,
            unless otherwise agreed in writing.
          </p>

          <p>
            Payment must be completed through an approved payment method.
          </p>
        </div>


        <div className="legal-section">
          <h2>9. Fraud and Verification</h2>

          <p>
            We may request reasonable information to verify identity, payment
            authority or delivery details before processing a high-value custom
            order.
          </p>

          <p>
            We reserve the right to delay or decline an order where reasonable
            verification cannot be completed.
          </p>
        </div>


        <div className="legal-section">
          <h2>10. Custom Order Process</h2>

          <p>
            Custom orders are created according to the specifications agreed
            between the customer and Bespoke Moment.
          </p>

          <ol>
            <li>Share your inspiration and requirements.</li>
            <li>Receive a personalised quotation.</li>
            <li>Confirm the order and pay the required deposit.</li>
            <li>Review and approve the digital design.</li>
            <li>Production and craftsmanship.</li>
            <li>Final review and approval.</li>
            <li>Pay the remaining balance and prepare for dispatch.</li>
          </ol>

          <p>
            Production will begin after the required deposit has been received
            and the applicable design or production requirements have been
            confirmed.
          </p>
        </div>


        <div className="legal-section">
          <h2>11. Design Approval</h2>

          <p>
            Where a digital design is provided for review, the customer is
            responsible for carefully checking the design, specifications and
            personalisation details before approving production.
          </p>

          <p>
            Once a design has been approved and production has commenced,
            changes may no longer be possible or may result in additional
            costs or delays.
          </p>
        </div>


        <div className="legal-section">
          <h2>12. Cancellation</h2>

          <p>
            Custom orders are subject to the cancellation terms set out in the
            applicable Refunds & Returns Policy.
          </p>

          <p>
            Because custom jewellery is made specifically for the customer,
            cancellation rights may be limited once materials have been
            purchased or production has commenced.
          </p>
        </div>


        <div className="legal-section">
          <h2>13. Shipping</h2>

          <p>
            Shipping arrangements, estimated delivery times and tracking
            information are governed by our Shipping Policy and the information
            provided with your order.
          </p>

          <p>
            <a href="/shipping">
              View Shipping Policy →
            </a>
          </p>
        </div>


        <div className="legal-section">
          <h2>14. Returns and Consumer Rights</h2>

          <p>
            Returns, refunds and available remedies for custom jewellery are
            governed by our Refunds & Returns Policy and the Australian Consumer
            Law.
          </p>

          <p>
            Nothing in these Terms & Conditions is intended to exclude, restrict
            or modify any rights or remedies that cannot legally be excluded,
            restricted or modified under applicable law.
          </p>

          <p>
            <a href="/refunds">
              View Refunds & Returns Policy →
            </a>
          </p>
        </div>


        <div className="legal-section">
          <h2>15. Changes to These Terms</h2>

          <p>
            Bespoke Moment may update these Terms & Conditions from time to time.
          </p>

          <p>
            The version published on the website at the time of your order will
            generally apply to that order, unless otherwise required by law.
          </p>
        </div>


        <div className="legal-contact">
          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Questions about these terms?
          </h2>

          <p>
            Bespoke Moment Trading<br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>
        </div>

      </section>

    </main>
  )
}

function ShippingPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <h1>
          Shipping Policy
        </h1>
      </section>


      <section className="legal-content">

        <div className="legal-section">
          <h2>1. Order Processing</h2>

          <p>
            Custom Jewellery production begins after the required deposit and
            design approval have been received.
          </p>

          <p>
            Production time and shipping time are separate.
          </p>
        </div>


        <div className="legal-section">
          <h2>2. Shipping Costs</h2>

          <p>
            Standard shipping is included in the quoted price unless otherwise
            stated.
          </p>

          <p>
            Additional charges may apply for:
          </p>

          <ul>
            <li>express delivery;</li>
            <li>remote locations;</li>
            <li>redelivery;</li>
            <li>an address correction;</li>
            <li>special insurance;</li>
            <li>another service requested by the customer.</li>
          </ul>
        </div>


        <div className="legal-section">
          <h2>3. Estimated Delivery</h2>

          <p>
            Estimated delivery after dispatch is generally 5–15 business days.
          </p>

          <p>
            Delivery times may vary depending on:
          </p>

          <ul>
            <li>destination;</li>
            <li>courier service;</li>
            <li>customs processing;</li>
            <li>public holidays;</li>
            <li>weather;</li>
            <li>remote-area delivery;</li>
            <li>international transport disruptions.</li>
          </ul>

          <p>
            All delivery dates are estimates unless expressly confirmed as
            guaranteed.
          </p>
        </div>


        <div className="legal-section">
          <h2>4. Tracking</h2>

          <p>
            Tracking information will be provided after dispatch where available.
          </p>

          <p>
            Customers are also responsible for monitoring tracking updates and
            contacting us promptly if a delivery issue appears.
          </p>
        </div>


        <div className="legal-section">
          <h2>5. Delivery Address</h2>

          <p>
            Customers must provide a complete and accurate delivery address.
          </p>

          <p>
            Additional charges may apply where a parcel must be redirected or
            resent because the customer supplied incorrect or incomplete
            information.
          </p>
        </div>


        <div className="legal-section">
          <h2>6. Signature and Safe Delivery</h2>

          <p>
            High-value orders may require a signature.
          </p>

          <p>
            Customers should not authorise unattended delivery unless they
            accept the risks associated with leaving the parcel at the
            nominated location.
          </p>
        </div>


        <div className="legal-section">
          <h2>7. Delayed Parcels</h2>

          <p>
            If a parcel is materially delayed, please contact us so we can
            investigate with the courier.
          </p>

          <p>
            We will remain responsible for working with the customer and
            courier to provide an appropriate solution where the order is not
            supplied within the agreed or a reasonable period.
          </p>
        </div>


        <div className="legal-section">
          <h2>8. Lost Parcels</h2>

          <p>
            A parcel will not automatically be treated as lost merely because
            tracking is delayed.
          </p>

          <p>
            Where the courier confirms that a parcel has been lost, Bespoke
            Moment will provide an appropriate resolution, which may include
            replacement or refund depending on the circumstances.
          </p>
        </div>


        <div className="legal-section">
          <h2>9. Transit Damage</h2>

          <p>
            Contact us promptly if the parcel arrives visibly damaged.
          </p>

          <p>
            Please retain:
          </p>

          <ul>
            <li>outer packaging;</li>
            <li>inner packaging;</li>
            <li>shipping label;</li>
            <li>jewellery box;</li>
            <li>damaged item.</li>
          </ul>

          <p>
            Photographs and video may be required for the courier claim and
            product assessment.
          </p>
        </div>


        <div className="legal-section">
          <h2>10. Customs, Taxes and Duties</h2>

          <p>
            Any applicable duties and taxes for delivery to Australia and New Zealand are
            included in the price unless otherwise stated.
          </p>
        </div>


        <div className="legal-contact">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Questions about shipping?
          </h2>

          <p>
            Bespoke Moment Trading<br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>

        </div>

      </section>

    </main>
  )
}

function RefundsPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <h1>
          Refunds & Returns
        </h1>
      </section>


      <section className="legal-content">

        <div className="legal-section">
          <h2>1. Custom Jewellery</h2>

          <p>
            Bespoke Moment creates Custom Jewellery according to each
            customer's individual requirements.
          </p>

          <p>
            Custom orders may include personalised designs, ring size, metal,
            diamond or gemstone, setting, engraving, proportions and other
            agreed specifications.
          </p>

          <p>
            Because each piece is made specifically for the customer,
            cancellation and change-of-mind conditions apply differently from
            standard retail purchases.
          </p>
        </div>


        <div className="legal-section">
          <h2>2. Cancellation Within 12 Hours</h2>

          <p>
            You may request cancellation within <strong>12 hours</strong> of
            paying the deposit.
          </p>

          <p>
            During this period, a selected diamond or gemstone may remain
            available to other buyers unless Bespoke Moment has confirmed in
            writing that it has been reserved.
          </p>

          <p>
            If the originally selected stone becomes unavailable during this
            period, we will provide comparable alternatives for your review
            and approval before proceeding.
          </p>
        </div>


        <div className="legal-section">
          <h2>3. Cancellation After the 12-Hour Period</h2>

          <p>
            After the 12-hour cooling-off period, sourcing, design preparation,
            material purchasing or production may have commenced.
          </p>

          <p>
            Cancellation requests received after this period will be
            considered based on the stage of your order and the costs already
            reasonably incurred by Bespoke Moment.
          </p>

          <p>
            Once materials have been purchased or production has commenced,
            a change-of-mind cancellation or refund will generally not be
            available.
          </p>
        </div>


        <div className="legal-section">
          <h2>4. Change of Mind</h2>

          <p>
            Because Custom Jewellery is made specifically according to your
            confirmed requirements, we do not accept change-of-mind returns or
            refunds once the applicable cancellation period has ended and
            sourcing, design or production has commenced.
          </p>

          <p>
            This includes circumstances where you:
          </p>

          <ul>
            <li>change your preferred design;</li>
            <li>provide an incorrect ring size;</li>
            <li>change your mind about the metal, stone or engraving;</li>
            <li>no longer require the jewellery;</li>
            <li>find another product elsewhere;</li>
            <li>decide that the confirmed design no longer suits your personal preference.</li>
          </ul>

          <p>
            This does not affect any remedies available under the Australian
            Consumer Law.
          </p>
        </div>


        <div className="legal-section">
          <h2>5. Faulty, Damaged or Incorrect Jewellery</h2>

          <p>
            Please contact us as soon as reasonably possible if your jewellery:
          </p>

          <ul>
            <li>arrives damaged;</li>
            <li>has a suspected manufacturing defect;</li>
            <li>is materially different from the confirmed description or specifications;</li>
            <li>is incorrect due to an error by Bespoke Moment;</li>
            <li>does not meet an applicable consumer guarantee.</li>
          </ul>

          <p>
            Please provide:
          </p>

          <ul>
            <li>your full name;</li>
            <li>order number;</li>
            <li>a clear description of the issue;</li>
            <li>clear photographs and/or videos;</li>
            <li>photographs of the parcel and packaging where transit damage is involved.</li>
          </ul>

          <p>
            We may ask you to return the item for inspection before determining
            the appropriate remedy.
          </p>
        </div>


        <div className="legal-section">
          <h2>6. Minor Problems</h2>

          <p>
            Where a problem is minor and can be remedied within a reasonable
            time, Bespoke Moment may provide an appropriate remedy, such as:
          </p>

          <ul>
            <li>repair;</li>
            <li>replacement of an affected component;</li>
            <li>adjustment;</li>
            <li>another appropriate solution.</li>
          </ul>

          <p>
            Where required by Australian Consumer Law, the remedy will be
            provided without charge.
          </p>
        </div>


        <div className="legal-section">
          <h2>7. Major Problems</h2>

          <p>
            Where there is a major failure under Australian Consumer Law, you
            may be entitled to reject the goods and choose an available remedy,
            which may include a refund or replacement.
          </p>

          <p>
            A problem may be considered major where, for example, the jewellery:
          </p>

          <ul>
            <li>is unsafe;</li>
            <li>is significantly different from the confirmed description or approved specifications;</li>
            <li>is substantially unfit for its normal or disclosed purpose and cannot easily be remedied within a reasonable time;</li>
            <li>has a problem so serious that a reasonable consumer would not have purchased it had they known about the problem.</li>
          </ul>

          <p>
            The appropriate remedy will depend on the circumstances and
            applicable law.
          </p>
        </div>


        <div className="legal-section">
          <h2>8. Return Shipping</h2>

          <p>
            For confirmed manufacturing defects, incorrect items supplied by
            Bespoke Moment, or another issue for which Bespoke Moment is
            responsible, we will cover or reimburse reasonable return
            shipping costs where required.
          </p>

          <p>
            Please contact us before returning an item.
          </p>

          <p>
            We do not accept C.O.D. (cash on delivery) returns.
          </p>

          <p>
            Where a return is required, the jewellery should be securely
            packaged and sent using an appropriate tracked shipping service.
          </p>
        </div>


        <div className="legal-section">
          <h2>9. Refund Processing</h2>

          <p>
            Where a refund is approved, it will generally be issued to the
            original payment method.
          </p>

          <p>
            Please allow approximately <strong>5–10 business days</strong>
            after the refund has been processed for the funds to appear,
            depending on your bank or payment provider.
          </p>

          <p>
            Currency conversion charges, foreign transaction fees and
            exchange-rate differences imposed by banks or payment providers
            are outside our control.
          </p>
        </div>


        <div className="legal-section">
          <h2>10. Australian Consumer Law</h2>

          <p>
            Nothing in this policy excludes, restricts or modifies any rights
            available to you under the Australian Consumer Law.
          </p>

          <p>
            Our goods come with guarantees that cannot be excluded under the
            Australian Consumer Law.
          </p>

          <p>
            You may be entitled to a replacement or refund for a major failure
            and compensation for any other reasonably foreseeable loss or
            damage.
          </p>

          <p>
            You may also be entitled to have goods repaired or replaced if
            they fail to be of acceptable quality and the failure does not
            amount to a major failure.
          </p>

          <p>
            These rights may apply beyond any voluntary warranty period.
          </p>

          <p>
            For more information about Australian Consumer Law and consumer
            guarantees, please refer to the Australian Competition and
            Consumer Commission (ACCC).
          </p>
        </div>


        <div className="legal-contact">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Questions about returns or refunds?
          </h2>

          <p>
            Bespoke Moment Trading<br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>

        </div>

      </section>

    </main>
  )
}
function WarrantyPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <h1>
          Warranty
        </h1>

        <p className="legal-updated">
          Last updated: 31 August 2026
        </p>
      </section>


      <section className="legal-content">

        <div className="legal-section">
          <h2>1. Manufacturing Warranty</h2>

          <p>
            Every Bespoke Moment item is inspected before dispatch.
          </p>

          <p>
            Bespoke Moment provides a
            <strong> 12-month manufacturing warranty</strong> for Custom
            Jewellery, beginning on the date of completion.
          </p>

          <p>
            This voluntary warranty covers confirmed defects arising from
            materials or workmanship during normal and appropriate use.
          </p>

          <p>
            This warranty is provided in addition to, and does not replace,
            rights available under the Australian Consumer Law.
          </p>
        </div>


        <div className="legal-section">
          <h2>2. What the Warranty Covers</h2>

          <p>
            Covered issues may include:
          </p>

          <ul>
            <li>defective soldering or structural workmanship;</li>
            <li>faulty clasps, hinges or findings;</li>
            <li>a stone setting defect caused by workmanship;</li>
            <li>a loose stone resulting from a confirmed manufacturing defect;</li>
            <li>a structural defect in the ring, band, chain or setting;</li>
            <li>plating or finishing defects present at the time of delivery.</li>
          </ul>
        </div>


        <div className="legal-section">
          <h2>3. Remedies Under This Warranty</h2>

          <p>
            If a covered manufacturing defect is confirmed, Bespoke Moment
            will provide an appropriate remedy.
          </p>

          <p>
            Depending on the circumstances, this may include:
          </p>

          <ul>
            <li>repair;</li>
            <li>replacement of the defective component;</li>
            <li>replacement of the item;</li>
            <li>another agreed solution.</li>
          </ul>

          <p>
            Covered warranty remedies will be provided without charge where
            applicable under this warranty.
          </p>
        </div>


        <div className="legal-section">
          <h2>4. What the Warranty Does Not Cover</h2>

          <p>
            This warranty does not cover:
          </p>

          <ul>
            <li>normal wear and tear, scratches or polishing marks;</li>
            <li>fading or wear of plating;</li>
            <li>damage caused by impact, dropping or accident;</li>
            <li>chipped, cracked or broken diamonds or gemstones;</li>
            <li>loss or theft;</li>
            <li>damage from chemicals, cleaning products, perfume or cosmetics;</li>
            <li>damage from exercise, sport or manual work;</li>
            <li>incorrect ring size provided by the customer;</li>
            <li>damage caused by repairs performed by another jeweller;</li>
            <li>misuse or neglect.</li>
          </ul>
        </div>


        <div className="legal-section">
          <h2>5. Ring Resizing</h2>

          <p>
            Ring resizing is not automatically included under this warranty.
          </p>

          <p>
            Where the customer provided an incorrect ring size, resizing and
            shipping charges may apply.
          </p>

          <p>
            Certain designs, including full eternity bands, tension settings
            and heavily engraved bands, may not be safely resized.
          </p>
        </div>


        <div className="legal-section">
          <h2>6. How to Make a Warranty Claim</h2>

          <p>
            Please contact us with:
          </p>

          <ul>
            <li>your full name and order number;</li>
            <li>date of delivery;</li>
            <li>a clear description of the issue;</li>
            <li>photographs and/or videos of the problem.</li>
          </ul>

          <p>
            Please do not send jewellery back without first receiving return
            instructions from Bespoke Moment.
          </p>
        </div>


        <div className="legal-section">
          <h2>7. Australian Consumer Law</h2>

          <p>
            Our goods come with guarantees that cannot be excluded under the
            Australian Consumer Law.
          </p>

          <p>
            Nothing in this warranty is intended to exclude, restrict or
            modify any rights or remedies available to you under applicable law.
          </p>

          <p>
            You may be entitled to a replacement or refund for a major failure,
            as well as other remedies available under the Australian Consumer
            Law.
          </p>

          <p>
            Consumer rights may apply beyond this voluntary warranty period.
          </p>
        </div>


        <div className="legal-contact">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Need help with a warranty claim?
          </h2>

          <p>
            Bespoke Moment Trading<br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>

        </div>

      </section>

    </main>
  )
}

function PrivacyPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <h1>
          Privacy Policy
        </h1>

        <p className="legal-updated">
          Last updated: 31 August 2026
        </p>
      </section>


      <section className="legal-content">

        <div className="legal-section">
          <h2>1. About This Policy</h2>

          <p>
            This Privacy Policy explains how Bespoke Moment collects, uses,
            stores and discloses personal information when you visit our
            website, submit an enquiry, place a custom jewellery order or
            otherwise communicate with us.
          </p>

          <p>
            In this policy, “we”, “us” and “our” refer to Bespoke Moment.
          </p>
        </div>


        <div className="legal-section">
          <h2>2. Information We Collect</h2>

          <p>
            Depending on how you interact with us, we may collect information
            including:
          </p>

          <ul>
            <li>your name;</li>
            <li>email address;</li>
            <li>phone number;</li>
            <li>billing and shipping details;</li>
            <li>information provided in custom jewellery enquiries;</li>
            <li>design references, images or files submitted for an enquiry;</li>
            <li>order and transaction information;</li>
            <li>communications between you and Bespoke Moment;</li>
            <li>device, browser and IP address information;</li>
            <li>information about how you interact with our website.</li>
          </ul>

          <p>
            Payment information may be processed by the relevant payment
            provider. We do not intentionally store complete payment card
            details on our own systems.
          </p>
        </div>


        <div className="legal-section">
          <h2>3. How We Collect Information</h2>

          <p>
            We may collect personal information when you:
          </p>

          <ul>
            <li>submit an enquiry through our website;</li>
            <li>contact us by email or other authorised communication channels;</li>
            <li>request a personalised quotation;</li>
            <li>place or manage a custom jewellery order;</li>
            <li>communicate with us about your order or jewellery;</li>
            <li>browse or interact with our website.</li>
          </ul>
        </div>


        <div className="legal-section">
          <h2>4. How We Use Your Information</h2>

          <p>
            We may use personal information to:
          </p>

          <ul>
            <li>respond to enquiries and provide customer support;</li>
            <li>prepare personalised quotations;</li>
            <li>communicate about custom jewellery designs and specifications;</li>
            <li>process and fulfil orders;</li>
            <li>arrange payment, production and delivery;</li>
            <li>maintain business and transaction records;</li>
            <li>improve our website, services and customer experience;</li>
            <li>detect and prevent fraud, misuse or security issues;</li>
            <li>comply with applicable legal and regulatory requirements.</li>
          </ul>
        </div>


        <div className="legal-section">
          <h2>5. Custom Designs and Uploaded Files</h2>

          <p>
            When you submit inspiration images, sketches, design references or
            other files for a custom jewellery enquiry, we may use that
            information to understand your requirements, prepare your
            quotation and develop your requested jewellery.
          </p>

          <p>
            Please only submit files and information that you are authorised
            to share with us.
          </p>

          <p>
            We may retain submitted materials for as long as reasonably
            necessary to provide our services, maintain business records,
            resolve disputes and comply with legal obligations.
          </p>
        </div>


        <div className="legal-section">
          <h2>6. How We Disclose Information</h2>

          <p>
            We may disclose personal information where reasonably necessary to
            provide our services, including to:
          </p>

          <ul>
            <li>jewellery manufacturers and craftsmen involved in your custom order;</li>
            <li>payment providers;</li>
            <li>couriers and delivery providers;</li>
            <li>website, hosting, form or technology service providers;</li>
            <li>professional advisers or service providers where reasonably required;</li>
            <li>government authorities or other parties where required or authorised by law.</li>
          </ul>

          <p>
            Information may be shared with service providers located in
            Australia, China or other jurisdictions where necessary to provide
            the services described above.
          </p>
        </div>


        <div className="legal-section">
          <h2>7. Email and Website Services</h2>

          <p>
            Enquiry information submitted through our website may be processed
            by third-party website and form service providers in order to
            receive, store and deliver submissions to Bespoke Moment.
          </p>

          <p>
            Business correspondence sent to
            <strong> hello@bespokemoment.com</strong> may be forwarded through
            our email routing service to our designated business email account.
          </p>
        </div>


        <div className="legal-section">
          <h2>8. Marketing and Communications</h2>

          <p>
            We may use your contact information to communicate with you about
            your enquiry, quotation, order or other direct business
            interactions.
          </p>

          <p>
            Where we send promotional communications, you may opt out where
            applicable by following the unsubscribe instructions provided in
            the communication or by contacting us.
          </p>
        </div>


        <div className="legal-section">
          <h2>9. Cookies and Website Analytics</h2>

          <p>
            Our website and third-party services may use cookies or similar
            technologies to support website functionality, understand website
            usage and improve the customer experience.
          </p>

          <p>
            The information collected may include browser type, device
            information, IP address, pages visited and interactions with the
            website.
          </p>
        </div>


        <div className="legal-section">
          <h2>10. Security</h2>

          <p>
            We take reasonable steps to protect personal information against
            misuse, interference, loss and unauthorised access, modification
            or disclosure.
          </p>

          <p>
            No internet transmission or electronic storage system can be
            guaranteed to be completely secure.
          </p>
        </div>


        <div className="legal-section">
          <h2>11. Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this policy, including to
            provide services, maintain business records, resolve disputes and
            comply with legal obligations.
          </p>
        </div>


        <div className="legal-section">
          <h2>12. Access and Correction</h2>

          <p>
            Depending on applicable law, you may request access to personal
            information we hold about you and ask us to correct information
            that is inaccurate or incomplete.
          </p>

          <p>
            To make a privacy-related request, please contact us using the
            details below.
          </p>
        </div>


        <div className="legal-section">
          <h2>13. Privacy Concerns</h2>

          <p>
            If you have concerns about how we handle your personal information,
            please contact us first so that we can investigate and respond to
            your concern.
          </p>

          <p>
            You may also have the right to make a complaint to the relevant
            privacy regulator where applicable.
          </p>
        </div>


        <div className="legal-section">
          <h2>14. Changes to This Policy</h2>

          <p>
            We may update this Privacy Policy from time to time.
          </p>

          <p>
            The updated version will be published on this website together
            with the revised “Last updated” date.
          </p>
        </div>


        <div className="legal-contact">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Questions about privacy?
          </h2>

          <p>
            Bespoke Moment Trading<br />
            PO Box 971, North Adelaide SA 5006, Australia
          </p>

          <p>
            <strong>
              Email:
            </strong>{' '}
            <a href="mailto:hello@bespokemoment.com">
              hello@bespokemoment.com
            </a>
          </p>

        </div>

      </section>

    </main>
  )
}

function AboutPage() {
  return (
    <section className="about-v3">
      
      {/* =====================================================
          01 — OUR STORY
          ===================================================== */}

      <div className="about-v3-header">

        <p className="eyebrow">
          ABOUT BESPOKE MOMENT
        </p>

        <div className="about-v3-title">

          <h2>
            Our Story
          </h2>

          <p>
            Hi, I'm Tiana, the founder of Bespoke Moment.
          </p>

        </div>

      </div>


      <div className="about-v3-story">

        <div className="about-v3-text">

          <p>
            I grew up in Guangzhou, China — home to one of the world's largest
            jewellery manufacturing and wholesale hubs.
          </p>

          <p>
            In 2024, I married my husband in Australia. Like many couples,
            finding the perfect engagement ring and wedding bands was at the top
            of our wedding checklist.
          </p>

          <p>
            To us, our wedding rings were more than jewellery — they were a
            symbol of one of the biggest moments of our lives.
          </p>

          <p>
            After searching online and in-store across Australia, we quickly
            realised our budget was very limited to what we wanted. We might
            have had to break the bank to get what we wanted.
          </p>

          <p>
            That's when I had an idea. Since I grew up in Guangzhou, why not
            contact trusted manufacturers directly instead of paying traditional
            retail prices?
          </p>

          <p>
            We ended up with the rings we had dreamt of from the beginning —
            crafted with exceptional quality, fully customised to our preferences,
            and at a significantly better value. We saved more than 30% compared
            with similar rings we had seen in retail stores.
          </p>

          <p>
            That experience completely changed how I thought about buying
            jewellery. Beautiful custom jewellery shouldn't have to come with
            luxury retail markups.
          </p>

          <p>
            That's why I created <em>Bespoke Moment.</em>
          </p>

          <p>
            Today, we work directly with trusted jewellery manufacturers and
            experienced craftsmen to create fully customised engagement rings,
            wedding bands, anniversary gifts, and fine jewellery.
          </p>

        </div>


        <div className="about-v3-images">

          <div className="about-v3-image about-v3-image-main">
            <img
              src="/portfolio-images/story-picture-1.jpg"
              alt="Bespoke Moment jewellery story"
              loading="lazy"
            />
          </div>

          <div className="about-v3-image about-v3-image-secondary">
            <img
              src="/portfolio-images/story-picture-2.jpg"
              alt="Bespoke Moment custom jewellery"
              loading="lazy"
            />
          </div>

        </div>

      </div>


      {/* =====================================================
          02 — CRAFTSMANSHIP & SOURCING
          ===================================================== */}

      <div className="about-v3-sourcing">

        <div className="about-v3-sourcing-content">

          <p className="eyebrow">
            OUR CRAFTSMANSHIP &amp; SOURCING
          </p>

          <h4>
            We don't simply source jewellery — we carefully select the people who make it.
          </h4>

          <div className="about-v3-text">

            <p>
              Our trusted manufacturing partners and jewellery specialists are
              based in Guangzhou and Shenzhen, two of China’s leading centres
              for fine jewellery craftsmanship.
            </p>

            <p>
              As the founder, I regularly visit both cities to work closely with
              experienced jewellers, source quality gemstones, and oversee the
              production of our jewellery.
            </p>

            <p>
              We specialise in lab-grown diamond and precious metal jewellery,
              combining modern technology with skilled craftsmanship.
            </p>

            <p>
              For certified lab-grown diamonds, we independently verify the IGI
              certificate against the selected stone before production begins.
              Before shipping, the precious metal is also tested by an independent
              institution in China to verify its stated purity.
            </p>

            <p>
              By working closely with trusted manufacturing partners and overseeing
              key stages of production, we provide quality craftsmanship, transparent
              pricing, and personalised service — without traditional luxury retail markups.
            </p>

          </div>

        </div>


        <div className="about-v3-sourcing-media">

          <div className="about-v3-sourcing-image">
            <img
              src="/portfolio-images/IGI证书现拍图.jpg"
              alt="IGI certified lab-grown diamonds"
              loading="lazy"
            />
          </div>

          <div className="about-v3-sourcing-image">
            <img
              src="/portfolio-images/大罗塘.jpg"
              alt="Jewellery manufacturing and sourcing in Guangzhou"
              loading="lazy"
            />
          </div>

        </div>

      </div>


      {/* =====================================================
          03 — MY MISSION
          ===================================================== */}

      <div className="about-v3-mission">

        <div className="about-v3-mission-label">
          <p className="eyebrow">
            MY MISSION IS SIMPLE
          </p>
        </div>

        <div className="about-v3-mission-content">

          <p className="about-v3-mission-statement">
            To help customers create custom jewellery that feels uniquely theirs —
            without sacrificing quality, design, or financial peace of mind.
          </p>

          <div className="about-v3-signoff">
            Thank you for letting us be part of your story.
            <br /><br />
            — Tiana<br />
            Founder, Bespoke Moment
          </div>

        </div>

      </div>

    </section>
  )
}
function BusinessPage() {
  return (
    <main className="business-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="business-hero">

        <div className="business-hero-inner">

          <a
            href="/"
            className="business-back-link"
          >
            ← Back to home
          </a>

          <p className="eyebrow">
            BM FOR BUSINESS
          </p>

          <h1>
            Turn Your Brand Story
            <br />
            Into Jewellery.
          </h1>

          <p className="business-hero-text">
            Bespoke jewellery created for businesses, brands and
            meaningful corporate moments.
          </p>

          <a
            href="/#contact"
            className="button button-dark business-main-button"
          >
            SUBMIT A BUSINESS ENQUIRY
          </a>

        </div>

      </section>


      {/* =====================================================
          WHAT WE CREATE
          ===================================================== */}

      <section className="business-section business-services">

        <div className="business-section-label">
          <p className="eyebrow">
            WHAT WE CREATE
          </p>
        </div>

        <div className="business-service-grid">

          <article className="business-service-item">

            <span className="business-service-number">
              01
            </span>

            <h2>
              Executive Gifting
            </h2>

            <p>
              Custom jewellery for executives, VIP clients and
              business partners.
            </p>

          </article>


          <article className="business-service-item">

            <span className="business-service-number">
              02
            </span>

            <h2>
              Corporate Recognition
            </h2>

            <p>
              Pieces created to celebrate achievements,
              milestones and leadership.
            </p>

          </article>


          <article className="business-service-item">

            <span className="business-service-number">
              03
            </span>

            <h2>
              Brand &amp; Heritage
            </h2>

            <p>
              Transform your brand identity, symbols or story
              into jewellery.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          MATERIALS & PRODUCTION
          ===================================================== */}

      <section className="business-section business-materials">

        <div className="business-section-label">
          <p className="eyebrow">
            MATERIALS &amp; PRODUCTION
          </p>
        </div>

        <div className="business-material-grid">

          <div className="business-material-item">

            <h2>
              Fine Gold
            </h2>

            <p className="business-material-main">
              9K · 14K · 18K Gold
            </p>

            <p className="business-material-moq">
              MOQ: 1 piece
            </p>

          </div>


          <div className="business-material-item">

            <h2>
              More Accessible Options
            </h2>

            <p className="business-material-main">
              Gold Vermeil
            </p>

            <p className="business-material-moq">
              MOQ: 20 pieces
            </p>

          </div>


          <div className="business-material-item">

            <h2>
              Gold-Plated Brass
            </h2>

            <p className="business-material-main">
              Custom production
            </p>

            <p className="business-material-moq">
              MOQ: 50 pieces
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PROCESS
          ===================================================== */}

      <section className="business-section business-process-section">

        <div className="business-section-label">
          <p className="eyebrow">
            OUR PROCESS
          </p>
        </div>

        <div className="business-process-grid">

          <article className="business-process-item">

            <span>
              01
            </span>

            <h2>
              Design
            </h2>

            <p>
              7–10 business days
            </p>

          </article>


          <article className="business-process-item">

            <span>
              02
            </span>

            <h2>
              Production
            </h2>

            <p>
              15–30 business days
            </p>

          </article>


          <article className="business-process-item">

            <span>
              03
            </span>

            <h2>
              Delivery
            </h2>

            <p>
              Usually 7–20 business days
              <br />
              Air shipping
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="business-final-cta">

        <p className="eyebrow">
          HAVE A CONCEPT IN MIND?
        </p>

        <h2>
          Tell us about your business,
          <br />
          occasion or idea.
        </h2>

        <a
          href="/#contact"
          className="button button-dark"
        >
          SUBMIT A BUSINESS ENQUIRY
        </a>

      </section>

    </main>
  )
}
function HomePage() {
  const [formStatus, setFormStatus] = useState('idle')
const handleEnquirySubmit = async (event) => {
  event.preventDefault()

const form = event.currentTarget
const formData = new FormData(form)

const attachment = form.querySelector('#attachment')?.files?.[0]

const MAX_FILE_SIZE = 6 * 1024 * 1024

if (attachment && attachment.size > MAX_FILE_SIZE) {
  setFormStatus('error')
  return
}

formData.set('form-name', 'enquiry')

  setFormStatus('submitting')

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`)
    }

    form.reset()
    setFormStatus('success')
  } catch (error) {
    console.error('Enquiry submission error:', error)
    setFormStatus('error')
  }
}
  return (    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">BESPOKE MOMENT</p>

            <h1>
              Custom Jewellery,<br />
              Made Around Your <em>Idea.</em>
            </h1>

            <p className="hero-text">
              Custom engagement rings, wedding bands and fine jewellery, created with trusted manufacturers in Guangzhou & Shenzhen, with personalised service across Australia & New Zealand. We also create bespoke jewellery for executive and corporate gifting, tailored to your occasion.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button button-dark">
                START YOUR ENQUIRY
              </a>
              <a href="#process" className="button button-light">
                HOW IT WORKS
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <img
                src={homepageImages.hero.image}
                alt={homepageImages.hero.alt}
              />
            </div>
          </div>
        </section>

        <section className="intro" id="custom">
          <p className="eyebrow">MADE FOR YOUR MOMENT</p>
          <h2>
            Beautiful jewellery,<br />
            without the traditional retail markup.
          </h2>
          <p>
            Our approach brings together thoughtful design, careful craftsmanship and personalised service, creating custom pieces that feel considered from the first idea to the finished jewellery.
          </p>
          <a href="#process" className="text-link">
            Discover our process →
          </a>
        </section>

        <section className="categories">
          <article className="category-card large">
            <div
              className="category-image category-ring"
              style={{
                backgroundImage: `url('${homepageImages.engagement.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>ENGAGEMENT RINGS</span>
            </div>

            <div className="category-content">
              <h3>Engagement Rings</h3>
              <p>
                From a simple solitaire to a completely personalised design, created around the details that matter to you.
              </p>
              <a href="#portfolio-engagement" className="text-link">
                Explore engagement rings →
              </a>
            </div>
          </article>

          <article className="category-card">
            <div
              className="category-image category-band"
              style={{
                backgroundImage: `url('${homepageImages.wedding.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>WEDDING BANDS</span>
            </div>

            <div className="category-content">
              <h3>Wedding Bands</h3>
              <p>
                Matching or completely different — designed to work together in your own way.
              </p>
              <a href="#portfolio-wedding" className="text-link">
                Explore wedding bands →
              </a>
            </div>
          </article>

          <article className="category-card">
            <div
              className="category-image category-gift"
              style={{
                backgroundImage: `url('${homepageImages.jewellery.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>FINE JEWELLERY</span>
            </div>

            <div className="category-content">
              <h3>Gift Jewellery</h3>
              <p>
                Thoughtful pieces for birthdays, anniversaries and all the moments worth celebrating.
              </p>
              <a href="#portfolio-jewellery" className="text-link">
                Explore jewellery →
              </a>
            </div>
          </article>
</section>


{/* =================================================
    HOW IT WORKS
    ================================================= */}

<section
  className="process"
  id="process"
>

<div className="process-header">

  <p className="process-title">
    HOW IT WORKS
  </p>

  <h2>
    Creating your custom jewellery.
  </h2>

</div>


  <div className="process-list">

    <article className="process-item">

      <div className="process-number">
        01
      </div>

      <div className="process-content">

        <h3>
          Share Your Inspiration
        </h3>

        <p>
          Tell us what you have in mind by sharing a design,
          inspiration image, stone type, metal or size.
        </p>

      </div>

    </article>


    <article className="process-item">

      <div className="process-number">
        02
      </div>

      <div className="process-content">

        <h3>
          Receive Your Personalised Quote
        </h3>

        <p>
          We'll prepare a personalised quote based on your design,
          materials, stone selection and budget.
        </p>

      </div>

    </article>


    <article className="process-item">

      <div className="process-number">
        03
      </div>

      <div className="process-content">

        <h3>
          Confirm Your Order
        </h3>

        <p>
          Once you're happy with your quote, we'll send you a secure
          checkout link. A 70% deposit is required to begin production.
        </p>

      </div>

    </article>


    <article className="process-item">

      <div className="process-number">
        04
      </div>

      <div className="process-content">

        <h3>
          Design Review & Crafting
        </h3>

        <p>
          We'll prepare your digital design for review in approximately
          7 business days. Once approved, production begins and your
          jewellery is handcrafted in approximately 15 business days.
        </p>

      </div>

    </article>


    <article className="process-item">

      <div className="process-number">
        05
      </div>

      <div className="process-content">

        <h3>
          Final Review & Shipping
        </h3>

        <p>
          We'll share detailed photos and videos for your final review.
          Once approved, the remaining 30% balance is due and your
          jewellery will be carefully packaged and shipped with tracking.
        </p>

      </div>

    </article>

  </div>

</section>

<section className="about-v3 about-business-home">
  <div className="about-v3-business">
  <div className="about-v3-business-media">
    <div className="about-v3-business-image">
      <img
        src="/portfolio-images/BM business designs.png"
        alt="Executive and corporate custom jewellery gifting"
        loading="lazy"
      />
    </div>
  </div>

  <div className="about-v3-business-content">

    <p className="eyebrow">
      BESPOKE FOR BUSINESS
    </p>

    <h3>
      Jewellery can celebrate more than personal moments.
    </h3>

    <p>
      Our custom approach also extends to businesses looking for a more
      personal way to recognise people and milestones.
    </p>

    <p>
      We create Executive &amp; Corporate Custom Jewellery Gifting around
      your company, occasion, brand story or the people being celebrated.
    </p>

    <p>
      From executive gifts and client appreciation pieces to anniversary
      gifts, milestone awards and commemorative jewellery, each piece can
      be customised in the choice of metal, gemstones, design details,
      engraving and presentation.
    </p>

    <p>
      Rather than choosing from a standard catalogue, businesses can work
      with us to create something made specifically for the occasion.
    </p>

<a
  href="/business"
  className="text-link"
>
  Explore Bespoke for Business →
</a>

  </div>

</div>

</section>
       <section
  className="cta enquiry-section"
  id="contact">

  <div className="enquiry-heading">
    <p className="eyebrow">
      Tell us what you'd like to create.
    </p>

    <h3>
  START YOUR ENQUIRY
    </h3>

    <p>
      Tell us what you're looking for and we'll prepare a personalised quote and suitable options
      based on your ideas, preferences and budget.
    </p>
  </div>

 <form
  className="enquiry-form"
  name="enquiry"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  encType="multipart/form-data"
  onSubmit={handleEnquirySubmit}
>
  <input
    type="hidden"
    name="form-name"
    value="enquiry"
  />

    <div
  className="form-hidden-field"
  aria-hidden="true"
>
  <label htmlFor="bot-field">
    Don&apos;t fill this out if you&apos;re human
  </label>

  <input
    id="bot-field"
    name="bot-field"
    type="text"
    tabIndex="-1"
    autoComplete="off"
  />
</div>

    <div className="form-row">
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-field">
        <label htmlFor="country">Country</label>
        <select id="country" name="country" defaultValue="" required>
          <option value="" disabled>Select your country</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Other / International">Other / International</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="city">City / Suburb</label>
        <input
          id="city"
          name="city-suburb"
          type="text"
          placeholder="e.g. Sydney or Parramatta"
          autoComplete="address-level2"
          required
        />
      </div>
    </div>

    <div className="form-field">
      <label htmlFor="jewellery-type">What are you looking for?</label>
      <select id="jewellery-type" name="jewellery-type" defaultValue="" required>
        <option value="" disabled>Select an option</option>
        <option value="engagement-ring">Engagement Ring</option>
        <option value="wedding-band">Wedding Band</option>
        <option value="gift-jewellery">Gift Jewellery</option>
        <option value="business">Bespoke for Business</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-field">
      <label htmlFor="budget">ESTIMATED BUDGET / PROJECT BUDGET <span>(optional)</span></label>
      <input
        id="budget"
        name="budget"
        type="text"
        placeholder="e.g. AUD $3,000–5,000"
      />
    </div>

    <div className="form-field">
      <label htmlFor="message">TELL US ABOUT YOUR IDEA OR PROJECT <span>(optional)</span></label>
      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="Tell us about your preferred design, occasion, materials, quantity or anything else you'd like us to know."
      />
    </div>

<div className="form-field">
  <label htmlFor="attachment">
    Attachment <span>(optional)</span>
  </label>

  <input
    id="attachment"
    name="attachment"
    type="file"
    accept=".jpg,.jpeg,.png,.webp,.pdf"
  />

  <small>
    Upload one image or PDF with your inspiration or reference design. Maximum file size: 6 MB.
  </small>
</div>

    <div className="contact-preference">
      <p className="contact-preference-title">
        Preferred contact method <span>(optional)</span>
      </p>

      <div className="contact-options">
        <label>
          <input type="radio" name="contact-method" value="whatsapp" />
          <span>WhatsApp</span>
        </label>

        <label>
          <input type="radio" name="contact-method" value="instagram" />
          <span>Instagram</span>
        </label>
      </div>

      <div className="form-field contact-detail-field">
        <label htmlFor="contact-details">
          Contact details <span>(optional)</span>
        </label>
        <input
          id="contact-details"
          name="contact-details"
          type="text"
          placeholder="e.g. WhatsApp number or Instagram username"
        />
        <small>
          We may use your preferred contact method to share jewellery options, available stones or stock information.
        </small>
      </div>
    </div>

    {formStatus === 'success' && (
      <p className="form-status form-status-success" role="status">
        Thank you — your enquiry has been received. We'll be in touch soon.
      </p>
    )}

{formStatus === 'error' && (
  <p className="form-status form-status-error" role="alert">
    Something went wrong while sending your enquiry. Please check your attachment is under 6 MB and try again. You can also email us directly.
  </p>
)}

    <button
      type="submit"
      className="button button-dark"
      disabled={formStatus === 'submitting'}
    >
      {formStatus === 'submitting' ? 'SENDING…' : 'SUBMIT YOUR ENQUIRY'}
    </button>
  </form>
</section>

{/* =================================================
    FAQ
    ================================================= */}

<section
  className="faq"
  id="faq"
>

  <div className="faq-header">
    <p className="faq-title">
      FAQ
    </p>

    <h3>
      Frequently asked questions.
    </h3>
  </div>


  <div className="faq-list">

    {/* FAQ 01 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">01</span>

        <span className="faq-question">
          Can I customise a piece from an inspiration image?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          Yes. You can send us inspiration images, sketches or existing
          designs, and we'll help turn your ideas into a personalised piece.
        </p>
      </div>

    </details>


    {/* FAQ 02 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">02</span>

        <span className="faq-question">
          Do I need to choose my diamond or gemstone first?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          No. Tell us your preferred shape, size, colour or budget and we'll
          help you explore suitable diamond or gemstone options.
        </p>
      </div>

    </details>


    {/* FAQ 03 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">03</span>

        <span className="faq-question">
          How long does a custom piece take?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          Digital design preparation usually takes approximately 7 business
          days after your deposit. Once the design is approved, production
          generally takes around 15 business days. Shipping time is additional.
        </p>
      </div>

    </details>


    {/* FAQ 04 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">04</span>

        <span className="faq-question">
          How does payment work?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          A 70% deposit is required to begin a custom order. The remaining
          30% balance is due after the finished piece has been reviewed and
          approved, before dispatch.
        </p>
      </div>

    </details>


    {/* FAQ 05 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">05</span>

        <span className="faq-question">
          Can I review the design before production?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          Yes. We'll provide a digital design for your review before
          production begins.
        </p>
      </div>

    </details>


    {/* FAQ 06 */}
    <details className="faq-item">

      <summary>
        <span className="faq-number">06</span>

        <span className="faq-question">
          Do you ship to Australia and New Zealand?
        </span>

        <span className="faq-icon">+</span>
      </summary>

      <div className="faq-answer">
        <p>
          Yes. Bespoke Moment is focused on serving customers across
          Australia and New Zealand, with tracked shipping arranged after
          your piece has been completed and approved.
        </p>
      </div>

    </details>

  </div>

</section>
      </main>
    </>
  )
}

function App() {
  const [page, setPage] = useState(getPageFromHash())
  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = window.location.pathname
  const portfolioDetail = getPortfolioDetailFromPath()

  const isTermsPage =
    pathname === '/terms' ||
    pathname === '/terms/'

const isShippingPage =
  pathname === '/shipping' ||
  pathname === '/shipping/'

const isRefundsPage =
  pathname === '/refunds' ||
  pathname === '/refunds/'

const isWarrantyPage =
  pathname === '/warranty' ||
  pathname === '/warranty/'

const isPrivacyPage =
  pathname === '/privacy' ||
  pathname === '/privacy/'

const isBusinessPage =
  pathname === '/business' ||
  pathname === '/business/'

const isAboutPage =
  pathname === '/about' ||
  pathname === '/about/'

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const goHome = () => {
    window.location.hash = ''
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
const goToHomeSection = (section) => {
  // If we're on another page, return to homepage first.
  if (window.location.pathname !== '/') {
    window.location.href = `/#${section}`
    return
  }

  // Use the hash so React's existing hashchange
  // listener updates the page state correctly.
  window.location.hash = section
}

useEffect(() => {
  const section = window.location.hash.replace('#', '')

  if (!section) {
    return
  }

  if (page !== 'home') {
    return
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = document.getElementById(section)

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}, [page])

return (
  <div className="site">

      <header className="header">
<a href="/" className="logo">
  <img src="/bm-logo.png" alt="Bespoke Moment" />
</a>

<nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>

<a
  href="/portfolio-engagement"
  onClick={() => setMenuOpen(false)}
>
  ENGAGEMENT RINGS
</a>

<a
  href="/portfolio-wedding"
  onClick={() => setMenuOpen(false)}
>
  WEDDING BANDS
</a>

<a
  href="/portfolio-jewellery"
  onClick={() => setMenuOpen(false)}
>
  GIFT JEWELLERY
</a>

<a href="/business">
  FOR BUSINESS
</a>

  <a
    href="/#process"
    onClick={(e) => {
      e.preventDefault()
      goToHomeSection('process')
    }}
  >
    HOW IT WORKS
  </a>

<a href="/about">
  ABOUT US
</a>

</nav>

<button
  className="menu-button"
  type="button"
  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((open) => !open)}
>
  <span></span>
  <span></span>
  <span></span>
</button>

      </header>

{isTermsPage ? (
  <TermsPage />
) : isShippingPage ? (
  <ShippingPage />
) : isRefundsPage ? (
  <RefundsPage />
) : isWarrantyPage ? (
  <WarrantyPage />
) : isPrivacyPage ? (
  <PrivacyPage />
) : isBusinessPage ? (
  <BusinessPage />
) : isAboutPage ? (
  <AboutPage />
) : portfolioDetail ? (
  <PortfolioDetailPage
    project={portfolioDetail.project}
    categoryTitle={portfolioData[portfolioDetail.type].title}
    onBack={() => {
      window.location.href = `/#portfolio-${portfolioDetail.type}`
    }}
    onHome={goHome}
  />
) : (
  <>
    {page === 'home' && <HomePage />}

    {page !== 'home' && (
      <PortfolioPage
        type={page}
        onHome={goHome}
      />
    )}
  </>
)}

      <footer className="footer">
        <div className="footer-brand">
          <a href="/" className="logo">
  BESPOKE MOMENT
</a>
          <p>
            Custom Diamond Rings Without Retail Markup.<br />
            Craftsmanship based in China.<br />
            Service focused in Australia & New Zealand.
          </p>
        </div>

{/* =====================================================
    DESKTOP FOOTER
    ===================================================== */}

<div className="footer-desktop-columns">

  <div className="footer-column">
    <h4>ABOUT</h4>

    <a href="/about">
      About Us
    </a>

    <a href="/#process">
      How It Works
    </a>

    <a href="/business">
      Bespoke for Business
    </a>

    <a href="/#contact">
      Contact
    </a>
  </div>


  <div className="footer-column">
    <h4>JEWELLERY</h4>

    <a href="/#portfolio-engagement">
      Engagement Rings
    </a>

    <a href="/#portfolio-wedding">
      Wedding Bands
    </a>

    <a href="/#portfolio-jewellery">
      Gift Jewellery
    </a>
  </div>


  <div className="footer-column">
    <h4>LEGAL</h4>

    <a href="/warranty">
      Warranty
    </a>

    <a href="/refunds">
      Refunds &amp; Returns
    </a>

    <a href="/shipping">
      Shipping Policy
    </a>

    <a href="/terms">
      Terms &amp; Conditions
    </a>

    <a href="/privacy">
      Privacy Policy
    </a>
  </div>


  <div className="footer-column">
    <h4>FOLLOW</h4>

    <a
      href="https://www.instagram.com/bespokemoment.co/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://www.tiktok.com/@bespokemoment"
      target="_blank"
      rel="noopener noreferrer"
    >
      TikTok
    </a>

    <a
      href="https://au.pinterest.com/BespokemMomentJewellery/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pinterest
    </a>
  </div>

</div>


{/* =====================================================
    MOBILE FOOTER ACCORDION
    ===================================================== */}

<div className="footer-mobile-accordion">

  <details>
    <summary>
      HELP &amp; SUPPORT
    </summary>

    <div className="footer-mobile-links">

      <a href="/about">
        About Us
      </a>

      <a href="/#process">
        How It Works
      </a>

      <a href="/warranty">
        Warranty
      </a>

      <a href="/refunds">
        Refunds &amp; Returns
      </a>

      <a href="/shipping">
        Shipping Policy
      </a>

      <a href="/terms">
        Terms &amp; Conditions
      </a>

      <a href="/privacy">
        Privacy Policy
      </a>

    </div>
  </details>


  <details>
    <summary>
      GET IN TOUCH
    </summary>

    <div className="footer-mobile-links">

      <a href="/#contact">
        Contact
      </a>

      <a href="/business">
        Bespoke for Business
      </a>

      <a href="mailto:hello@bespokemoment.com">
        hello@bespokemoment.com
      </a>

    </div>
  </details>


  <details>
    <summary>
      JEWELLERY
    </summary>

    <div className="footer-mobile-links">

      <a href="/#portfolio-engagement">
        Engagement Rings
      </a>

      <a href="/#portfolio-wedding">
        Wedding Bands
      </a>

      <a href="/#portfolio-jewellery">
        Gift Jewellery
      </a>

    </div>
  </details>


  <details>
    <summary>
      SOCIALS
    </summary>

    <div className="footer-mobile-links">

      <a
        href="https://www.instagram.com/bespokemoment.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>

      <a
        href="https://www.tiktok.com/@bespokemoment"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok
      </a>

      <a
        href="https://au.pinterest.com/BespokemMomentJewellery/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pinterest
      </a>

    </div>
  </details>

</div>

        <div className="footer-bottom">
          <span>© 2026 Bespoke Moment</span>
          <span>Made for moments that matter.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
