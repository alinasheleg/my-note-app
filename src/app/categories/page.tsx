'use client';

import { useState, useEffect } from 'react';
import CategoryForm from '@/components/category/CategoryForm';
import CategoryList from '@/components/category/CategoryList';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false); // флаг что категории загружены

  // Загружаем из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('categories');
    if (saved) {
      setCategories(JSON.parse(saved));
    }
    setLoaded(true); // только после загрузки включаем сохранение
  }, []);

  // Сохраняем в localStorage, но только после первой загрузки
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories, loaded]);

  const handleAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  const handleEditCategory = (oldName: string, newName: string) => {
    if (!categories.includes(newName)) {
      setCategories(categories.map((cat) => (cat === oldName ? newName : cat)));
    }
  };

  const handleDeleteCategory = (name: string) => {
    setCategories(categories.filter((cat) => cat !== name));
  };

  return (
    <div className="container my-4">
      <h2>Категории</h2>
      <CategoryForm onAddCategory={handleAddCategory} />
      <CategoryList
        categories={categories}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
}
