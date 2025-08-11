export interface SEOAuditForm {
  name: string
  email: string
  phone: string
  company: string
  website: string
  budget: 'LKR 50K-100K' | 'LKR 100K-200K' | 'LKR 200K-500K' | 'LKR 500K+'
  message: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  rating: number
  text: string
  image?: string
}
