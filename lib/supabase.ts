import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image?: string
  featured: boolean
  meta_title?: string
  meta_description?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image?: string
  category: string
  location?: string
  completion_date?: string
  featured: boolean
  meta_title?: string
  meta_description?: string
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  role: string
  created_at: string
}

// Service functions
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Service[]
}

export async function getServiceBySlug(slug: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Service
}

export async function getFeaturedServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Service[]
}

// Project functions
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Project[]
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Project
}

export async function getFeaturedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Project[]
}

export async function getProjectsByCategory(category: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Project[]
}

// Admin functions
export async function isAdmin(email: string) {
  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('email', email)
    .single()

  if (error) return false
  return !!data
}

// CRUD operations for admin
export async function createService(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('services')
    .insert([service])
    .select()
    .single()

  if (error) throw error
  return data as Service
}

export async function updateService(id: string, service: Partial<Service>) {
  const { data, error } = await supabase
    .from('services')
    .update(service)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Service
}

export async function deleteService(id: string) {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
    .single()

  if (error) throw error
  return data as Project
}

export async function updateProject(id: string, project: Partial<Project>) {
  const { data, error } = await supabase
    .from('projects')
    .update(project)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Project
}

export async function deleteProject(id: string) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) throw error
}