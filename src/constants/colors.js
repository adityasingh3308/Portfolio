export const COLORS = {
  primary: {
    50: '#f8fafc',
    900: '#0F172A',
  },
  secondary: {
    900: '#111827',
  },
  accent: {
    400: '#60A5FA',
    500: '#3B82F6',
  },
  text: {
    primary: '#F8FAFC',
    muted: '#94A3B8',
    secondary: '#94A3B8',
  },
  background: '#0F172A',
  border: '#1E293B',
};

export const GRADIENTS = {
  accentGradient: 'from-accent-400 to-accent-500',
  textGradient: 'from-accent-400 to-accent-500',
  bgGradient: 'from-primary-900 via-secondary-900 to-primary-900',
};

export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    base: 0.5,
    slow: 0.8,
  },
  timing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
};
