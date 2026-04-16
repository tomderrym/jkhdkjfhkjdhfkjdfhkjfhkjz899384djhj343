import {
  ActivityIcon,
  BellIcon,
  BookUserIcon,
  ChartColumnStackedIcon,
  ChartPieIcon,
  CircleDollarSignIcon,
  CreditCardIcon,
  DollarSignIcon,
  LanguagesIcon,
  LifeBuoyIcon,
  ListChecksIcon,
  ListTodoIcon,
  MenuIcon,
  MessageSquareMoreIcon,
  PlusIcon,
  SearchIcon,
  SquareCheckBigIcon,
  TextSearchIcon,
  UserCheckIcon,
  UserIcon,
  UsersIcon,
  WalletIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuSheet from '@/components/shadcn-studio/blocks/menu-sheet'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-sheet'
import StatisticsOrderCard from '@/components/shadcn-studio/blocks/statistics-order-card'
import StatisticsProfitCard from '@/components/shadcn-studio/blocks/statistics-profit-card'
import StatisticsUserReachCard from '@/components/shadcn-studio/blocks/statistics-user-reach-card'
import StatisticsTotalProfitCard from '@/components/shadcn-studio/blocks/statistics-total-profit-card'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-05'
import TotalTransactionCard from '@/components/shadcn-studio/blocks/chart-total-transaction'
import TotalSalesCard from '@/components/shadcn-studio/blocks/chart-total-sales'
import UpgradeYourPlanCard from '@/components/shadcn-studio/blocks/widget-upgrade-your-plan'
import AdvertisementCard from '@/components/shadcn-studio/blocks/widget-advertisement'
import EarningReportCard from '@/components/shadcn-studio/blocks/chart-earning-report'
import InvoiceDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-invoice'

import LogoSvg from '@/assets/svg/logo'

import { cn } from '@/lib/utils'

const navigationData: NavigationSection[] = [
  {
    title: 'Dashboard',
    icon: <ChartColumnStackedIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Tasks',
    icon: <ListTodoIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'All Tasks', href: '#', icon: <SquareCheckBigIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'My Tasks', href: '#', icon: <UserCheckIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Completed Tasks', href: '#', icon: <ListChecksIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Customers',
    icon: <UsersIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'All Customers', href: '#', icon: <UsersIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'New Customer', href: '#', icon: <UserIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Customer Groups', href: '#', icon: <BookUserIcon className='text-foreground size-4 shrink-0' /> },
      {
        title: 'Customer Feedback',
        href: '#',
        icon: <MessageSquareMoreIcon className='text-foreground size-4 shrink-0' />
      },
      { title: 'Customer Support', href: '#', icon: <LifeBuoyIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Search',
    icon: <TextSearchIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  }
]

// Statistics card data
const StatisticsCardData = [
  {
    icon: CircleDollarSignIcon,
    title: 'Total Income',
    badgeContent: 'Last week',
    value: '$4,673',
    changePercentage: 25.2,
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: CreditCardIcon,
    title: 'Total Expense',
    badgeContent: 'Last month',
    value: '$1.28K',
    changePercentage: -12.2,
    iconClassName: 'bg-chart-1/10 text-chart-1'
  }
]

// Statistical data
const statData = [
  {
    icon: <ChartPieIcon />,
    title: 'Net profit',
    department: 'Sales',
    value: '$1,623',
    trend: 'up',
    percentage: 20.3,
    iconClassName: 'bg-chart-1/10 text-chart-1'
  },
  {
    icon: <DollarSignIcon />,
    title: 'Total income',
    department: 'Sales, Affiliation',
    value: '$5,600',
    trend: 'up',
    percentage: 16.2,
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: <WalletIcon />,
    title: 'Total expense',
    department: 'ADVT, Marketing',
    value: '$3,200',
    trend: 'up',
    percentage: 10.5,
    iconClassName: 'bg-chart-5/10 text-chart-5'
  }
]

// Chart data
const earningReportChartData = [
  { day: 'Monday', earning: 48, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' },
  { day: 'Tuesday', earning: 147, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' },
  { day: 'Wednesday', earning: 106, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' },
  { day: 'Thursday', earning: 180, fill: 'var(--chart-2)' },
  { day: 'Friday', earning: 75, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' },
  { day: 'Saturday', earning: 60, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' },
  { day: 'Sunday', earning: 128, fill: 'color-mix(in oklab, var(--chart-2) 20%, transparent)' }
]

// Invoice data
const invoiceData: Item[] = [
  {
    id: '5099',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'JA',
    client: 'Jack Alfredo',
    field: 'UI/UX designer',
    total: 3120,
    issuedDate: new Date('2025-04-03'),
    balance: 0
  },
  {
    id: '5008',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'MG',
    client: 'Maria Gonzalez',
    field: 'Frontend developer',
    total: 1450,
    issuedDate: new Date('2025-05-12'),
    balance: 0
  },
  {
    id: '5101',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'JD',
    client: 'John Doe',
    field: 'Graphic designer',
    total: 1200,
    issuedDate: new Date('2025-06-26'),
    balance: 0
  },
  {
    id: '4586',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'EC',
    client: 'Emily Carter',
    field: 'UI/UX designer',
    total: 2680,
    issuedDate: new Date('2025-07-05'),
    balance: -78
  },
  {
    id: '4360',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'DL',
    client: 'David Lee',
    field: 'Backend developer',
    total: 3120,
    issuedDate: new Date('2025-08-07'),
    balance: 0
  },
  {
    id: '5104',
    status: 'past due',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'SP',
    client: 'Sophia Patel',
    field: 'Product manager',
    total: 1600,
    issuedDate: new Date('2025-08-26'),
    balance: 86
  },
  {
    id: '5201',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    fallback: 'MW',
    client: 'Michael Williams',
    field: 'Full Stack Developer',
    total: 2850,
    issuedDate: new Date('2025-01-15'),
    balance: 0
  },
  {
    id: '4987',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    fallback: 'AB',
    client: 'Amanda Brown',
    field: 'Marketing Specialist',
    total: 1750,
    issuedDate: new Date('2025-02-20'),
    balance: 0
  },
  {
    id: '5342',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    fallback: 'RJ',
    client: 'Robert Johnson',
    field: 'DevOps Engineer',
    total: 3500,
    issuedDate: new Date('2025-03-10'),
    balance: -120
  },
  {
    id: '4723',
    status: 'past due',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    fallback: 'LM',
    client: 'Lisa Miller',
    field: 'Data Analyst',
    total: 2200,
    issuedDate: new Date('2025-04-18'),
    balance: 250
  },
  {
    id: '5445',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    fallback: 'TD',
    client: 'Thomas Davis',
    field: 'Mobile Developer',
    total: 4200,
    issuedDate: new Date('2025-05-22'),
    balance: 0
  },
  {
    id: '4892',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    fallback: 'JW',
    client: 'Jennifer Wilson',
    field: 'UX Researcher',
    total: 1950,
    issuedDate: new Date('2025-06-14'),
    balance: 0
  },
  {
    id: '5667',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png',
    fallback: 'CM',
    client: 'Christopher Moore',
    field: 'System Administrator',
    total: 2750,
    issuedDate: new Date('2025-07-08'),
    balance: -95
  },
  {
    id: '4534',
    status: 'past due',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
    fallback: 'ST',
    client: 'Sarah Taylor',
    field: 'Content Writer',
    total: 1380,
    issuedDate: new Date('2025-01-28'),
    balance: 180
  },
  {
    id: '5789',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png',
    fallback: 'MA',
    client: 'Matthew Anderson',
    field: 'Cloud Architect',
    total: 5600,
    issuedDate: new Date('2025-02-12'),
    balance: 0
  },
  {
    id: '4398',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'KT',
    client: 'Karen Thompson',
    field: 'Business Analyst',
    total: 2100,
    issuedDate: new Date('2025-03-25'),
    balance: 0
  },
  {
    id: '5923',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png',
    fallback: 'JG',
    client: 'James Garcia',
    field: 'Security Engineer',
    total: 3800,
    issuedDate: new Date('2025-04-30'),
    balance: -200
  },
  {
    id: '4672',
    status: 'past due',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
    fallback: 'NH',
    client: 'Nancy Harris',
    field: 'QA Engineer',
    total: 1850,
    issuedDate: new Date('2025-05-16'),
    balance: 320
  },
  {
    id: '5234',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png',
    fallback: 'DM',
    client: 'Daniel Martinez',
    field: 'Software Architect',
    total: 4800,
    issuedDate: new Date('2025-06-09'),
    balance: 0
  },
  {
    id: '4756',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png',
    fallback: 'ER',
    client: 'Elizabeth Rodriguez',
    field: 'Product Designer',
    total: 2650,
    issuedDate: new Date('2025-07-21'),
    balance: 0
  },
  {
    id: '5456',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'AL',
    client: 'Andrew Lopez',
    field: 'Technical Lead',
    total: 5200,
    issuedDate: new Date('2025-08-03'),
    balance: -150
  },
  {
    id: '4823',
    status: 'past due',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'MH',
    client: 'Michelle Hill',
    field: 'Scrum Master',
    total: 2400,
    issuedDate: new Date('2025-01-11'),
    balance: 400
  },
  {
    id: '5678',
    status: 'paid',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'KS',
    client: 'Kevin Scott',
    field: 'Database Administrator',
    total: 3200,
    issuedDate: new Date('2025-02-07'),
    balance: 0
  },
  {
    id: '4945',
    status: 'draft',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'RG',
    client: 'Rachel Green',
    field: 'Digital Marketing Manager',
    total: 1820,
    issuedDate: new Date('2025-03-19'),
    balance: 0
  },
  {
    id: '5812',
    status: 'downloaded',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'BW',
    client: 'Brian White',
    field: 'AI/ML Engineer',
    total: 6200,
    issuedDate: new Date('2025-04-26'),
    balance: -300
  }
]

const DashboardShell = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
            <div className='flex items-center gap-4'>
              <MenuSheet
                logoName='CRM'
                navigationData={navigationData}
                trigger={
                  <Button variant='outline' size='icon' className='inline-flex md:hidden'>
                    <MenuIcon />
                    <span className='sr-only'>Menu</span>
                  </Button>
                }
              />
              <a href='#'>
                <div className='flex items-center'>
                  <LogoSvg className='size-8.5' />
                  <span className='ml-2.5 hidden text-xl font-semibold sm:block'>CRM</span>
                </div>
              </a>
            </div>
            <SearchDialog
              className='hidden md:block'
              trigger={
                <Button variant='ghost' className='p-0 font-normal'>
                  <div className='text-muted-foreground flex min-w-55 items-center gap-1.5 rounded-md border px-3 py-2 text-sm'>
                    <SearchIcon className='size-4' />
                    <span>Type to search...</span>
                  </div>
                </Button>
              }
            />
            <div className='flex items-center gap-1.5'>
              <SearchDialog
                className='md:hidden'
                trigger={
                  <Button variant='ghost' size='icon'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
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
        </div>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-1.5 sm:px-6'>
          <NavigationMenu viewport={false} className='hidden md:block'>
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
                      <ul className='grid w-42 gap-4'>
                        <li>
                          {navItem.items?.map(item => (
                            <NavigationMenuLink
                              key={item.title}
                              href={item.href}
                              className='flex flex-row items-center gap-1.5'
                            >
                              {item.icon}
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
          <Button>
            Invite Members
            <PlusIcon />
          </Button>
        </div>
      </header>
      <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
        <div className='grid grid-cols-6 gap-6'>
          <StatisticsTotalProfitCard className='max-xl:col-span-2 max-md:col-span-3' />
          <StatisticsOrderCard className='max-xl:col-span-2 max-md:col-span-3' />
          <StatisticsProfitCard className='max-xl:col-span-2 max-md:col-span-3' />
          <StatisticsUserReachCard className='max-xl:col-span-2 max-md:col-span-3' />

          {StatisticsCardData.map((card, index) => (
            <StatisticsCard
              key={index}
              icon={card.icon}
              title={card.title}
              time={card.badgeContent}
              value={card.value}
              changePercentage={card.changePercentage}
              className='max-xl:col-span-2 max-md:col-span-3'
              iconClassName={card.iconClassName}
            />
          ))}

          <TotalTransactionCard className='col-span-full lg:col-span-4' />

          <TotalSalesCard className='col-span-full sm:col-span-3 lg:col-span-2' />

          <UpgradeYourPlanCard className='col-span-full sm:col-span-3 lg:col-span-2' />

          <EarningReportCard
            title='Earning Report'
            subTitle='Weekly Earning overview'
            statData={statData}
            chartData={earningReportChartData}
            className='col-span-full sm:col-span-3 lg:col-span-2'
          />

          <AdvertisementCard className='col-span-full sm:col-span-3 lg:col-span-2' />

          <Card className='col-span-full py-0'>
            <InvoiceDatatable data={invoiceData} />
          </Card>
        </div>
      </main>
      <footer>
        <div className='mx-auto flex size-full max-w-7xl items-center justify-between gap-3 p-4 max-md:flex-col sm:px-6'>
          <p className='text-muted-foreground text-center text-sm text-balance'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary'>
              Shadcn/studio
            </a>
            , Made for better web design
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>CRM</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </footer>
    </div>
  )
}

export default DashboardShell
