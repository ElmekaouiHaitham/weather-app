import { TiWeatherPartlySunny } from 'react-icons/ti';
import { MdLocationPin } from 'react-icons/md';
import { FaMap } from 'react-icons/fa';
import { RiListSettingsFill } from 'react-icons/ri';

const Sidebar = () => (
  <aside className="hidden lg:block w-full lg:w-1/5 bg-gray-800 p-6 lg:p-8">
    <div className="mb-8">
      <h1 className="text-xl font-bold mb-4 text-white">Weather</h1>
      <ul>
        <li className="mb-4 text-xl">
          <a href="#" className="flex items-center text-blue-500">
            <TiWeatherPartlySunny className="mr-2" />
            Weather
          </a>
        </li>
        <li className="mb-4 text-xl">
          <a href="#" className="flex items-center text-gray-400">
            <MdLocationPin className="mr-2" />
            Cities
          </a>
        </li>
        <li className="mb-4 text-xl">
          <a href="#" className="flex items-center text-gray-400">
            <FaMap className="mr-2" />
            Map
          </a>
        </li>
        <li className="mb-4 text-xl">
          <a href="#" className="flex items-center text-gray-400">
            <RiListSettingsFill className="mr-2" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;
