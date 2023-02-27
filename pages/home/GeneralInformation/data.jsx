import { MdOutlinePriceCheck } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { GiTakeMyMoney, GiMoneyStack } from 'react-icons/gi';
let index = 0;
export const information = [
  {
    id: index++,
    icon: <MdOutlinePriceCheck />,
    title: 'Sotuvlar',
    text: "0 so'm",
  },
  {
    id: index++,
    icon: <FaMoneyCheckAlt />,
    title: 'Daromad',
    text: "0 so'm",
  },
  {
    id: index++,
    icon: <GiTakeMyMoney />,
    title: 'Foyda',
    text: "0 so'm",
  },
  {
    id: index++,
    icon: <GiMoneyStack />,
    title: 'Xarajat',
    text: "0 so'm",
  },
];
