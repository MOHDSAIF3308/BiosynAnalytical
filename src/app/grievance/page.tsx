// src/app/grievance/page.tsx

import type { Metadata } from 'next';
import GrievanceForm from '@/components/GrievanceForm';

export const metadata: Metadata = {
  title: 'Grievance Form | Biosyn Analytical',
  description: 'Submit a complaint or concern about Biosyn Analytical services. Our quality team responds within 2 business days.',
};

export default function GrievancePage() {
  return (
    <main>
      <GrievanceForm />
    </main>
  );
}