import type { ComponentType } from 'react'

import {
  ActivityIcon,
  BellIcon,
  BugIcon,
  CalendarIcon,
  ChartLineIcon,
  ChevronRightIcon,
  CrownIcon,
  DollarSignIcon,
  FacebookIcon,
  FoldersIcon,
  Gamepad2Icon,
  GaugeIcon,
  HeadphonesIcon,
  InstagramIcon,
  LanguagesIcon,
  LaptopIcon,
  LaptopMinimalIcon,
  LayoutListIcon,
  LinkedinIcon,
  MonitorIcon,
  PlusIcon,
  SearchIcon,
  Share2Icon,
  ShoppingCartIcon,
  SmartphoneIcon,
  SquareCheckBigIcon,
  StickyNoteIcon,
  TabletIcon,
  TwitterIcon,
  WatchIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
import ShareDropdown from '@/components/shadcn-studio/blocks/dropdown-share'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import WorkspaceSwitcher from '@/components/shadcn-studio/blocks/sidebar-workspace-switcher'
import FinanceCard from '@/components/shadcn-studio/blocks/chart-finance'
import StatisticsCard, { type StatisticsCardProps } from '@/components/shadcn-studio/blocks/statistics-card-03'
import StatisticsImpressionCard from '@/components/shadcn-studio/blocks/statistics-impression-card'
import StatisticsTotalRevenueCard from '@/components/shadcn-studio/blocks/statistics-total-revenue-card'
import TotalVisitorsCard from '@/components/shadcn-studio/blocks/chart-total-visitors'
import TopProductsCard from '@/components/shadcn-studio/blocks/widget-top-products'
import UserDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-user'

type MenuSubItem = {
  label: string
  href: string
  badge?: string
}

type MenuItem = {
  icon: ComponentType
  label: string
} & (
  | {
      href: string
      badge?: string
      items?: never
    }
  | { href?: never; badge?: never; items: MenuSubItem[] }
)

const menuItems: MenuItem[] = [
  {
    icon: GaugeIcon,
    label: 'Dashboard',
    href: '#'
  }
]

const pagesItems: MenuItem[] = [
  {
    icon: SquareCheckBigIcon,
    label: 'Backlog',
    href: '#'
  },
  {
    icon: LayoutListIcon,
    label: 'Iterations',
    href: '#'
  },
  {
    icon: CrownIcon,
    label: 'Milestones',
    href: '#'
  },
  {
    icon: BugIcon,
    label: 'Bug Tracker',
    href: '#'
  },
  {
    icon: FoldersIcon,
    label: 'Design Assets',
    items: [
      { label: 'Components', href: '#' },
      { label: 'Icons', href: '#' },
      { label: 'Illustrations', href: '#' }
    ]
  },
  {
    icon: StickyNoteIcon,
    label: 'Release Notes',
    href: '#'
  },
  {
    icon: CalendarIcon,
    label: 'Campaign Calendar',
    href: '#',
    badge: '3'
  },
  {
    icon: ChartLineIcon,
    label: 'Ad Performance',
    items: [
      { label: 'Campaigns', href: '#' },
      { label: 'Ad Groups', href: '#' },
      { label: 'Ads', href: '#', badge: '7' },
      { label: 'Keywords', href: '#' }
    ]
  }
]

const shareData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'John Garrett',
    email: 'john@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Laura Perez',
    email: 'laura@example.com',
    role: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Shane Adkins',
    email: 'shane@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Clara Brady',
    email: 'clara@example.com',
    role: 'can-edit'
  }
]

const morePeople = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Daisy Mitchell'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    name: 'Stephen Adams'
  }
]

// Statistics card data
const StatisticsCardData: StatisticsCardProps[] = [
  {
    icon: <ShoppingCartIcon />,
    title: 'Total Orders',
    value: '155K',
    trend: 'up',
    changePercentage: '+22%',
    badgeContent: 'Last 4 months',
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: <DollarSignIcon />,
    title: 'Total Profit',
    value: '$89.34k',
    trend: 'down',
    changePercentage: '-16%',
    badgeContent: 'Last One year',
    iconClassName: 'bg-chart-3/10 text-chart-3'
  }
]

// Visitor data
const visitorData = [
  {
    product: 'Desktop',
    percentage: 17,
    amount: 23.8,
    trend: 'up',
    heightClass: 'h-[17%]',
    color: 'bg-chart-1'
  },
  {
    product: 'Tablet',
    percentage: 65,
    amount: 13.604,
    trend: 'down',
    heightClass: 'h-[65%]',
    color: 'bg-chart-1/20'
  },
  {
    product: 'Mobile',
    percentage: 18,
    amount: 47.146,
    trend: 'up',
    heightClass: 'h-[18%]',
    color: 'bg-chart-1/50'
  }
]

