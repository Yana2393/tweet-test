import css from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/oprations";
import { getUsers } from "../../redux/selectors";
import { UserCard } from "../UserCard/UserCard";
import Select from 'react-select'

const options = [
  { value: 'all', label: 'Show all' },
  { value: 'follow', label: 'Show follow' },
  { value: 'followings', label: 'Show followings' }
]
const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: 'rgba(235, 216, 255, 1)', // Стилизация фона окна
      height: '50px',
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'rgba(255, 255, 255, 0.10)'
        : isFocused
        ? 'rgba(255, 255, 255, 0.10)'
        : 'transparent', // Стилизация фона активной опции и ховера
      color: isSelected ? 'rgba(55, 55, 55, 1)' : '#FBFBFB', // Стилизация цвета текста активной опции в списке
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    menu: provided => ({
      ...provided,
      background:
        'rgba(235, 216, 255, 1)', // Градиентный фон для списка опций
    }),
    singleValue: provided => ({
      ...provided,
      color: 'rgba(55, 55, 55, 1)', // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'transparent', // Цвет разделителя
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: 'rgba(87, 54, 163, 1)',
    }),
    container: provided => ({
      ...provided,
      border: '1px solid rgba(235, 216, 255, 1)',
      borderRadius: '8px',
      outline: 'none',
    }),
    menuList: base => ({
      ...base,
      height: '120px',

      '::-webkit-scrollbar': {
        display: 'none',
      },
      overflowY: 'scroll',
    }),
  };

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users } = useSelector(getUsers);

  return (
    <div className={css.homeCardWrap}>
      <Select options={options} className={css.homeSelect} styles={customStyles}/>
      <ul className={css.homeList}>
        {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
      </ul>
    </div>
  );
};