function SectionTitle({ title }) {
  return (
    <ul className="flex items-center">
      <li className="bg-tit-icon bg-contain bg-no-repeat bg-center w-8 h-8"></li>
      <li>
        <h2 className="font-mimi text-2xl sm:text-lg">{title}</h2>
      </li>
    </ul>
  );
}

export default SectionTitle;
