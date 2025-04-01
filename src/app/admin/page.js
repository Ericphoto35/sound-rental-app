'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import AdminNav from '../../components/AdminNav';
import ProtectedRoute from '../../components/ProtectedRoute';
import Footer from '../../components/Footer';

export default function AdminPage() {
  const [equipment, setEquipment] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEquipment, setNewEquipment] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    status: 'disponible',
  });

  useEffect(() => {
    fetchEquipment();
  }, []);

  async function fetchEquipment() {
    const { data, error } = await supabase
      .from('equipment')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Erreur lors de la récupération des équipements:', error);
    } else {
      setEquipment(data);
    }
  }

  const handleAddEquipment = async () => {
    const { data, error } = await supabase
      .from('equipment')
      .insert([
        {
          name: newEquipment.name,
          description: newEquipment.description,
          price: parseFloat(newEquipment.price),
          category: newEquipment.category,
          status: newEquipment.status,
        },
      ])
      .select();

    if (error) {
      console.error('Erreur lors de l\'ajout:', error);
    } else {
      setEquipment([...equipment, data[0]]);
      setOpenDialog(false);
      setNewEquipment({
        name: '',
        description: '',
        price: '',
        category: '',
        status: 'disponible',
      });
    }
  };

  const handleDeleteEquipment = async (id) => {
    const { error } = await supabase
      .from('equipment')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erreur lors de la suppression:', error);
    } else {
      setEquipment(equipment.filter((item) => item.id !== id));
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen">
        <AdminNav />
        <Container className="flex-grow" sx={{ mt: 4, mb: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h4" component="h1">
              Administration
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenDialog(true)}
            >
              Ajouter un équipement
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Prix</TableCell>
                  <TableCell>Catégorie</TableCell>
                  <TableCell>Statut</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.price}€</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteEquipment(item.id)}
                      >
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Ajouter un équipement</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Nom"
                fullWidth
                value={newEquipment.name}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, name: e.target.value })
                }
              />
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                multiline
                rows={3}
                value={newEquipment.description}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, description: e.target.value })
                }
              />
              <TextField
                margin="dense"
                label="Prix"
                fullWidth
                type="number"
                value={newEquipment.price}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, price: e.target.value })
                }
              />
              <TextField
                margin="dense"
                label="Catégorie"
                fullWidth
                value={newEquipment.category}
                onChange={(e) =>
                  setNewEquipment({ ...newEquipment, category: e.target.value })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Annuler</Button>
              <Button onClick={handleAddEquipment} variant="contained" color="primary">
                Ajouter
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
