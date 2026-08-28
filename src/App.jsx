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
        title: 'Custom Engagement Ring',
        meta: 'Oval diamond • 18K gold',
        image: '/portfolio-images/engagement-ring-01.jpg',
        alt: 'Custom oval diamond engagement ring'
      },
      {
        title: 'Custom Engagement Ring',
        meta: 'Oval diamond • Bespoke setting',
        image: '/portfolio-images/engagement-ring-02.jpg',
        alt: 'Custom oval diamond engagement ring'
      },
      {
        title: 'Custom Engagement Ring',
        meta: 'Oval diamond • Diamond-set band',
        image: '/portfolio-images/engagement-ring-03.jpg',
        alt: 'Custom oval diamond engagement ring'
      },
      {
        title: 'Custom Engagement Ring',
        meta: 'Yellow diamond • Bespoke setting',
        image: '/portfolio-images/engagement-ring-04.jpg',
        alt: 'Custom yellow diamond engagement ring'
      },
      {
        title: 'Custom Engagement Ring',
        meta: 'Round diamond • Halo setting',
        image: '/portfolio-images/engagement-ring-05.jpg',
        alt: 'Custom round halo engagement ring'
      },
      {
        title: 'Custom Engagement Ring',
        meta: 'Emerald cut • Diamond-set design',
        image: '/portfolio-images/engagement-ring-06.jpg',
        alt: 'Custom emerald cut engagement ring'
      }
    ]
  },

  wedding: {
    eyebrow: 'FOR TWO',
    title: 'Wedding Bands',
    intro: 'Matching, complementary or completely different — wedding bands designed to work together in your own way.',
    note: 'Previous custom pieces are shown for design inspiration and reference only.',
    projects: [
      {
        title: 'Custom Wedding Bands',
        meta: '18K gold • Diamond-set band',
        image: '/portfolio-images/wedding-band-01.jpg',
        alt: 'Custom 18K gold diamond wedding bands'
      },
      {
        title: 'Custom Wedding Bands',
        meta: '18K gold • Geometric design',
        image: '/portfolio-images/wedding-band-02.jpg',
        alt: 'Custom geometric wedding bands'
      },
      {
        title: 'Custom Wedding Band',
        meta: 'White gold • Diamond detail',
        image: '/portfolio-images/wedding-band-03.jpg',
        alt: 'Custom white gold diamond wedding band'
      },
      {
        title: 'Custom Wedding Band',
        meta: 'White gold • Diamond-set design',
        image: '/portfolio-images/wedding-band-04.jpg',
        alt: 'Custom white gold diamond wedding band'
      },
      {
        title: 'Custom Couple Rings',
        meta: 'Wedding set • Diamond engagement ring',
        image: '/portfolio-images/wedding-band-05.jpg',
        alt: 'Custom couple wedding ring set'
      },
      {
        title: 'Custom Wedding Band',
        meta: '18K gold • Emerald detail',
        image: '/portfolio-images/wedding-band-06.jpg',
        alt: 'Custom 18K gold wedding band with green gemstone details'
      }
    ]
  },

  jewellery: {
    eyebrow: 'SPECIAL MOMENTS',
    title: 'Gift Jewellery',
    intro: 'Personalised jewellery for birthdays, anniversaries, milestones and the moments worth celebrating.',
    note: 'Selected pieces may be available as ready-made jewellery. Availability should be confirmed before purchase.',
    projects: [
      {
        title: 'Tiger-Inspired Gold Earrings',
        meta: '18K gold • Statement design',
        image: '/portfolio-images/gift-jewellery-01.jpg',
        alt: '18K gold tiger-inspired hoop earrings'
      },
      {
        title: 'Everyday Chain Necklace',
        meta: '18K gold • White gold • Everyday wear',
        image: '/portfolio-images/gift-jewellery-02.jpg',
        alt: '18K gold and white gold chain necklaces'
      },
      {
        title: '18K Gold O Pendant',
        meta: '18K gold • Diamond detail',
        image: '/portfolio-images/gift-jewellery-03.jpg',
        alt: '18K gold O-shaped pendant necklace'
      },
      {
        title: 'Camellia Gold Earrings',
        meta: '18K gold • Floral design',
        image: '/portfolio-images/gift-jewellery-04.jpg',
        alt: '18K gold camellia flower stud earrings'
      },
      {
        title: 'Mother-of-Pearl Pendant',
        meta: 'Mother of pearl • Diamonds • 18K gold',
        image: '/portfolio-images/gift-jewellery-05.jpg',
        alt: 'Mother-of-pearl and diamond 18K gold pendant necklace'
      },
      {
        title: 'Diamond Stud Earrings',
        meta: 'Diamonds • 18K gold',
        image: '/portfolio-images/gift-jewellery-06.jpg',
        alt: 'Diamond stud earrings in 18K gold'
      }
    ]
  }
}

