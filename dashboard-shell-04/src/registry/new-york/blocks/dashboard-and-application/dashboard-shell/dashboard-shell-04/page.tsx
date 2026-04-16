import {
  BookMarkedIcon,
  BoxIcon,
  ChartColumnStackedIcon,
  ChartPieIcon,
  CreditCardIcon,
  DollarSignIcon,
  EllipsisIcon,
  FacebookIcon,
  FileTextIcon,
  GithubIcon,
  HeartIcon,
  HomeIcon,
  InstagramIcon,
  MenuIcon,
  ShoppingCartIcon,
  TicketCheckIcon,
  TwitterIcon,
  UsersIcon,
  WalletIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import LogoSvg from '@/assets/svg/logo'
import FavoritesDropdown from '@/components/shadcn-studio/blocks/dropdown-favorites'
import CartDropdown from '@/components/shadcn-studio/blocks/dropdown-cart'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuSheet from '@/components/shadcn-studio/blocks/menu-sheet'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-sheet'
import StatisticsCard, { type StatisticsCardProps } from '@/components/shadcn-studio/blocks/statistics-card-03'
import EarningInsightsCard from '@/components/shadcn-studio/blocks/chart-earning-insights'
import UserOrderCard from '@/components/shadcn-studio/blocks/widget-user-order'
import OrdersCard from '@/components/shadcn-studio/blocks/widget-orders'
import PopularProductCard from '@/components/shadcn-studio/blocks/widget-popular-product'
import ProductDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-product'

import { cn } from '@/lib/utils'

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

// Statistics card data
const StatisticsCardData: StatisticsCardProps[] = [
  {
    icon: <TicketCheckIcon />,
    title: 'Total Sales',
    value: '$13.4k',
    trend: 'up',
    changePercentage: '+38%',
    badgeContent: 'Last 6 months'
  },
  {
    icon: <ShoppingCartIcon />,
    title: 'Total Orders',
    value: '155K',
    trend: 'up',
    changePercentage: '+22%',
    badgeContent: 'Last 4 months'
  },
  {
    icon: <DollarSignIcon />,
    title: 'Total Profit',
    value: '$89.34k',
    trend: 'down',
    changePercentage: '-16%',
    badgeContent: 'Last One year'
  },
  {
    icon: <BookMarkedIcon />,
    title: 'Bookmarks',
    value: '$1,200',
    trend: 'up',
    changePercentage: '+38%',
    badgeContent: 'Last 6 months'
  }
]

// Chart data
const earningReportChartData = [
  { day: 'Monday', earning: 80, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Tuesday', earning: 126, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Wednesday', earning: 105, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Thursday', earning: 180, fill: 'var(--primary)' },
  { day: 'Friday', earning: 123, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Saturday', earning: 131, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Sunday', earning: 143, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' }
]

// Stat data
const statData = [
  {
    icon: <WalletIcon />,
    title: 'Earning',
    amount: '$1,236',
    progress: 50
  },
  {
    icon: <DollarSignIcon />,
    title: 'Profit',
    amount: '$2,300',
    progress: 75
  },
  {
    icon: <CreditCardIcon />,
    title: 'Expense',
    amount: '$1,500',
    progress: 75
  }
]

// Popular products data
const Products = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 1.png',
    productName: 'Nike Vision Low Shoes',
    price: '$5,600',
    visits: '10.6K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 2.png',
    productName: 'Adidas Ultraboost 21',
    price: '$4,500',
    visits: '4.5K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 3.png',
    productName: 'Puma RS-X Toys',
    price: '$3,200',
    visits: '2K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 4.png',
    productName: 'New Balance 550',
    price: '$2,800',
    visits: '1.8K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 5.png',
    productName: 'Reebok Classic Leather',
    price: '$2,200',
    visits: '1.2K'
  }
]

const productData: Item[] = [
  {
    id: '1',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-3.png',
    product: 'Samsung galaxy s35',
    brand: 'Samsung',
    category: 'smartphone',
    stock: 'available',
    amount: 312,
    quantity: 45,
    status: 'publish'
  },
  {
    id: '2',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Apple MacBook Pro',
    brand: 'Apple',
    category: 'laptop',
    stock: 'unavailable',
    amount: 890,
    quantity: 634,
    status: 'publish'
  },
  {
    id: '3',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-5.png',
    product: 'Sony WH-1000XM4',
    brand: 'Sony',
    category: 'headphone',
    stock: 'available',
    amount: 120,
    quantity: 456,
    status: 'inactive'
  },
  {
    id: '4',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-6.png',
    product: 'Dell XPS 13',
    brand: 'Dell',
    category: 'laptop',
    stock: 'unavailable',
    amount: 112,
    quantity: 4,
    status: 'publish'
  },
  {
    id: '5',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-7.png',
    product: 'Smart band 4',
    brand: 'Xiaomi',
    category: 'smartwatch',
    stock: 'unavailable',
    amount: 150,
    quantity: 45,
    status: 'inactive'
  },
  {
    id: '6',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Sony PlayStation 5',
    brand: 'Sony',
    category: 'controller',
    stock: 'available',
    amount: 520,
    quantity: 56,
    status: 'publish'
  },
  {
    id: '7',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-9.png',
    product: 'OnePlus 15 Pro',
    brand: 'OnePlus',
    category: 'smartphone',
    stock: 'available',
    amount: 1200,
    quantity: 89,
    status: 'publish'
  },
  {
    id: '8',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-10.png',
    product: 'Apple magic mouse',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 980,
    quantity: 23,
    status: 'scheduled'
  },
  {
    id: '9',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-11.png',
    product: 'Wooden Chair',
    brand: 'Ikea',
    category: 'furniture',
    stock: 'unavailable',
    amount: 280,
    quantity: 67,
    status: 'publish'
  },
  {
    id: '10',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-12.png',
    product: 'Nike Jordan 1',
    brand: 'Nike',
    category: 'fashion',
    stock: 'available',
    amount: 450,
    quantity: 134,
    status: 'publish'
  },
  {
    id: '11',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-13.png',
    product: 'Nintendo Switch Pro',
    brand: 'Nintendo',
    category: 'controller',
    stock: 'available',
    amount: 499,
    quantity: 78,
    status: 'publish'
  },
  {
    id: '12',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-14.png',
    product: 'Apple Watch 2',
    brand: 'Apple',
    category: 'smartwatch',
    stock: 'unavailable',
    amount: 699,
    quantity: 45,
    status: 'inactive'
  },
  {
    id: '13',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-15.png',
    product: 'Samsung Note 10 Pro',
    brand: 'Samsung',
    category: 'smartphone',
    stock: 'available',
    amount: 1150,
    quantity: 12,
    status: 'scheduled'
  },
  {
    id: '14',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-16.png',
    product: 'Ray Ban Aviator',
    brand: 'Ray Ban',
    category: 'fashion',
    stock: 'available',
    amount: 249,
    quantity: 203,
    status: 'publish'
  },
  {
    id: '15',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Macbook Air M2',
    brand: 'Apple',
    category: 'laptop',
    stock: 'unavailable',
    amount: 349,
    quantity: 156,
    status: 'inactive'
  },
  {
    id: '16',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-6.png',
    product: 'Samsung Book 6',
    brand: 'Samsung',
    category: 'laptop',
    stock: 'available',
    amount: 329,
    quantity: 87,
    status: 'publish'
  },
  {
    id: '17',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-10.png',
    product: 'Apple Magic Mouse 2',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 799,
    quantity: 67,
    status: 'publish'
  },
  {
    id: '18',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-16.png',
    product: 'Ray Ban EyeCat',
    brand: 'Ray Ban',
    category: 'fashion',
    stock: 'available',
    amount: 1399,
    quantity: 34,
    status: 'scheduled'
  },
  {
    id: '19',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Xbox Series X',
    brand: 'Microsoft',
    category: 'controller',
    stock: 'unavailable',
    amount: 499,
    quantity: 28,
    status: 'inactive'
  },
  {
    id: '20',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Macbook Pro M4',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 699,
    quantity: 19,
    status: 'publish'
  },
  {
    id: '21',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Play Station 4',
    brand: 'Sony',
    category: 'controller',
    stock: 'available',
    amount: 649,
    quantity: 89,
    status: 'scheduled'
  },
  {
    id: '22',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-15.png',
    product: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphone',
    stock: 'unavailable',
    amount: 899,
    quantity: 43,
    status: 'inactive'
  },
  {
    id: '23',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-11.png',
    product: 'Rocking Chair',
    brand: 'Ikea',
    category: 'furniture',
    stock: 'available',
    amount: 1299,
    quantity: 76,
    status: 'publish'
  },
  {
    id: '24',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-12.png',
    product: 'Nike Air Max',
    brand: 'Nike',
    category: 'fashion',
    stock: 'available',
    amount: 149,
    quantity: 234,
    status: 'publish'
  },
  {
    id: '25',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-7.png',
    product: 'Fitbit Versa 4',
    brand: 'Fitbit',
    category: 'smartwatch',
    stock: 'available',
    amount: 199,
    quantity: 167,
    status: 'scheduled'
  }
]

const DashboardShell = () => {
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
          <Card>
            <CardContent className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-6'>
              {/* Statistics cards */}
              <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:col-span-2'>
                {StatisticsCardData.map((card, index) => (
                  <StatisticsCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    trend={card.trend}
                    changePercentage={card.changePercentage}
                    badgeContent={card.badgeContent}
                  />
                ))}
              </div>

              {/* Earning insights chart */}
              <EarningInsightsCard
                title='Earning insights'
                subTitle='Weekly Earning overview'
                totalEarning='$4.6K'
                trend='up'
                changePercentage={10}
                description="Earning of this week compared to last week. it's increasing keep it up."
                chartData={earningReportChartData}
                statData={statData}
                className='col-span-full lg:max-xl:-order-1 xl:col-span-4'
              />

              {/* Seller orders */}
              <UserOrderCard className='xl:col-span-2' />

              {/* Orders */}
              <OrdersCard className='xl:col-span-2' />

              {/* Popular products */}
              <PopularProductCard
                title='Popular product'
                subTitle='Total 10.4K visitors'
                productsData={Products}
                className='xl:col-span-2'
              />

              {/* Product datatable */}
              <Card className='col-span-full py-0'>
                <ProductDatatable data={productData} />
              </Card>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer>
        <div className='mx-auto flex size-full max-w-384 items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6'>
          <p className='text-muted-foreground text-center text-sm text-balance'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary'>
              Shadcn/studio
            </a>
          </p>
          <div className='text-muted-foreground *:hover:text-primary flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm whitespace-nowrap'>
            <a href='#'>All Products</a>
            <a href='#'>Countries</a>
            <a href='#'>License</a>
            <a href='#'>FAQ</a>
            <a href='#'>Support</a>
          </div>
          <div className='text-muted-foreground *:hover:text-primary flex items-center gap-5'>
            <a href='#'>
              <FacebookIcon className='size-4' />
            </a>
            <a href='#'>
              <InstagramIcon className='size-4' />
            </a>
            <a href='#'>
              <GithubIcon className='size-4' />
            </a>
            <a href='#'>
              <TwitterIcon className='size-4' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardShell
