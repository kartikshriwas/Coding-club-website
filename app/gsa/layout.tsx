import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSA Team - Google Student Ambassadors PRMITR',
  description: 'Meet the GSA PRMITR team - Google Student Ambassadors at Prof. Ram Meghe Institute of Technology and Research, Badnera, Amravati.',
  keywords: ['GSA PRMITR', 'Google Student Ambassadors PRMITR', 'GSA Team', 'PRMITR GSA', 'Student Ambassadors Amravati', 'PRMIT&R GSA', 'Mitra GSA'],
  openGraph: {
    title: 'GSA Team - Google Student Ambassadors PRMITR',
    description: 'Meet the GSA PRMITR team - Google Student Ambassadors leading AI and tech initiatives.',
    url: 'https://gdg.is-local.org/gsa',
  },
};

export default function GSALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
