import { MenuIcon, ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Logo from '@/components/shadcn-studio/logo'
import CartDropdown from '@/components/shadcn-studio/blocks/dropdown-cart'

type NavigationItem = {
  title: string
  href: string
}[]

type CartData = {
  companySrc: string
  companyName: string
  freeShipping: boolean
  discount: number
  productSrc: string
  productName: string
  oldPrice: number
  price: number
  color: string
  size: string
  rating: number
  quantity: number
}[]

const Navbar = ({ navigationData, cartData }: { navigationData: NavigationItem; cartData: CartData }) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
        <div className='text-muted-foreground flex items-center gap-6 font-medium max-lg:hidden'>
          {navigationData.map((item, index) => (
            <a key={index} href={item.href} className='hover:text-primary'>
              {item.title}
            </a>
          ))}
        </div>

        <a href='#'>
          <Logo className='gap-3' />
        </a>

        <div className='flex items-center gap-4'>
          <a href='#' className='font-medium max-sm:hidden'>
            Sign in
          </a>

          <a href='#' className='font-medium max-sm:hidden'>
            Sign up
          </a>

          <CartDropdown
            data={cartData}
            trigger={
              <Button size='icon'>
                <ShoppingCartIcon />
              </Button>
            }
          />

          <DropdownMenu>
            <DropdownMenuTrigger className='lg:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className='sm:hidden' />
                <DropdownMenuItem className='!bg-transparent sm:hidden'>
                  <Button className='grow' asChild>
                    <a href='#'>Sign in</a>
                  </Button>
                  <Button className='grow' asChild>
                    <a href='#'>Sign up</a>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
