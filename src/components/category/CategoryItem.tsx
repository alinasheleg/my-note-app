type Props = {
  name: string;
};

export default function CategoryItem({ name }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <button className="btn btn-sm btn-outline-primary me-2">Редактировать</button>
        <button className="btn btn-sm btn-outline-danger">Удалить</button>
      </div>
    </li>
  );
}
