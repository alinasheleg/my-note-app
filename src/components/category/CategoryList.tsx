import CategoryItem from './CategoryItem';

type Props = {
  categories: string[];
  onEdit: (oldName: string, newName: string) => void;
  onDelete: (name: string) => void;
};

export default function CategoryList({ categories, onEdit, onDelete }: Props) {
  return (
    <ul className="list-group">
      {categories.map((cat) => (
        <CategoryItem
          key={cat}
          name={cat}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
