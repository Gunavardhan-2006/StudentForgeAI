import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudentForge AI — Production-Grade Engineering Syllabus Engine',
  description: 'Map academic syllabus subjects directly to 2026 industry-grade production project blueprints with async Python, PostgreSQL connection pooling, Redis buffers, and Docker orchestration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ghost font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
