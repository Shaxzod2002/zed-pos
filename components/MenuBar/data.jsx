import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai';
import { FcSalesPerformance } from 'react-icons/fc';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { MdPaid } from 'react-icons/md';
let index = 0;
export const Links = [
  {
    id: index++,
    text: 'Asosiy',
    href: '/home',
    icon: <AiOutlineHome />,
  },
  {
    id: index++,
    text: 'Sotuv',
    href: '/sale/goods',
    icon: <FcSalesPerformance />,
  },
  {
    id: index++,
    text: 'Mahsulotlar',
    href: '/products/products',
    icon: <AiOutlineShopping />,
  },
  {
    id: index++,
    text: 'Mijozlar',
    href: '/customers',
    icon: <FiUsers />,
  },
  {
    id: index++,
    text: 'Xarajatlar',
    href: '/expenses',
    icon: <MdPaid />,
  },
  {
    id: index++,
    text: 'Sozlanmalar',
    href: '/settings',
    icon: <FiSettings />,
  },
];
