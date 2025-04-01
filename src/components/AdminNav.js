'use client';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminNav() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Administration
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
}
