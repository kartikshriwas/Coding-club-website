export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GDG PRMITR - Google Developer Group",
    "alternateName": [
      "GDG PRMIT&R",
      "GDG Mitra",
      "Google Developer Group PRMITR",
      "PRMITR Coding Club",
      "Mitra Coding Club"
    ],
    "url": "https://gdg.is-local.org",
    "logo": "https://gdg.is-local.org/logo/logo-gdg.png",
    "description": "Google Developer Group (GDG) at Prof. Ram Meghe Institute of Technology and Research (PRMITR), Badnera, Amravati. Official coding club organizing workshops, hackathons, and tech events.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prof. Ram Meghe Institute of Technology and Research",
      "addressLocality": "Badnera",
      "addressRegion": "Maharashtra",
      "postalCode": "444701",
      "addressCountry": "IN"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Prof. Ram Meghe Institute of Technology and Research",
      "alternateName": ["PRMITR", "PRMIT&R", "MITRA"],
      "url": "https://mitra.ac.in"
    },
    "sameAs": [
      "https://gdg.community.dev/gdg-on-campus-prof-ram-meghe-institute-of-technology-research-amravati-india/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GDG PRMITR",
    "url": "https://gdg.is-local.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gdg.is-local.org/events?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gdg.is-local.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://gdg.is-local.org/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Events",
        "item": "https://gdg.is-local.org/events"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
