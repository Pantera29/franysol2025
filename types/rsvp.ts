export interface RSVP {
  id: string
  name: string
  email: string
  phone?: string
  attending: boolean
  dietary_restrictions?: string
  message?: string
  created_at: string
  updated_at: string
}

export interface CreateRSVPData {
  name: string
  email: string
  phone?: string
  attending: boolean
  dietary_restrictions?: string
  message?: string
}
