/**
 * Shadcn Block: dashboard-footer-06
 * A comprehensive dashboard footer with logo, navigation links, social media icons, and primary colored background for professional applications.
 * 
 * Auto-extracted from: src/components/layout/logo.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: card, sidebar, utils
 */

// SVG Imports
// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
// Util Imports
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoSvg className='size-8.5' />
      <span className='text-xl font-semibold'>shadcn/studio</span>
    </div>
  )
}

export default Logo
