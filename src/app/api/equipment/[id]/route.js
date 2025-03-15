import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabase';

// PUT (update) equipment
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    const { data: equipment, error } = await supabase
      .from('equipment')
      .update({
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        category: data.category,
        image_url: data.imageUrl,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(equipment);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE equipment
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    const { error } = await supabase
      .from('equipment')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
