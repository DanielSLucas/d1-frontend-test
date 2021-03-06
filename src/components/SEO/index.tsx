import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  shouldExludeTitleSuffix?: boolean;
  shoulIndexPage?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  shouldExludeTitleSuffix = false,
  shoulIndexPage = true,
}) => {
  const pageTitle = `${title} ${!shouldExludeTitleSuffix ? '| D1' : ''}`;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}

      {!shoulIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="image" content="brand.png" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="theme-color" content="#1A1731" />
      <meta name="msapplication-TileColor" content="#1A1731" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" itemProp="image" content="brand.png" />
      <meta property="og:image:secure_url" content="brand.png" />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO;
