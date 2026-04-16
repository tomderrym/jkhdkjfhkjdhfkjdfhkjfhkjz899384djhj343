import React from 'react';
import type { CSSProperties, ReactNode } from 'react'

import {
  ActivityIcon,
  BellIcon,
  BoxIcon,
  CarIcon,
  Clock9Icon,
  DownloadIcon,
  HomeIcon,
  LanguagesIcon,
  LockKeyholeIcon,
  MapPinIcon,
  MapPinnedIcon,
  SearchIcon,
  SettingsIcon,
  ShipIcon,
  ShoppingCartIcon,
  TruckIcon,
  UploadIcon,
  UserIcon
} from 'lucide-react'

import { Button } from './button'
import { Progress } from './progress'
import { Card } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from './sidebar'

// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
// // // import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
// Placeholder - original component not available
const SearchDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
// Placeholder - original component not available
const LanguageDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
// Placeholder - original component not available
const ActivityDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
// Placeholder - original component not available
const NotificationDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
// Placeholder - original component not available
const ProfileDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import VehicleOverviewCard from '@/components/shadcn-studio/blocks/chart-vehicle-overview'
// Placeholder - original component not available
const VehicleOverviewCard = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import UserOrderCard from '@/components/shadcn-studio/blocks/widget-user-order'
// Placeholder - original component not available
const UserOrderCard = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import SalesPerformanceCard from '@/components/shadcn-studio/blocks/chart-sales-performance'
// Placeholder - original component not available
const SalesPerformanceCard = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import CustomerRatingsCard from '@/components/shadcn-studio/blocks/chart-customer-ratings'
// Placeholder - original component not available
const CustomerRatingsCard = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import VehiclesConditionCard from '@/components/shadcn-studio/blocks/widget-vehicles-condition'
// Placeholder - original component not available
const VehiclesConditionCard = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import VehicleRouteDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-vehicle-route'
// Placeholder - original component not available
const VehicleRouteDatatable = () => <div>Component placeholder</div>;
// Placeholder - original component not available
type MenuItem = {
  icon: ReactNode
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          opacity='0.5'
          d='M6.22209 4.60105C6.66665 4.304 7.13344 4.04636 7.6171 3.82976C8.98898 3.21539 9.67491 2.9082 10.5875 3.4994C11.5 4.09061 11.5 5.06041 11.5 7.00001V8.50001C11.5 10.3856 11.5 11.3284 12.0858 11.9142C12.6716 12.5 13.6144 12.5 15.5 12.5H17C18.9396 12.5 19.9094 12.5 20.5006 13.4125C21.0918 14.3251 20.7846 15.011 20.1702 16.3829C19.9536 16.8666 19.696 17.3334 19.399 17.7779C18.3551 19.3402 16.8714 20.5578 15.1355 21.2769C13.3996 21.9959 11.4895 22.184 9.64665 21.8175C7.80383 21.4509 6.11109 20.5461 4.78249 19.2175C3.45389 17.8889 2.5491 16.1962 2.18254 14.3534C1.81598 12.5105 2.00412 10.6004 2.72315 8.86451C3.44218 7.12861 4.65982 5.64492 6.22209 4.60105Z'
          fill='currentColor'
        />
        <path
          d='M21.446 7.06901C20.6342 5.00831 18.9917 3.36579 16.931 2.55398C15.3895 1.94669 14 3.34316 14 5.00002V9.00002C14 9.5523 14.4477 10 15 10H19C20.6569 10 22.0533 8.61055 21.446 7.06901Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'Tracking',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          opacity='0.5'
          d='M12 2C7.58172 2 4 6.00258 4 10.5C4 14.9622 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.9622 20 10.5C20 6.00258 16.4183 2 12 2Z'
          fill='currentColor'
        />
        <path
          d='M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'Inventory',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          d='M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z'
          fill='currentColor'
        />
        <path
          opacity='0.7'
          d='M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z'
          fill='currentColor'
        />
        <path
          opacity='0.5'
          d='M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'Warehouse',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          opacity='0.5'
          d='M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z'
          fill='currentColor'
        />
        <path
          d='M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'Notification Settings',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          opacity='0.5'
          d='M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z'
          fill='currentColor'
        />
        <path
          d='M7.24316 18.5449C7.8941 20.5501 9.77767 21.9997 11.9998 21.9997C14.222 21.9997 16.1055 20.5501 16.7565 18.5449C13.611 19.1352 10.3886 19.1352 7.24316 18.5449Z'
          fill='currentColor'
        />
        <path
          d='M9.34865 9C9.34865 9.41421 9.67241 9.75 10.0718 9.75H12.1827L9.56045 12.4697C9.35364 12.6842 9.29177 13.0068 9.4037 13.287C9.51562 13.5673 9.7793 13.75 10.0718 13.75H13.9284C14.3278 13.75 14.6515 13.4142 14.6515 13C14.6515 12.5858 14.3278 12.25 13.9284 12.25H11.8175L14.4397 9.53033C14.6466 9.31583 14.7084 8.99324 14.5965 8.71299C14.4846 8.43273 14.2209 8.25 13.9284 8.25H10.0718C9.67241 8.25 9.34865 8.58579 9.34865 9Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'Billing & Payments',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          opacity='0.5'
          d='M9.99969 20H13.9997C17.7709 20 19.6565 20 20.8281 18.8284C21.9997 17.6569 21.9997 15.7712 21.9997 12C21.9997 11.5581 21.998 10.392 21.9961 10H1.99993C1.99804 10.392 1.99969 11.5581 1.99969 12C1.99969 15.7712 1.99969 17.6569 3.17126 18.8284C4.34284 20 6.22845 20 9.99969 20Z'
          fill='currentColor'
        />
        <path
          d='M9.99484 4H14.0052C17.7861 4 19.6766 4 20.8512 5.11578C21.6969 5.91916 21.9337 7.07507 22 9V10H2V9C2.0663 7.07507 2.3031 5.91916 3.14881 5.11578C4.3234 4 6.21388 4 9.99484 4Z'
          fill='currentColor'
        />
        <path
          d='M12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16C11.75 16.4142 12.0858 16.75 12.5 16.75H14C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25H12.5Z'
          fill='currentColor'
        />
        <path
          d='M6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6Z'
          fill='currentColor'
        />
      </svg>
    )
  },
  {
    label: 'User Profile',
    href: '#',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z'
          fill='currentColor'
        />
        <path
          opacity='0.5'
          d='M12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z'
          fill='currentColor'
        />
      </svg>
    )
  }
]

