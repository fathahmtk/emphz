import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface PageMetaProps {
  title: string;
  description: string;
}

export const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => {
  const fullTitle = `${title} | ${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};