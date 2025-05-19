import CategoryItem from './CategoryItem';

type Props = {
  categories: string[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <ul className="list-group">
      {categories.map((cat) => (
        <CategoryItem key={cat} name={cat} />
      ))}
    </ul>
  );
}
