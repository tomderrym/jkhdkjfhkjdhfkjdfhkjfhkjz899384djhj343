import {
  BoxIcon,
  ChartColumnStackedIcon,
  ChartPieIcon,
  EllipsisIcon,
  FileTextIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  ShoppingCartIcon,
  UsersIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'

import LogoSvg from '@/assets/svg/logo'
import FavoritesDropdown from '@/components/shadcn-studio/blocks/dropdown-favorites'
import CartDropdown from '@/components/shadcn-studio/blocks/dropdown-cart'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuSheet from '@/components/shadcn-studio/blocks/menu-sheet'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-sheet'

const navigationData: NavigationSection[] = [
  {
    title: 'Dashboard',
    icon: <ChartColumnStackedIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Products',
    icon: <BoxIcon className='text-foreground size-4 shrink-0' />,
    items: [
      {
        title: 'All Products',
        href: '#'
      },
      {
        title: 'New Product',
        href: '#'
      },
      {
        title: 'Categories',
        href: '#'
      },
      {
        title: 'Inventory',
        href: '#'
      },
      {
        title: 'Tags',
        href: '#'
      },
      {
        title: 'Product Settings',
        href: '#'
      }
    ]
  },
  {
    title: 'Orders',
    icon: <FileTextIcon className='text-foreground size-4 shrink-0' />,
    items: [
      {
        title: 'All Orders',
        href: '#'
      },
      {
        title: 'Pending Orders',
        href: '#'
      },
      {
        title: 'Completed Orders',
        href: '#'
      },
      {
        title: 'Cancelled Orders',
        href: '#'
      },
      {
        title: 'Order Settings',
        href: '#'
      }
    ]
  },
  {
    title: 'Customers',
    icon: <UsersIcon className='text-foreground size-4 shrink-0' />,
    items: [
      {
        title: 'Customers List',
        href: '#'
      },
      {
        title: 'Segments',
        href: '#'
      },
      {
        title: 'Loyalty Program',
        href: '#'
      },
      {
        title: 'Customer Feedback',
        href: '#'
      },
      {
        title: 'Customer Settings',
        href: '#'
      }
    ]
  },
  {
    title: 'More',
    icon: <EllipsisIcon className='text-foreground size-4 shrink-0' />,
    items: [
      {
        title: 'Reviews',
        href: '#'
      },
      {
        title: 'Referrals',
        href: '#'
      },
      {
        title: 'Settings',
        href: '#'
      }
    ]
  }
]

const favoritesData = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-8.png',
    title: 'Black T-Shirt',
    subtitle: 'Liverpool FC',
    price: '$149',
    oldPrice: '$199'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-7.png',
    title: 'Shoes',
    subtitle: 'Nike',
    price: '$329',
    oldPrice: '$399'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-6.png',
    title: 'Watch 9',
    subtitle: 'Apple',
    price: '$499',
    oldPrice: '$599'
  }
]

const cartData = [
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-1.png',
    companyName: 'Nike',
    freeShipping: true,
    discount: 15,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-2.png',
    productName: 'Regular Fit Jacket',
    oldPrice: 129,
    price: 99,
    color: 'Black',
    size: 'M',
    rating: 4.5,
    quantity: 1
  },
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-4.png',
    companyName: 'Ferrari',
    freeShipping: true,
    discount: 5,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-5.png',
    productName: 'Ferrari Motorsport Cap',
    oldPrice: 70,
    price: 59,
    color: 'Red',
    size: 'S',
    rating: 4.5,
    quantity: 1
  }
]

const Header = () => {
  return (
    <div className='bg-muted flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='mx-auto flex max-w-384 items-center justify-between gap-6 px-4 py-3 sm:px-6'>
          <div className='flex items-center gap-4'>
            <MenuSheet
              logoName='eCommerce'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='inline-flex xl:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
            <a href='#'>
              <div className='flex items-center'>
                <LogoSvg className='size-8.5' />
                <span className='ml-2.5 hidden text-xl font-semibold sm:block'>eCommerce</span>
              </div>
            </a>
          </div>
          <NavigationMenu viewport={false} className='hidden max-w-full xl:block'>
            <NavigationMenuList className='flex-wrap justify-start'>
              {navigationData.map(navItem => {
                if (navItem.href) {
                  // Root link item
                  return (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink
                        href={navItem.href}
                        className={cn(navigationMenuTriggerStyle(), 'flex flex-row items-center gap-1.5')}
                      >
                        {navItem.icon}
                        {navItem.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }

                // Section with dropdown
                return (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuTrigger className='gap-1.5'>
                      {navItem.icon}
                      {navItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='data-[motion=from-start]:slide-in-from-left-30! data-[motion=to-start]:slide-out-to-left-30! data-[motion=from-end]:slide-in-from-right-30! data-[motion=to-end]:slide-out-to-right-30! absolute w-auto'>
                      <ul className='grid w-38 gap-4'>
                        <li>
                          {navItem.items?.map(item => (
                            <NavigationMenuLink key={item.title} href={item.href}>
                              {item.title}
                            </NavigationMenuLink>
                          ))}
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className='flex items-center gap-1.5'>
            <FavoritesDropdown
              data={favoritesData}
              trigger={
                <Button variant='ghost' size='icon'>
                  <HeartIcon />
                </Button>
              }
            />
            <CartDropdown
              data={cartData}
              trigger={
                <Button variant='ghost' size='icon'>
                  <ShoppingCartIcon />
                </Button>
              }
            />
            <ProfileDropdown
              trigger={
                <Button variant='ghost' className='h-full p-0'>
                  <Avatar className='size-9.5 rounded-md'>
                    <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              }
            />
          </div>
        </div>
      </header>
      <main className='before:bg-primary relative z-1 size-full flex-1 before:absolute before:inset-x-0 before:top-0 before:-z-1 before:h-105'>
        <div className='mx-auto size-full max-w-384 px-4 pb-6 sm:px-6'>
          <div className='text-primary-foreground border-b-primary-foreground/20 border-b py-4'>
            <Breadcrumb className='overflow-x-auto'>
              <BreadcrumbList className='flex-nowrap text-inherit *:whitespace-nowrap'>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#' className='hover:text-primary-foreground'>
                    <HomeIcon className='size-4.5' />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#' className='hover:text-primary-foreground'>
                    Dashboards
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-inherit'>eCommerce</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='text-primary-foreground flex justify-between gap-6 py-6 max-sm:flex-col'>
            <div className='flex items-center gap-2'>
              <Avatar className='size-9.5 rounded-md'>
                <AvatarFallback className='bg-primary-foreground text-primary rounded-md'>
                  <ChartPieIcon className='size-5' />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col items-start'>
                <p className='font-medium'>eCommerce Dashboard</p>
                <p className='text-sm'>Earning reports</p>
              </div>
            </div>
            <div className='flex items-center max-sm:justify-between sm:gap-10'>
              <div className='flex flex-col items-center'>
                <p className='font-medium'>$23k</p>
                <p className='text-sm'>Sales</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-medium'>8.51k</p>
                <p className='text-sm'>Customers</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-medium'>2.5k</p>
                <p className='text-sm'>Products</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-medium'>1.2k</p>
                <p className='text-sm'>Revenue</p>
              </div>
            </div>
          </div>
          <Card className='h-250'>
            <CardContent className='h-full'>
              <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className='bg-card h-10 border-t'>
        <div className='mx-auto size-full max-w-384 px-4 sm:px-6'>
          <div className='border-card-foreground/10 h-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
        </div>
      </footer>
    </div>
  )
}

export default Header
