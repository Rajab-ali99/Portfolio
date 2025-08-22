import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';
const Contact = () => {
   const url = "https://portfolio-e4q6.onrender.com/Contact";
  const title = "Contact Rajab Ali – MERN Stack Developer for Web Development Projects";
  const description = "Get in touch with Rajab Ali, a skilled MERN Stack Developer, to discuss full-stack web development projects, collaborations, or freelance opportunities.";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajab Ali",
    "jobTitle": "MERN Stack Developer",
    "url": url,
    "sameAs": [
      "https://github.com/Rajab-ali99",
      "https://www.linkedin.com/in/rajab-ali-636524375",
      "https://www.upwork.com/freelancers/~01bf3c34879bc12ce2",
      "https://www.fiverr.com/sellers/rajabali10005"
    ]
  };
  return (
    <>
    <Helmet>
    
          <title>{title}</title>
            <meta name="description" content={description} />
    
            {/* Canonical URL */}
            <link rel="canonical" href={url} />
    
            {/* Open Graph (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="https://portfolio-e4q6.onrender.com/img.png" />
    
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://portfolio-e4q6.onrender.com/img.png" />
    
            {/* Structured data */}
            <script type="application/ld+json">
              {JSON.stringify(personJsonLd)}
            </script>
           </Helmet>
    <div className='contact my-12'>
      <Form/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