// Product by sales data
const productsBySalesData = [
  {
    icon: SmartphoneIcon,
    productName: 'Samsung galaxy S25',
    productBrand: 'Samsung',
    sales: '$32,203',
    iconClassName: 'bg-chart-1/10 text-chart-1'
  },
  {
    icon: LaptopIcon,
    productName: 'Apple MacBook Pro',
    productBrand: 'Apple',
    sales: '$1,299',
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: HeadphonesIcon,
    productName: 'Sony WH-1000XM4',
    productBrand: 'Sony',
    sales: '$348',
    iconClassName: 'bg-chart-5/10 text-chart-5'
  },
  {
    icon: LaptopMinimalIcon,
    productName: 'Dell XPS 13',
    productBrand: 'Dell',
    sales: '$999'
  },
  {
    icon: WatchIcon,
    productName: 'Smart band 4',
    productBrand: 'Xiaomi',
    sales: '$749',
    iconClassName: 'bg-chart-3/10 text-chart-3'
  }
]

// Products by volume data
const productsByVolumeData = [
  {
    icon: LaptopIcon,
    productName: 'Dell XPS 13',
    productBrand: 'Dell',
    volume: '200k',
    changePercentage: 5,
    iconClassName: 'bg-chart-1/10 text-chart-1'
  },
  {
    icon: TabletIcon,
    productName: 'Apple iPad',
    productBrand: 'Apple',
    volume: '80K',
    changePercentage: 10,
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: Gamepad2Icon,
    productName: 'Sony PlayStation 5',
    productBrand: 'Sony',
    volume: '30k',
    changePercentage: -20,
    iconClassName: 'bg-chart-5/10 text-chart-5'
  },
  {
    icon: MonitorIcon,
    productName: 'IMac pro',
    productBrand: 'Apple',
    volume: '15k',
    changePercentage: 12
  },
  {
    icon: SmartphoneIcon,
    productName: 'Samsung galaxy S25',
    productBrand: 'Samsung',
    volume: '12.4k',
    changePercentage: -15,
    iconClassName: 'bg-chart-3/10 text-chart-3'
  }
]

