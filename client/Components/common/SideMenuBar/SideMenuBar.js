import React, { Component } from "react";
import styles from "./sideMenu.scss";
import sideMenu from "./SideMenuList.json";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Grid, Row, Col } from 'react-bootstrap';

const search_design = {
  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }
};

class SideMenuBar extends Component{
		constructor(props){
		super(props);
		this.state = {
			searchValue: "",
			sideMenuDetails: sideMenu,
			toggleSubMenu: false,
			menuSelected: "" 
		};
	}

	handleSearch(e) {

	}
	openSubMenuSelection(data){
		let getMenuSelected = data.name;
		if(this.state.menuSelected){
			this.setState({
				menuSelected: "",
				toggleSubMenu: true
			})
		}else if(this.state.menuSelected === ""){
			this.setState({
				menuSelected: getMenuSelected,
				toggleSubMenu: false
			})
		}
		console.log("state", this.state.menuSelected);
	}
	render() {
		var displayMenu = [];
		if(this.state.sideMenuDetails) {
			displayMenu = this.state.sideMenuDetails.map((data, idx) =>{
				return (
					<div key={"side_menu_index" + idx}>
					<div className="container-fluid">
					<div className="row clearfix">
					<div className="col-xs-3 col-sm-3 col-md-3 text-right">
						<span className="glyphicon glyphicon-th-large side-menu-title"></span>
					</div>
					<div className="col-xs-5 col-sm-5 col-md-5 side-menu-title">{data.label}</div>
					
						<div className="col-xs-4 col-sm-4 col-md-4 side-menu-arrow text-right">
						{(this.state.menuSelected === data.name && this.state.toggleSubMenu === false) ?
							<span className="glyphicon glyphicon-menu-down side-menu-downIcon"
							onClick={this.openSubMenuSelection.bind(this, data)}></span>
							:
						    <IconButton onClick={this.openSubMenuSelection.bind(this, data)}>
						    	<div className="close-menu">  
					            	<ChevronLeftIcon color={'#fff'}  />
					       		</div>
						    </IconButton>

						}
						</div>

					</div>	
					{(this.state.menuSelected === data.name && this.state.toggleSubMenu === false) ?
					<div className="row sub-menu-option" style={{paddingTop: "10px"}}>
						<div className="tree-structure-menu">
							{data.subMenu.map((title, idx) => {
								return (
									<div key={"sub_title" + idx}>
										<ul style={{marginBottom: "2px"}}>
										<li>{title.label}</li>
										</ul>
									</div>
								);
							})}
						</div>
					</div>	:
					null}
					</div>			
					</div>
				);
			})
		}
		return (
			<div className="hptl-phase1-sideMenuBar">
				{/*<TextField
		          	id="name"
		          	label="Name"
		          	value={this.state.searchValue}
		          	placeholder="Search..."
		          	style={search_design}
		          	onChange={this.handleSearch.bind(this)}
		          	margin="normal"
		        />*/}
		        <div className="sideMenu-header">
		        {displayMenu}
		        </div>
			</div>
		);
	}
}

export default SideMenuBar;