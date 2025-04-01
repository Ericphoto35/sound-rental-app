import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const category = formData.get('category');
    const image = formData.get('image');
    let imageUrl = formData.get('imageUrl');

    // Si une nouvelle image est uploadée
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('equipment-images')
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('equipment-images')
        .getPublicUrl(fileName);

      imageUrl = publicUrl;
    }

    const { data: equipment, error } = await supabase
      .from('equipment')
      .insert([{
        name,
        description,
        price: parseFloat(price),
        category,
        image_url: imageUrl,
      }])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(equipment);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT update equipment
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const category = formData.get('category');
    const image = formData.get('image');
    let imageUrl = formData.get('imageUrl');

    // Extraire l'ID de l'URL
    const id = request.url.split('/').pop();

    // Si une nouvelle image est uploadée
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('equipment-images')
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('equipment-images')
        .getPublicUrl(fileName);

      imageUrl = publicUrl;
    }

    const { data: equipment, error } = await supabase
      .from('equipment')
      .update({
        name,
        description,
        price: parseFloat(price),
        category,
        image_url: imageUrl,
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