// User data for datatable
const userData: Item[] = [
  {
    id: '1',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'JA',
    user: 'Jack Alfredo',
    email: 'jack.alfredo@shadcnstudio.com',
    role: 'maintainer',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'active'
  },
  {
    id: '2',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'SM',
    user: 'Sarah Mitchell',
    email: 'sarah.mitchell@company.com',
    role: 'admin',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'active'
  },
  {
    id: '3',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'RC',
    user: 'Robert Chen',
    email: 'robert.chen@startup.io',
    role: 'editor',
    plan: 'team',
    billing: 'manual-paypal',
    status: 'pending'
  },
  {
    id: '4',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'EW',
    user: 'Emily Wilson',
    email: 'emily.wilson@freelance.com',
    role: 'author',
    plan: 'basic',
    billing: 'manual-cash',
    status: 'inactive'
  },
  {
    id: '5',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'DG',
    user: 'David Garcia',
    email: 'david.garcia@agency.net',
    role: 'subscriber',
    plan: 'company',
    billing: 'auto-debit',
    status: 'active'
  },
  {
    id: '6',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'LT',
    user: 'Lisa Thompson',
    email: 'lisa.thompson@design.co',
    role: 'editor',
    plan: 'team',
    billing: 'manual-paypal',
    status: 'active'
  },
  {
    id: '7',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    fallback: 'MA',
    user: 'Michael Anderson',
    email: 'michael.anderson@tech.com',
    role: 'maintainer',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'pending'
  },
  {
    id: '8',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    fallback: 'JR',
    user: 'Jessica Rodriguez',
    email: 'jessica.rodriguez@startup.com',
    role: 'author',
    plan: 'basic',
    billing: 'manual-cash',
    status: 'active'
  },
  {
    id: '9',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    fallback: 'CB',
    user: 'Christopher Brown',
    email: 'chris.brown@corporate.org',
    role: 'admin',
    plan: 'company',
    billing: 'auto-debit',
    status: 'inactive'
  },
  {
    id: '10',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    fallback: 'AD',
    user: 'Amanda Davis',
    email: 'amanda.davis@marketing.io',
    role: 'subscriber',
    plan: 'basic',
    billing: 'manual-paypal',
    status: 'active'
  },
  {
    id: '11',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    fallback: 'JJ',
    user: 'James Johnson',
    email: 'james.johnson@development.com',
    role: 'maintainer',
    plan: 'team',
    billing: 'auto-debit',
    status: 'pending'
  },
  {
    id: '12',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    fallback: 'MW',
    user: 'Maria Williams',
    email: 'maria.williams@creative.net',
    role: 'editor',
    plan: 'company',
    billing: 'manual-cash',
    status: 'active'
  },
  {
    id: '13',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png',
    fallback: 'RT',
    user: 'Ryan Taylor',
    email: 'ryan.taylor@studio.com',
    role: 'author',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'inactive'
  },
  {
    id: '14',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
    fallback: 'NK',
    user: 'Nicole Kim',
    email: 'nicole.kim@digital.agency',
    role: 'subscriber',
    plan: 'team',
    billing: 'manual-paypal',
    status: 'active'
  },
  {
    id: '15',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png',
    fallback: 'AL',
    user: 'Andrew Lee',
    email: 'andrew.lee@consulting.biz',
    role: 'admin',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'pending'
  },
  {
    id: '16',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'SM',
    user: 'Stephanie Martinez',
    email: 'stephanie.martinez@media.com',
    role: 'editor',
    plan: 'basic',
    billing: 'manual-cash',
    status: 'active'
  },
  {
    id: '17',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png',
    fallback: 'KW',
    user: 'Kevin White',
    email: 'kevin.white@innovation.co',
    role: 'maintainer',
    plan: 'company',
    billing: 'auto-debit',
    status: 'inactive'
  },
  {
    id: '18',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
    fallback: 'RH',
    user: 'Rachel Harris',
    email: 'rachel.harris@solutions.org',
    role: 'author',
    plan: 'team',
    billing: 'manual-paypal',
    status: 'active'
  },
  {
    id: '19',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png',
    fallback: 'BT',
    user: 'Brian Turner',
    email: 'brian.turner@platform.io',
    role: 'subscriber',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'pending'
  },
  {
    id: '20',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png',
    fallback: 'CM',
    user: 'Catherine Moore',
    email: 'catherine.moore@ventures.com',
    role: 'admin',
    plan: 'basic',
    billing: 'manual-cash',
    status: 'active'
  },
  {
    id: '21',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-21.png',
    fallback: 'TN',
    user: 'Thomas Nelson',
    email: 'thomas.nelson@design.studio',
    role: 'editor',
    plan: 'enterprise',
    billing: 'auto-debit',
    status: 'active'
  },
  {
    id: '22',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-22.png',
    fallback: 'SP',
    user: 'Sophie Parker',
    email: 'sophie.parker@freelance.pro',
    role: 'author',
    plan: 'team',
    billing: 'manual-paypal',
    status: 'inactive'
  },
  {
    id: '23',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-23.png',
    fallback: 'AR',
    user: 'Alexander Reed',
    email: 'alex.reed@innovation.labs',
    role: 'maintainer',
    plan: 'company',
    billing: 'manual-cash',
    status: 'pending'
  },
  {
    id: '24',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-24.png',
    fallback: 'MG',
    user: 'Maya Gonzalez',
    email: 'maya.gonzalez@creative.agency',
    role: 'subscriber',
    plan: 'basic',
    billing: 'auto-debit',
    status: 'active'
  },
  {
    id: '25',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-25.png',
    fallback: 'JS',
    user: 'Jordan Smith',
    email: 'jordan.smith@tech.solutions',
    role: 'admin',
    plan: 'enterprise',
    billing: 'manual-paypal',
    status: 'pending'
  }
]

