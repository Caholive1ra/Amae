import { Helmet } from 'react-helmet-async';
import { SEOMetadata } from '@/types';

interface SEOProps extends SEOMetadata {
  children?: React.ReactNode;
}

const SEO = ({ 
  title, 
  description, 
  image = '/og-image.jpg', 
  url = 'https://amae.lovable.app',
  type = 'website',
  children 
}: SEOProps) => {
  const fullTitle = `${title} | Amaé`;
  const fullUrl = url.startsWith('http') ? url : `https://amae.lovable.app${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <link rel="canonical" href={fullUrl} />
      
      {children}
    </Helmet>
  );
};

export default SEO;
