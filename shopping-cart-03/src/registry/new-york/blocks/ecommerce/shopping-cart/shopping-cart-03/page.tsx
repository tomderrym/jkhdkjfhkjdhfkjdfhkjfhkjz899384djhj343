import ShoppingCart from '@/components/shadcn-studio/blocks/shopping-cart-03/shopping-cart-03'
import type {
  PricingTierType,
  CountriesDataType
} from '@/components/shadcn-studio/blocks/shopping-cart-03/shopping-cart-03'

const pricingTierData: PricingTierType[] = [
  {
    id: 'collection-01',
    collection: 'Collection 01',
    description: '6 x Presets Released in 2024.',
    price: 350,
    defaultChecked: false
  },
  {
    id: 'collection-02',
    collection: 'Collection 02',
    description: '8 x Presets Released in 2024.',
    price: 599,
    defaultChecked: true
  },
  {
    id: 'collection-03',
    collection: 'Collection 03',
    description: '12 x Presets Released in 2024.',
    price: 799,
    defaultChecked: false
  }
]

const countriesData: CountriesDataType[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'in', label: 'India' },
  { value: 'jp', label: 'Japan' }
]

const ShoppingCartPage = () => {
  return <ShoppingCart pricingTier={pricingTierData} countries={countriesData} />
}

export default ShoppingCartPage