const homepageImages = {
  hero: {
    image: '/portfolio-images/homepage-hero.jpg',
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
  const hash = window.location.hash

  if (hash === '#portfolio-engagement') return 'engagement'
  if (hash === '#portfolio-wedding') return 'wedding'
  if (hash === '#portfolio-jewellery') return 'jewellery'

  return 'home'
}

function PortfolioPage({ type, onHome }) {
  const data = portfolioData[type]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <button className="back-link" onClick={onHome}>
          ← Back to home
        </button>

        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p className="portfolio-intro">{data.intro}</p>
        <p className="portfolio-note">{data.note}</p>
      </section>

      <section className="portfolio-grid">
        {data.projects.map((project, index) => (
          <article
            className="portfolio-card"
            key={`${project.title}-${index}`}
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

function HomePage() {
  const [formStatus, setFormStatus] = useState('idle')
const handleEnquirySubmit = async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  formData.set('form-name', 'enquiry')

  setFormStatus('submitting')

  try {
    const response = await fetch(
      'https://bespoke-moment-website.netlify.app/',
      {
        method: 'POST',
        body: formData,
      }
    )

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
              Custom engagement rings, wedding bands and fine jewellery, created with trusted manufacturers in Guangzhou & Shenzhen, with personalised service across Australia & New Zealand.
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
            Bespoke Moment connects you directly with trusted jewellery manufacturers in Guangzhou and Shenzhen,
            allowing us to create beautifully made custom pieces with a more personal approach.
          </p>
          <a href="#process" className="text-link">
            Discover our process →
          </a>
        </section>

        <section
          className="homepage-gallery"
          aria-label="Bespoke Moment jewellery inspiration"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            padding: '0 6vw 80px'
          }}
        >
          <div
            style={{
              flex: '1 1 360px',
              minHeight: '420px',
              overflow: 'hidden'
            }}
          >
            <img
              src={homepageImages.collection.image}
              alt={homepageImages.collection.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              loading="lazy"
            />
          </div>

          <div
            style={{
              flex: '1 1 360px',
              minHeight: '420px',
              overflow: 'hidden'
            }}
          >
            <img
              src={homepageImages.diamonds.image}
              alt={homepageImages.diamonds.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              loading="lazy"
            />
          </div>
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
              <p className="eyebrow">CUSTOM JEWELLERY</p>
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
              <p className="eyebrow">FOR TWO</p>
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
              <p className="eyebrow">SPECIAL MOMENTS</p>
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

       <section
  className="cta enquiry-section"
  id="contact"
>
  <div className="enquiry-heading">
    <p className="eyebrow">
      YOUR IDEA. YOUR JEWELLERY.
    </p>

    <h2>
      Ready to create<br />
      something personal?
    </h2>

    <p>
      Tell us what you're looking for and we'll prepare a personalised quote
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
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-field">
      <label htmlFor="budget">Estimated budget <span>(optional)</span></label>
      <input
        id="budget"
        name="budget"
        type="text"
        placeholder="e.g. AUD $3,000–5,000"
      />
    </div>

    <div className="form-field">
      <label htmlFor="message">Tell us about your idea <span>(optional)</span></label>
      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="Share your preferred style, stone, metal, size or anything else you'd like us to know."
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
    Upload one image or PDF with your inspiration or reference design.
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
        Something went wrong while sending your enquiry. Please try again or email us directly.
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
      </main>
    </>
  )
}

function App() {
  const [page, setPage] = useState(getPageFromHash())

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

  return (
    <div className="site">
      <div className="announcement">
        Custom jewellery • Crafted with trusted manufacturers in Guangzhou & Shenzhen • Service focused in Australia & New Zealand
      </div>

      <header className="header">
        <a href="#" className="logo">
          BESPOKE MOMENT
        </a>

        <nav className="nav">
          <a href="#portfolio-engagement">ENGAGEMENT RINGS</a>
          <a href="#portfolio-wedding">WEDDING BANDS</a>
          <a href="#portfolio-jewellery">GIFT JEWELLERY</a>
          <a
            href={page === 'home' ? '#process' : '#'}
            onClick={page !== 'home' ? goHome : undefined}
          >
            HOW IT WORKS
          </a>
          <a
            href={page === 'home' ? '#about' : '#'}
            onClick={page !== 'home' ? goHome : undefined}
          >
            ABOUT US
          </a>
        </nav>

        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {page === 'home' && <HomePage />}

      {page !== 'home' && (
        <PortfolioPage
          type={page}
          onHome={goHome}
        />
      )}

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">BESPOKE MOMENT</div>
          <p>
            Custom Diamond Rings Without Retail Markup.<br />
            Craftsmanship based in China.<br />
            Service focused in Australia & New Zealand.
          </p>
        </div>

        <div className="footer-column">
          <h4>SHOP</h4>
          <a href="#portfolio-engagement">Engagement Rings</a>
          <a href="#portfolio-wedding">Wedding Bands</a>
          <a href="#portfolio-jewellery">Gift Jewellery</a>
        </div>

        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="#process" onClick={page !== 'home' ? goHome : undefined}>How It Works</a>
          <a href="#about" onClick={page !== 'home' ? goHome : undefined}>Why Bespoke Moment</a>
          <a href="#contact" onClick={page !== 'home' ? goHome : undefined}>Contact</a>
        </div>

        <div className="footer-column">
          <h4>FOLLOW</h4>
          <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
          <a href="#" onClick={(e) => e.preventDefault()}>TikTok</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Pinterest</a>
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