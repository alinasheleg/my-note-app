'use client';

import Link from "next/link";
import { useCategoriesStore } from "@/store/useCategoriesStore";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryList from "@/components/category/CategoryList";

export default function CategoriesPage() {
  const categories = useCategoriesStore((state) => state.categories);
  const addCategory = useCategoriesStore((state) => state.addCategory);
  const editCategory = useCategoriesStore((state) => state.editCategory);
  const deleteCategory = useCategoriesStore((state) => state.deleteCategory);

  return (
    <div className="max-w-md mx-auto py-6">
      <h2 className="text-xl font-semibold mb-4">Управление категориями</h2>
      
      <CategoryForm onAddCategory={addCategory} />
      
      <CategoryList
        categories={categories}
        onEditCategory={editCategory}
        onDeleteCategory={deleteCategory}
      />

      <div className="mt-4 d-flex justify-content-end">
        <Link href="/notes" className="btn btn-outline-secondary">
          ← назад
        </Link>
      </div>
    </div>
  );
}