const SidebarGroupedMenuItems = ({ data, groupLabel }: { data: MenuItem[]; groupLabel?: string }) => {
  return (
    <SidebarGroup>
      {groupLabel && <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map(item =>
            item.items ? (
              <Collapsible className='group/collapsible' key={item.label}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.label}>
                      <item.icon />
                      <span>{item.label}</span>
                      <ChevronRightIcon className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map(subItem => (
                        <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton className='justify-between' asChild>
                            <a href={subItem.href}>
                              {subItem.label}
                              {subItem.badge && (
                                <span className='bg-primary/10 flex h-5 min-w-5 items-center justify-center rounded-full text-xs'>
                                  {subItem.badge}
                                </span>
                              )}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton tooltip={item.label} asChild>
                  <a href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
                {item.badge && <SidebarMenuBadge className='bg-primary/10 rounded-full'>{item.badge}</SidebarMenuBadge>}
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

const DashboardShell = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar collapsible='icon'>
          <SidebarHeader>
            <WorkspaceSwitcher />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={pagesItems} groupLabel='Useful Pages' />
          </SidebarContent>
          <SidebarFooter className='gap-4 p-3 transition-[padding] duration-200 [[data-state=collapsed]_&]:p-2'>
            <div className='flex flex-col gap-4 overflow-hidden rounded-md border p-4 [[data-state=collapsed]_&]:hidden'>
              <p className='truncate text-xl font-semibold'>Upgrade Your Plan</p>
              <p className='line-clamp-3 text-sm'>
                Your trial plan ends in 12 days. Upgrade your plan and unlock full potential!
              </p>
              <Progress value={50} className='h-2' />
              <Button className='truncate'>See All Plans</Button>
            </div>
            <Button className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40'>
              <span className='truncate [[data-state=collapsed]_&]:hidden'>Add new workspace</span>
              <PlusIcon />
            </Button>
          </SidebarFooter>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='before:bg-background/60 sticky top-0 z-50 before:absolute before:inset-0 before:mask-[linear-gradient(var(--card),var(--card)_18%,transparent_100%)] before:backdrop-blur-md'>
            <div className='bg-card relative z-51 mx-auto mt-3 flex w-[calc(100%-2rem)] max-w-[calc(1280px-3rem)] items-center justify-between rounded-xl border px-6 py-2 shadow-sm sm:w-[calc(100%-3rem)]'>
              <div className='flex items-center gap-1.5 sm:gap-4'>
                <SidebarTrigger className='[&_svg]:!size-5' />
                <Separator orientation='vertical' className='hidden !h-4 sm:block' />
                <SearchDialog
                  trigger={
                    <>
                      <Button variant='ghost' className='hidden !bg-transparent px-1 py-0 font-normal sm:block'>
                        <div className='text-muted-foreground hidden items-center gap-1.5 text-sm sm:flex'>
                          <SearchIcon className='size-4' />
                          <span>Type to search...</span>
                        </div>
                      </Button>
                      <Button variant='ghost' size='icon' className='sm:hidden'>
                        <SearchIcon className='size-4' />
                        <span className='sr-only'>Search</span>
                      </Button>
                    </>
                  }
                />
              </div>
              <div className='flex items-center gap-1.5'>
                <ShareDropdown
                  data={shareData}
                  morePeople={morePeople}
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <Share2Icon />
                    </Button>
                  }
                />
                <LanguageDropdown
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <LanguagesIcon />
                    </Button>
                  }
                />
                <ActivityDialog
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <ActivityIcon />
                    </Button>
                  }
                />
                <NotificationDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='relative'>
                      <BellIcon />
                      <span className='bg-destructive absolute top-2 right-2.5 size-2 rounded-full' />
                    </Button>
                  }
                />
                <ProfileDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='size-9.5'>
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
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            <div className='grid grid-cols-6 gap-6'>
              <FinanceCard className='col-span-full xl:col-span-4' />

              <div className='col-span-full grid grid-cols-2 gap-6 lg:col-span-3 xl:col-span-2'>
                {StatisticsCardData.map((card, index) => (
                  <StatisticsCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    trend={card.trend}
                    changePercentage={card.changePercentage}
                    badgeContent={card.badgeContent}
                    iconClassName={card.iconClassName}
                  />
                ))}

                <StatisticsTotalRevenueCard />

                <StatisticsImpressionCard />
              </div>

              <TotalVisitorsCard
                title='Total visitors'
                totalVisitors='23.02K'
                percentage={-6}
                visitorData={visitorData}
                className='col-span-full lg:col-span-3 xl:col-span-2'
              />

              <TopProductsCard
                salesTitle='Top Products by Sales'
                volumeTitle='Top Products by Volume'
                productsBySalesData={productsBySalesData}
                productsByVolumeData={productsByVolumeData}
                className='col-span-full xl:col-span-4'
              />

              <Card className='col-span-full py-0 shadow-none'>
                <UserDatatable data={userData} />
              </Card>
            </div>
          </main>
          <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
                {`©${new Date().getFullYear()}`}{' '}
                <a href='#' className='text-primary'>
                  Shadcn/studio
                </a>
                , Made for better web design
              </p>
              <div className='flex items-center gap-5'>
                <a href='#'>
                  <FacebookIcon className='size-4' />
                </a>
                <a href='#'>
                  <InstagramIcon className='size-4' />
                </a>
                <a href='#'>
                  <LinkedinIcon className='size-4' />
                </a>
                <a href='#'>
                  <TwitterIcon className='size-4' />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardShell
