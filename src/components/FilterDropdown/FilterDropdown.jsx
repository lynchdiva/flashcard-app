import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './FilterDropdown.scss';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

export default function FilterDropdown({
  chosenFilterItem,
  onChoseItem,
  filterItems
}) {
  return (
    <DropdownButton
      variant="custom"
      align="end"
      title={chosenFilterItem}
      id="dropdown-menu-align-end"
      className="custom-btn"
    >
      {filterItems.map(item => (
        <Dropdown.Item
          key={item}
          onClick={() => onChoseItem(item)}
          active={item === chosenFilterItem}
          disabled={item === chosenFilterItem}
          className="custom-item"
        >
          {item === chosenFilterItem && (
            <>
              <FaCheck />
              {'  '}
            </>
          )}
          {item}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

FilterDropdown.propTypes = {
  chosenFilterItem: PropTypes.string.isRequired,
  onChoseItem: PropTypes.func.isRequired,
  filterItems: PropTypes.arrayOf(PropTypes.string).isRequired
};
