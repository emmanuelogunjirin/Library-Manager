import React, { useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(1);
  const history = useHistory();

  const logoutUser = () => {
    auth.signOut();
    history.push("/");
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 1) {
      history.push("/home");
    } else if (index === 2) {
      history.push("/home/search");
    } else if (index === 3) {
      history.push("/home/favorites");
    } else if (index === 4) {
      history.push("/home/profile");
    } else if (index === 5) {
      logoutUser();
    }
  };

  return (
    <div>
      <List component="navigation" aria-label="mainDivider">
        <ListSubheader inset>Main Actions</ListSubheader>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <FavoritesIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
      <Divider />
      <List component="navigation" aria-label="secondaryDivider">
        <ListSubheader inset>Account Actions</ListSubheader>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
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
