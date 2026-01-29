import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - GDG PRMITR',
  description: 'View photos and highlights from GDG PRMITR events at Prof. Ram Meghe Institute of Technology and Research, Badnera, Amravati. See our workshops, hackathons, and community activities.',
  keywords: ['GDG PRMITR Gallery', 'PRMITR Event Photos', 'GDG Amravati Gallery', 'Coding Club Photos', 'Tech Events Photos PRMITR', 'PRMIT&R Gallery', 'Mitra Gallery'],
  openGraph: {
    title: 'Gallery - GDG PRMITR',
    description: 'View photos and highlights from GDG PRMITR events and activities.',
    url: 'https://gdg.is-local.org/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
