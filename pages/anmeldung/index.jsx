import FormLayout from "@/components/FormLayout";
import NewRegistry from "@/components/forms/NewRegistry";
import {
  DrawerHeader,
  drawerWidth,
} from "@/components/Layout/LayoutComponents";
import SidebarList from "@/components/Layout/List";
import { Divider, Drawer, Link } from "@mui/material";

const Anmeldung = () => {
  return (
    <FormLayout>
      <NewRegistry />
    </FormLayout>
  );
};

export default Anmeldung;
