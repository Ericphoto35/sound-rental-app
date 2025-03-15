'use client';
import { useState, useEffect } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function AdminPage() {
  const [equipment, setEquipment] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: '', description: '', price: '', category: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      const response = await fetch('/api/equipment');
      const data = await response.json();
      setEquipment(data);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  const handleOpenDialog = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setIsEditing(true);
    } else {
      setCurrentItem({ name: '', description: '', price: '', category: '', imageUrl: '' });
      setIsEditing(false);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentItem({ name: '', description: '', price: '', category: '', imageUrl: '' });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const url = isEditing ? `/api/equipment/${currentItem.id}` : '/api/equipment';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentItem),
      });

      if (response.ok) {
        fetchEquipment();
        handleCloseDialog();
      }
    } catch (error) {
      console.error('Error saving equipment:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet équipement ?')) {
      try {
        const response = await fetch(`/api/equipment/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchEquipment();
        }
      } catch (error) {
        console.error('Error deleting equipment:', error);
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Administration du Matériel</h1>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleOpenDialog()}
        >
          Ajouter un équipement
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>Catégorie</TableCell>
              <TableCell>Image URL</TableCell>
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
                <TableCell>{item.imageUrl}</TableCell>
                <TableCell>
                  <Button 
                    color="primary" 
                    onClick={() => handleOpenDialog(item)}
                    className="mr-2"
                  >
                    Modifier
                  </Button>
                  <Button 
                    color="error" 
                    onClick={() => handleDelete(item.id)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{isEditing ? 'Modifier l\'équipement' : 'Ajouter un équipement'}</DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Nom"
              name="name"
              value={currentItem.name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={currentItem.description}
              onChange={handleInputChange}
              multiline
              rows={3}
            />
            <TextField
              fullWidth
              label="Prix"
              name="price"
              type="number"
              value={currentItem.price}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Catégorie"
              name="category"
              value={currentItem.category}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="URL de l'image"
              name="imageUrl"
              value={currentItem.imageUrl}
              onChange={handleInputChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {isEditing ? 'Modifier' : 'Ajouter'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
