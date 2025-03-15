import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabase';

// GET all equipment
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('equipment')
      .select('*');

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new equipment
export async function POST(request) {
  try {
    const data = await request.json();
    const { data: equipment, error } = await supabase
      .from('equipment')
      .insert([{
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        category: data.category,
        image_url: data.imageUrl,
      }])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(equipment);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
