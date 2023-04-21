import { CgHashtag } from "react-icons/cg";
import { MdRecordVoiceOver } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const horizontalNavigation = [
  { value: "Special", route: "/" },
  { value: "Main", route: "/main" },
  { value: "Desserts", route: "/desserts" },
  { value: "Beverages", route: "/beverages" },
];

const Nav = () => {
  const [activeTab, setActiveTab] = useState("Special");
  const navigate = useNavigate();

  const handleNavChange = (nav) => {
    setActiveTab(nav.value);
    navigate(`${nav.route}`);
  };

  return (
    <nav className="flex flex-col gap-4 border px-2 pt-3 pb-0.5 rounded-md shadow-md">
      <section className="flex justify-between items-center ">
        <article className="flex gap-2 items-center">
          <p className="h-6 w-6 bg-black rounded-full"></p>
          <p className="font-semibold text-lg">Sacred Earth Cafe</p>
        </article>
        <article className="flex gap-2 items-center">
          <span className="p-1 border rounded-md drop-shadow-xl">
            <MdRecordVoiceOver className="text-2xl" />
          </span>
          <span className="p-1 border rounded-md drop-shadow-xl">
            <CgHashtag className="text-2xl lg" />
          </span>
        </article>
      </section>
      <ul className="flex list-none">
        {horizontalNavigation.map((nav) => (
          <li
            key={nav.value}
            className={`w-1/4 text-center p-1 cursor-pointer font-bold ${
              activeTab === nav.value
                ? "border-b-2 border-[#3CBCB4] text-[#3CBCB4]"
                : "text-gray-500 "
            }`}
            onClick={() => handleNavChange(nav)}
          >
            {nav.value}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
