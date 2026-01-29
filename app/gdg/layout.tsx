import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDG Team - Google Developer Group PRMITR',
  description: 'Meet the GDG PRMITR team - organizers and core members of Google Developer Group at Prof. Ram Meghe Institute of Technology and Research, Amravati.',
  keywords: ['GDG PRMITR Team', 'GDG Organizers', 'PRMITR GDG Members', 'Google Developer Group Team', 'GDG Amravati Team', 'PRMIT&R GDG', 'Mitra GDG Team'],
  openGraph: {
    title: 'GDG Team - Google Developer Group PRMITR',
    description: 'Meet the talented team behind GDG PRMITR - leading tech innovation at Prof. Ram Meghe Institute.',
    url: 'https://codingclub.is-local.org/gdg',
  },
};

export default function GDGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
