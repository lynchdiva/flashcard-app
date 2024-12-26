import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './DropdownMenu.scss';

export default function DropdownMenu() {
  return (
    <DropdownButton
      variant="custom"
      align="end"
      title="Words All"
      id="dropdown-menu-align-end"
      className="custom-btn"
    >
      <Dropdown.Item>In progress</Dropdown.Item>
      <Dropdown.Item>Learned</Dropdown.Item>
      <Dropdown.Item>Words all</Dropdown.Item>
    </DropdownButton>
  );
}
