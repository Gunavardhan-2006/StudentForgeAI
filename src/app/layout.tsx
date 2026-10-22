import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-text-primary font-sans antialiased min-h-screen selection:bg-primary selection:text-white transition-colors duration-250 ease-in-out">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          themes={['light', 'dark', 'student-blue']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
