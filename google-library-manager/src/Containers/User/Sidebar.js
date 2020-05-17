import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../Authentication/Firebase";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import HomeIcon from "@material-ui/icons/HomeRounded";
import FavoritesIcon from "@material-ui/icons/FavoriteRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import PersonIcon from "@material-ui/icons/PersonRounded";
import LockIcon from "@material-ui/icons/LockRounded";

function NavigationList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const history = useHistory();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 5) {
      logoutUser();
    }
  };
  const logoutUser = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <div>
      <List component="navigation" aria-label="mainDivider">
        <ListSubheader inset>Main Actions</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoritesIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
      <Divider />
      <List component="navigation" aria-label="secondaryDivider">
        <ListSubheader inset>Account Actions</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  );
}

export default NavigationList;
