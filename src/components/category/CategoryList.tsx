import CategoryItem from './CategoryItem';

const dummyCategories = ['Работа', 'Учёба', 'Личное'];

export default function CategoryList() {
  return (
    <ul className="list-group">
      {dummyCategories.map((cat) => (
        <CategoryItem key={cat} name={cat} />
      ))}
    </ul>
  );
}
