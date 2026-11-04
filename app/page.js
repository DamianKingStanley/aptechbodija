import Landing from "../Landing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aptechbodija.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Aptech Bodija",
      url: siteUrl,
      logo: `${siteUrl}/images/aptech-logo.webp`,
      description: "Practical technology and computer training in Bodija, Ibadan, Nigeria.",
      address: { "@type": "PostalAddress", addressLocality: "Ibadan", addressRegion: "Oyo State", addressCountry: "NG" },
      areaServed: { "@type": "City", name: "Ibadan" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aptech Bodija",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
    {
      "@type": "ItemList",
      name: "Technology courses at Aptech Bodija",
      itemListElement: [
        "Web Development", "Cybersecurity", "Data Science", "Mobile App Development", "UI/UX Design",
        "Cloud and Networking", "Office Automation", "Digital Marketing", "Digital Forensic", "Responsive Web Development",
      ].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })),
    },
  ],
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Landing /></>;
}