const vehicleOverviewData = [
  {
    status: 'On the way',
    percentage: 33.3,
    time: '2hr 10min',
    icon: CarIcon,
    width: 'w-[33.3%]',
    colors: 'bg-primary/10 text-primary'
  },
  {
    status: 'Unloading',
    percentage: 23.5,
    time: '3hr 15min',
    icon: DownloadIcon,
    width: 'w-[23.5%]',
    colors: 'bg-chart-1 text-primary-foreground'
  },
  {
    status: 'Loading',
    percentage: 22.1,
    time: '1hr 24min',
    icon: UploadIcon,
    width: 'w-[22.1%]',
    colors: 'bg-chart-2 text-primary-foreground'
  },
  {
    status: 'Waiting',
    percentage: 21.1,
    time: '5hr 19min',
    icon: Clock9Icon,
    width: 'w-[21.1%]',
    colors: 'bg-chart-3 text-primary-foreground'
  }
]

// Sales data
const salesData = [
  {
    title: 'Online Store',
    value: 88,
    color: '[&>div]:bg-chart-1'
  },
  {
    title: 'Offline Store',
    value: 64,
    color: '[&>div]:bg-chart-2'
  }
]

// Vehicle condition data
const vehicleConditionData = [
  {
    condition: 'Excellent',
    details: '12% increase',
    progressValue: 55,
    changePercentage: '+25%',
    progressClassName: 'stroke-chart-1'
  },
  {
    condition: 'Good',
    details: '24 vehicles',
    progressValue: 20,
    changePercentage: '+30%',
    progressClassName: 'stroke-chart-2'
  },
  {
    condition: 'Average',
    details: '182 Tasks',
    progressValue: 12,
    changePercentage: '-15%',
    progressClassName: 'stroke-chart-3'
  },
  {
    condition: 'Bad',
    details: '9 vehicles',
    progressValue: 8,
    changePercentage: '+35%',
    progressClassName: 'stroke-chart-5'
  },
  {
    condition: 'Not Working',
    details: '3 vehicles',
    progressValue: 5,
    changePercentage: '-2%'
  }
]

