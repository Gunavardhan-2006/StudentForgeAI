'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Sparkles, Laptop, ChevronDown, Check } from 'lucide-react';

interface ThemeToggleProps {
  showMenu?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showMenu = true, className = '' }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch by only rendering theme-specific UI after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-card border border-border animate-pulse ${className}`} />
    );
  }

  const currentTheme = theme || 'light';
  const isDark = resolvedTheme === 'dark';
  const isStudentBlue = currentTheme === 'student-blue';

  const cycleTheme = () => {
    if (currentTheme === 'light') setTheme('dark');
    else if (currentTheme === 'dark') setTheme('student-blue');
    else setTheme('light');
  };

  const THEME_OPTIONS = [
    {
      id: 'light',
      label: 'Light Mode',
      icon: Sun,
      color: 'text-amber-500',
      badge: '🌞 Default',
    },
    {
      id: 'dark',
      label: 'Dark Mode',
      icon: Moon,
      color: 'text-indigo-400',
      badge: '🌙 Coding',
    },
    {
      id: 'student-blue',
      label: 'Student Blue',
      icon: Sparkles,
      color: 'text-cyan-400',
      badge: '🎓 Exclusive',
    },
    {
      id: 'system',
      label: 'System Preference',
      icon: Laptop,
      color: 'text-muted',
      badge: '💻 Auto',
    },
  ];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      
      {/* Primary Toggle Button with animated icon rotation */}
      <div className="flex items-center rounded-xl bg-card border border-border hover:border-primary/40 shadow-sm transition-all group">
        <button
          type="button"
          onClick={cycleTheme}
          aria-label={`Toggle theme (Current: ${currentTheme})`}
          title={`Click to cycle theme (Current: ${currentTheme})`}
          className="p-2 sm:px-2.5 sm:py-2 flex items-center space-x-1.5 text-xs font-mono font-medium text-text-primary hover:text-primary transition-all cursor-pointer"
        >
          <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-45">
            {isStudentBlue ? (
              <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
            ) : isDark ? (
              <Moon className="w-4 h-4 text-indigo-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </div>
          <span className="hidden sm:inline font-semibold text-[11px] capitalize">
            {currentTheme === 'student-blue' ? 'Student Blue' : currentTheme}
          </span>
        </button>

        {/* Dropdown Chevron for explicit theme picking */}
        {showMenu && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open theme options menu"
            className="p-1.5 pr-2 text-muted hover:text-text-primary border-l border-border/60 transition-colors cursor-pointer"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {/* Dropdown Menu */}
      {showMenu && isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl bg-card border border-border shadow-2xl p-1.5 z-50 animate-fadeIn backdrop-blur-md">
          <div className="px-2.5 py-1 text-[11px] font-mono font-semibold text-text-muted border-b border-border/60 mb-1">
            Choose Theme
          </div>

          <div className="space-y-0.5">
            {THEME_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isSelected = currentTheme === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-text-primary hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 ${opt.color}`} />
                    <span>{opt.label}</span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-text-muted font-mono">{opt.badge}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
