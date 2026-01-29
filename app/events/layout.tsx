import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - GDG PRMITR',
  description: 'Explore upcoming and past events by GDG PRMITR - workshops, hackathons, tech talks, and more at Prof. Ram Meghe Institute of Technology and Research, Amravati.',
  keywords: ['GDG PRMITR Events', 'PRMITR Tech Events', 'GDG Amravati Events', 'Coding Club Events', 'Hackathons PRMITR', 'Tech Workshops Amravati', 'PRMIT&R Events', 'Mitra Events'],
  openGraph: {
    title: 'Events - GDG PRMITR',
    description: 'Join us for exciting tech events, workshops, and hackathons at GDG PRMITR, Amravati.',
    url: 'https://gdg.is-local.org/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
