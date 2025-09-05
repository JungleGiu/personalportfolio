export const SideBar = ({ cat, categories, setCategory }) => {
  return (
    <aside className="w-1/5 min-w-fit min-h-screen flex flex-col  border-r-2 border-blue-950 dark:border-gray-200">
      <div className="">
        <h2 className="text-lg pt-5 font-bold border-b-2 border-l-2 pl-5 text-blue-950 dark:text-gray-300">
          {cat}
        </h2>
        <ul className="px-5 pt-5">
          {categories.map((category) => (
            <li
              className="group cursor-pointer text-blue-950 hover:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setCategory(category)}
              key={category}
            >
              <span className="group-hover:animate-blink animate:none">_</span>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