// Vehicle route data
const vehicleData: Item[] = [
  {
    id: '1',
    vehicle: 159145,
    startingRoute: 'Paris 19, France',
    endingRoute: 'Dresdon, Germany',
    warning: 'No warning',
    progress: 50,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '2',
    vehicle: 163825,
    startingRoute: 'Tokyo 23, Japan',
    endingRoute: 'Budapest, Hungary',
    warning: 'Fuel problems',
    progress: 75,
    progressColor: '[&>div]:bg-chart-2'
  },
  {
    id: '3',
    vehicle: 182624,
    startingRoute: 'New York City, USA',
    endingRoute: 'Kyoto, Japan',
    warning: 'Temperature not optimal',
    progress: 25,
    progressColor: '[&>div]:bg-chart-2'
  },
  {
    id: '4',
    vehicle: 27568,
    startingRoute: 'Berlin, Germany',
    endingRoute: 'Cape Town, South Africa',
    warning: 'Ecu not responding',
    progress: 50,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '5',
    vehicle: 300168,
    startingRoute: 'Sydney, Australia',
    endingRoute: 'Buenos Aires, Argentina',
    warning: 'Oil leakage',
    progress: 25,
    progressColor: '[&>div]:bg-chart-5'
  },
  {
    id: '6',
    vehicle: 321659,
    startingRoute: 'Rio de Janeiro, Brazil',
    endingRoute: 'Toronto, Canada',
    warning: 'Fuel problems',
    progress: 75,
    progressColor: '[&>div]:bg-chart-3'
  },
  {
    id: '7',
    vehicle: 445782,
    startingRoute: 'London, UK',
    endingRoute: 'Mumbai, India',
    warning: 'No warning',
    progress: 90,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '8',
    vehicle: 589634,
    startingRoute: 'Los Angeles, USA',
    endingRoute: 'Moscow, Russia',
    warning: 'Temperature not optimal',
    progress: 40,
    progressColor: '[&>div]:bg-chart-4'
  },
  {
    id: '9',
    vehicle: 672154,
    startingRoute: 'Dubai, UAE',
    endingRoute: 'Singapore',
    warning: 'Oil leakage',
    progress: 60,
    progressColor: '[&>div]:bg-chart-5'
  },
  {
    id: '10',
    vehicle: 758932,
    startingRoute: 'Madrid, Spain',
    endingRoute: 'Bangkok, Thailand',
    warning: 'Fuel problems',
    progress: 85,
    progressColor: '[&>div]:bg-chart-3'
  },
  {
    id: '11',
    vehicle: 823456,
    startingRoute: 'Rome, Italy',
    endingRoute: 'Cairo, Egypt',
    warning: 'No warning',
    progress: 30,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '12',
    vehicle: 934567,
    startingRoute: 'Amsterdam, Netherlands',
    endingRoute: 'Seoul, South Korea',
    warning: 'Ecu not responding',
    progress: 55,
    progressColor: '[&>div]:bg-chart-2'
  },
  {
    id: '13',
    vehicle: 105672,
    startingRoute: 'Stockholm, Sweden',
    endingRoute: 'Jakarta, Indonesia',
    warning: 'Temperature not optimal',
    progress: 70,
    progressColor: '[&>div]:bg-chart-3'
  },
  {
    id: '14',
    vehicle: 218934,
    startingRoute: 'Vienna, Austria',
    endingRoute: 'Manila, Philippines',
    warning: 'Oil leakage',
    progress: 45,
    progressColor: '[&>div]:bg-chart-4'
  },
  {
    id: '15',
    vehicle: 345789,
    startingRoute: 'Brussels, Belgium',
    endingRoute: 'Lagos, Nigeria',
    warning: 'Fuel problems',
    progress: 65,
    progressColor: '[&>div]:bg-chart-5'
  },
  {
    id: '16',
    vehicle: 467123,
    startingRoute: 'Zurich, Switzerland',
    endingRoute: 'Nairobi, Kenya',
    warning: 'No warning',
    progress: 80,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '17',
    vehicle: 578245,
    startingRoute: 'Copenhagen, Denmark',
    endingRoute: 'Casablanca, Morocco',
    warning: 'Temperature not optimal',
    progress: 35,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '18',
    vehicle: 689456,
    startingRoute: 'Helsinki, Finland',
    endingRoute: 'Addis Ababa, Ethiopia',
    warning: 'Ecu not responding',
    progress: 95,
    progressColor: '[&>div]:bg-chart-2'
  },
  {
    id: '19',
    vehicle: 790567,
    startingRoute: 'Oslo, Norway',
    endingRoute: 'Algiers, Algeria',
    warning: 'Oil leakage',
    progress: 20,
    progressColor: '[&>div]:bg-chart-3'
  },
  {
    id: '20',
    vehicle: 812345,
    startingRoute: 'Warsaw, Poland',
    endingRoute: 'Tunis, Tunisia',
    warning: 'Fuel problems',
    progress: 88,
    progressColor: '[&>div]:bg-chart-5'
  },
  {
    id: '21',
    vehicle: 923456,
    startingRoute: 'Prague, Czech Republic',
    endingRoute: 'Rabat, Morocco',
    warning: 'No warning',
    progress: 42
  },
  {
    id: '22',
    vehicle: 134567,
    startingRoute: 'Budapest, Hungary',
    endingRoute: 'Dakar, Senegal',
    warning: 'Temperature not optimal',
    progress: 67,
    progressColor: '[&>div]:bg-chart-1'
  },
  {
    id: '23',
    vehicle: 245678,
    startingRoute: 'Bucharest, Romania',
    endingRoute: 'Accra, Ghana',
    warning: 'Oil leakage',
    progress: 52,
    progressColor: '[&>div]:bg-chart-2'
  },
  {
    id: '24',
    vehicle: 356789,
    startingRoute: 'Sofia, Bulgaria',
    endingRoute: 'Abidjan, Ivory Coast',
    warning: 'Ecu not responding',
    progress: 78,
    progressColor: '[&>div]:bg-chart-3'
  },
  {
    id: '25',
    vehicle: 467890,
    startingRoute: 'Athens, Greece',
    endingRoute: 'Bamako, Mali',
    warning: 'Fuel problems',
    progress: 33,
    progressColor: '[&>div]:bg-chart-5'
  }
]

