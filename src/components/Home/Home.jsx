import css from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
      backgroundColor: 'rgba(87, 54, 163, 0.8)', // Стилизация фона окна
      height: '50px',
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? 'rgba(255, 255, 255, 0.3)'
        : isFocused
        ? 'rgba(255, 255, 255, 0.3)'
        : 'transparent', // Стилизация фона активной опции и ховера
      color: isSelected ? 'rgb(228,190,82)' : 'rgba(235, 216, 255, 1)', // Стилизация цвета текста активной опции в списке
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    menu: provided => ({
      ...provided,
      background:
        'rgba(87, 54, 163, 1)', // Градиентный фон для списка опций
    }),
    singleValue: provided => ({
      ...provided,
      color: 'rgb(228,190,82)', // Цвет текста активного селектора в окне
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
  const { users } = useSelector(getUsers);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedOption.value === 'all') {
      setFilteredUsers(users);
    } else if (selectedOption.value === 'follow') {
      const filtered = users.filter(user => !user.following);
      setFilteredUsers(filtered);
    } else if (selectedOption.value === 'followings') {
      const filtered = users.filter(user => user.following);
      setFilteredUsers(filtered);
    }
  }, [selectedOption, users]);

  const handleFilterChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className={css.homeCardWrap}>
      <Select
        value={selectedOption}
        onChange={handleFilterChange}
        options={options}
        className={css.homeSelect}
        styles={customStyles}
        theme={theme => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary50: 'rgba(255, 255, 255, 0.3)',
              primary: 'transparent',
              neutral40: 'rgb(228,190,82)', // ховер на птичку
              neutral20: 'transparent', // бордер
              neutral30: 'transparent', // ховер бордер
              neutral50: 'rgb(228,190,82)', // цвет плейсхолдера
              neutral80: 'rgb(228,190,82)',
            },
          })}
      />
      <ul className={css.homeList}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
