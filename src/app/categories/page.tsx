'use client';

import { useState } from 'react';
import CategoryForm from '@/components/category/CategoryForm';
import CategoryList from '@/components/category/CategoryList';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <>
      <h2>Категории</h2>
      <CategoryForm onAddCategory={handleAddCategory} />
      <CategoryList categories={categories} />
    </>
  );
}
