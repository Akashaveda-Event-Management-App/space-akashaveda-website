import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_TITLE = 'Akashaveda | AI-Powered Satellite Mission Operations & Space Technology';
const DEFAULT_DESCRIPTION =
  'Akashaveda revolutionizes satellite operations with cutting-edge AI automation. Autonomous mission control, real-time anomaly detection, and intelligent telemetry processing for the next generation of space missions.';
const DEFAULT_KEYWORDS =
  'satellite operations, AI satellite, mission control, space technology, satellite automation, telemetry processing, anomaly detection, space missions, LEO satellites, satellite constellation management, Akashaveda, space tech India, VYUH-MCS, CHAKRA-SSA, AOCS algorithms, ground station design';
const DEFAULT_OG_IMAGE = 'https://akashaveda.com/og-image.jpg';
const SITE_URL = 'https://akashaveda.com';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title
      ? `${title} | Akashaveda`
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical URL
    const canonicalUrl = canonical
      ? canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;
    setLinkTag('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:alt', fullTitle);
    setMetaTag('property', 'og:site_name', 'Akashaveda');
    setMetaTag('property', 'og:locale', 'en_US');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:site', '@akashaveda');
    setMetaTag('name', 'twitter:creator', '@akashaveda');

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Cleanup dynamic JSON-LD on route leave
      const cleanupScript = document.getElementById(scriptId);
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, noindex, structuredData]);

  return null;
}
