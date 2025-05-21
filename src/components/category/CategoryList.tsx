'use client';

import { Category } from "@/store/useCategoriesStore";
import CategoryItem from "./CategoryItem";

type Props = {
  categories: Category[];
  onEditCategory: (id: number, name: string) => void;
  onDeleteCategory: (id: number) => void;
};

export default function CategoryList({ categories, onEditCategory, onDeleteCategory }: Props) {
  if (categories.length === 0) return <p>Категорий пока нет.</p>;

  return (
    <ul>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onEditCategory={onEditCategory}
          onDeleteCategory={onDeleteCategory}
        />
      ))}
    </ul>
  );
}
