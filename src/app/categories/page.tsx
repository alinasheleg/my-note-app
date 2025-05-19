'use client';

import CategoryForm from '@/components/category/CategoryForm';
import CategoryList from '@/components/category/CategoryList';


export default function CategoriesPage() {
  return (
    <>
      <h2>Категории</h2>
      <CategoryForm />
      <CategoryList />
    </>
  );
}