const DashboardShell = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider defaultOpen={false} style={{ '--sidebar-width-icon': '3.5625rem' } as CSSProperties}>
        <Sidebar collapsible='icon' className='[&_[data-slot=sidebar-inner]]:bg-card'>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size='lg'
                  className='gap-2.5 !bg-transparent group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-1! [&>svg]:size-8'
                  asChild
                >
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-card [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>Logistics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map(item => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        className='[&>svg]:text-primary group-data-[collapsible=icon]:size-10! [&>svg]:size-6'
                        tooltip={item.label}
                        asChild
                      >
                        <a href={item.href}>
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className='bg-muted sticky top-0 flex h-dvh w-65 flex-col border-r max-lg:hidden'> style={{ backgroundColor: theme?.backgroundColor }}
          <div className='px-4 py-3.5 text-lg font-semibold'>Logistics</div>
          <div className='mt-5 flex flex-col px-4'>
            <div className='mb-4 grid grid-cols-2 gap-4'>
              <div className='flex flex-col items-start gap-2 rounded-md border border-dashed p-2'>
                <p className='text-sm'>Deliveries</p>
                <p className='text-chart-1 text-lg font-semibold'>25.9k</p>
              </div>
              <div className='flex flex-col items-start gap-2 rounded-md border border-dashed p-2'>
                <p className='text-sm'>On the way</p>
                <p className='text-chart-2 text-lg font-semibold'>4.6k</p>
              </div>
            </div>
            <div className='mb-6 flex flex-col'>
              <p className='mb-2.5 text-sm'>Delivery Process</p>
              <Progress value={30} className='[&>div]:bg-chart-1 mb-1' />
              <p className='text-sm'>Reached 30% from target</p>
            </div>
          </div>
          <div className='overflow-y-auto px-4 pb-3.5'>
            <div className='mb-6 flex flex-col'>
              <p className='text-foreground/70 mb-2 text-sm'>Pages</p>
              <div className='grid grid-cols-2 gap-4'>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <UserIcon className='size-7' />
                  <p className='text-sm'>User Profile</p>
                </a>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <TruckIcon className='size-7' />
                  <p className='text-sm'>Vehicle</p>
                </a>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <BoxIcon className='size-7' />
                  <p className='text-sm'>Inventory</p>
                </a>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <MapPinIcon className='size-7' />
                  <p className='text-sm'>Tracking</p>
                </a>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <HomeIcon className='size-7' />
                  <p className='text-sm'>Warehouse</p>
                </a>
                <a href='#' className='hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4'>
                  <ShoppingCartIcon className='size-7' />
                  <p className='text-sm'>Order</p>
                </a>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='text-foreground/70 mb-4 text-sm'>Settings & Profile</p>
              <div className='flex flex-col gap-5'>
                <a href='#' className='flex items-center gap-2'>
                  <UserIcon className='size-4' />
                  <p className='text-sm'>User Profile</p>
                </a>
                <a href='#' className='flex items-center gap-2'>
                  <LockKeyholeIcon className='size-4' />
                  <p className='text-sm'>Change Password</p>
                </a>
                <a href='#' className='flex items-center gap-2'>
                  <BellIcon className='size-4' />
                  <p className='text-sm'>Notification Settings</p>
                </a>
                <a href='#' className='flex items-center gap-2'>
                  <SettingsIcon className='size-4' />
                  <p className='text-sm'>App Settings</p>
                </a>
                <a href='#' className='flex items-center gap-2'>
                  <ShipIcon className='size-4' />
                  <p className='text-sm'>Create Shipment</p>
                </a>
                <a href='#' className='flex items-center gap-2'>
                  <MapPinnedIcon className='size-4' />
                  <p className='text-sm'>Fleet Status Overview</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 flex items-center justify-between gap-6 border-b px-4 py-2 sm:px-6'>
            <div className='flex items-center gap-4'>
              <SidebarTrigger className='md:hidden [&_svg]:!size-5' />
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
            <div className='flex items-center gap-1.5 sm:gap-6'>
              <div className='flex items-center gap-1.5'>
                <LanguageDropdown
                  trigger={
                    <Button variant='outline' size='icon'>
                      <LanguagesIcon />
                    </Button>
                  }
                />
                <ActivityDialog
                  trigger={
                    <Button variant='outline' size='icon'>
                      <ActivityIcon />
                    </Button>
                  }
                />
                <NotificationDropdown
                  trigger={
                    <Button variant='outline' size='icon' className='relative'>
                      <BellIcon />
                      <span className='bg-destructive absolute -top-0.5 -right-0.5 size-2 rounded-full' />
                    </Button>
                  }
                />
              </div>
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
          </header>
          <main className='size-full flex-1 px-4 py-6 sm:px-6'>
            <div className='grid grid-cols-6 gap-6'>
              {/* Vehicle Overview Card */}
              <VehicleOverviewCard
                title='Vehicle overview'
                vehicleData={vehicleOverviewData}
                className='col-span-full xl:col-span-3'
              />

              {/* User Order Card */}
              <UserOrderCard className='col-span-full md:col-span-3' />

              {/* Sales Performance Card */}
              <SalesPerformanceCard
                title='Sales performance'
                value='68K'
                changePercentage={-6}
                salesData={salesData}
                className='col-span-full md:col-span-3 xl:col-span-2'
              />

              {/* Vehicles Condition Card */}
              <VehiclesConditionCard
                title='Vehicles Condition'
                vehicleConditionData={vehicleConditionData}
                className='col-span-full md:col-span-3 xl:col-span-2'
              />

              {/* Customer Ratings Card */}
              <CustomerRatingsCard className='col-span-full md:col-span-3 xl:col-span-2' />

              {/* Vehicle Route Datatable */}
              <Card className='col-span-full py-0'>
                <VehicleRouteDatatable data={vehicleData} />
              </Card>
            </div>
          </main>
          <footer className='flex items-center justify-between gap-3 px-4 py-3 max-md:flex-col sm:px-6 md:gap-6'>
            <p className='text-muted-foreground text-sm text-balance max-md:text-center'>
              {`©${new Date().getFullYear()}`}{' '}
              <a href='#' className='text-primary'>
                Shadcn/studio
              </a>
              , Made for better web design
            </p>
            <div className='text-muted-foreground *:hover:text-primary flex flex-wrap items-center gap-3 text-sm whitespace-nowrap min-[450px]:gap-4'>
              <a href='#'>Orders</a>
              <a href='#'>Tracking</a>
              <a href='#'>Inventory</a>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardShell
