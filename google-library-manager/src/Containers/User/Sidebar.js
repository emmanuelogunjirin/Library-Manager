import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import HomeIcon from "@material-ui/icons/HomeRounded";
import BrowseIcon from "@material-ui/icons/MenuBookRounded";
import FavoritesIcon from "@material-ui/icons/FavoriteRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import PersonIcon from "@material-ui/icons/PersonRounded";
import LockIcon from "@material-ui/icons/LockRounded";

export const mainListItems = (
  <div>
    <ListSubheader inset>Main Actions</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BrowseIcon />
      </ListItemIcon>
      <ListItemText primary="Browse" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoritesIcon />
      </ListItemIcon>
      <ListItemText primary="My Favorites" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>System Actions</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);
