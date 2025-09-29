import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { CreateRSVPData } from '@/types/rsvp'

export async function POST(request: NextRequest) {
  try {
    const body: CreateRSVPData = await request.json()
    
    // Validar datos requeridos
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Nombre y teléfono son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de teléfono (debe tener 10 dígitos)
    const phoneDigits = body.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      return NextResponse.json(
        { error: 'El teléfono debe tener 10 dígitos' },
        { status: 400 }
      )
    }

    // Validar formato de email solo si se proporciona
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: 'Formato de email inválido' },
          { status: 400 }
        )
      }
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('rsvp')
      .insert([body])
      .select()
      .single()

    if (error) {
      console.error('Error al insertar RSVP:', error)
      return NextResponse.json(
        { error: 'Error al guardar la confirmación' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'RSVP guardado exitosamente',
        data 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error en API RSVP:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error al obtener RSVPs:', error)
      return NextResponse.json(
        { error: 'Error al obtener las confirmaciones' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Error en API RSVP GET:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
