import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About — Biosyn Analytical',
  description: 'About Biosyn Analytical, its founders, experience, values, and mission.',
};

export default function AboutPage() {
  return <AboutContent />;
}