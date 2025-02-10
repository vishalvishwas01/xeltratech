import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "./Example.css";

export default function Example() {
  return (
    <Menu menuButton={<MenuButton className="menu-button">Services</MenuButton>}>
      {/* Mobile App UI */}
      <SubMenu label="Mobile App Ui">
        <MenuItem>
          <a href="#" target="_blank">Mobile App Ui</a>
        </MenuItem>
        <MenuItem>
          <a href="#" target="_blank">Hybrid Development</a>
        </MenuItem>
        <MenuItem>
          <a href="#" target="_blank">IOS App Development</a>
        </MenuItem>
      </SubMenu>

      {/* Website Design */}
      <SubMenu label="Website Design">
        <MenuItem>
          <a href="#" target="_blank">Logo Design</a>
        </MenuItem>
        <MenuItem>
          <a href="#" target="_blank">React Design</a>
        </MenuItem>
      </SubMenu>

      {/* Website Development */}
      <SubMenu label="Website Development">
        <MenuItem>
          <a href="#" target="_blank">PHP Development</a>
        </MenuItem>
        <MenuItem>
          <a href="#" target="_blank">WordPress Development</a>
        </MenuItem>
      </SubMenu>

      {/* Digital Marketing */}
      <SubMenu label="Digital Marketing">
        <MenuItem>
          <a href="#" target="_blank">SEO Consulting</a>
        </MenuItem>
        <MenuItem>
          <a href="#" target="_blank">Social Media Marketing</a>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
}
