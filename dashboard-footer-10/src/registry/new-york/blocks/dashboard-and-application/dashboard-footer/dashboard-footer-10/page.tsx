import { Card, CardContent } from '@/components/ui/card'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar collapsible='icon'>
          <div className='border-sidebar-foreground/10 m-6 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sidebar-foreground)10%,transparent),color-mix(in_oklab,var(--sidebar-foreground)10%,transparent)_1px,var(--sidebar)_2px,var(--sidebar)_15px)]' />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 flex h-13.75 items-center justify-between gap-6 border-b px-4 py-2 sm:px-6'>
            <SidebarTrigger className='[&_svg]:!size-5' />
          </header>
          <main className='size-full flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer className='flex items-center justify-center gap-3 px-4 py-3 text-sm whitespace-nowrap max-lg:flex-col sm:px-6 lg:gap-6'>
            <a href='#'>Pricing</a>
            <a href='#'>Terms & Conditions</a>
            <a href='#' className='max-md:-order-1'>
              <Logo className='[&_line]:stroke-background [&_path]:stroke-background dark:[&_rect]:fill-primary [&_rect]:fill-primary' />
            </a>
            <a href='#'>Cookies</a>
            <a href='#'>Contact</a>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Footer
