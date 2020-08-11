import React from 'react';
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
		Divider,
		Hidden,
		withWidth,
		Typography
 } from "@material-ui/core";
import {
	Home,
	EmojiPeople,
	Work,
	RecentActors
} from "@material-ui/icons";

const Lista = () => {
    return (
			<div>
				<Hidden smDown>

					<List component= 'nav'>
						<ListItem button>
							<ListItemIcon>
								<Home fontSize='large' color = 'primary'/>
							</ListItemIcon>
							<ListItemText primary ='Home'/>
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<EmojiPeople fontSize='large' color = 'primary'/>
							</ListItemIcon>
							<ListItemText primary ='About Me'/>
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<Work fontSize='large' color = 'primary'/>
							</ListItemIcon>
							<ListItemText primary ='Work'/>
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<RecentActors fontSize='large' color = 'primary'/>
							</ListItemIcon>
							<ListItemText primary ='Contact Me'/>
						</ListItem>

						<Divider /> 

					</List>
				</Hidden>
			</div>
    );
}

export default Lista;