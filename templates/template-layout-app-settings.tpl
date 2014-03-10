<style type="text/css">
	#settings-menu{
		display: block;
		float: left;
		width: 190px;
		height: 100%;
	}
	#settings-menu h1{
		display: block;
		float: left;
		clear: both;
		margin: 30px 0 0 20px;
		color: #959ba2;
		font-size: 20px;
		font-weight: normal;
		line-height: 22px;
	}
	#settings-menu .menu-section{
		display: block;
		float: left;
		clear: both;
		margin: 34px 0 0 20px;
		width: 140px;
	}
	#settings-menu .menu-section label{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		line-height: 18px;
		font-size: 11px;
		color: #959ba2;
		text-indent: 2px;
		text-transform: uppercase;
		border-bottom: 1px solid #e0e0e0;
	}
	#settings-menu .menu-section ul{
		display: block;
		float: left;
		clear: both;
		width: 100%;
	}
	#settings-menu .menu-section ul li{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 100%;
		margin: 10px 0 0 0;
	}
	#settings-menu .menu-section ul li a{
		display: block;
		float: left;
		clear: both;
		width: 140px;
		color: #2d3c4b;
		font-size: 12px;
		line-height: 16px;
		text-indent: 6px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	#settings-menu .menu-section ul li a.selected,
	#settings-menu .menu-section ul li a:hover{
		color: #4ea6e5;	
	}

	#settings-menu .menu-section ul li span{
		display: block;
		float: left;
		clear: both;
		width: 140px;
		color: #959ba2;
		font-size: 12px;
		line-height: 16px;
		text-indent: 6px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	#settings-menu .menu-section button{
		float: left;
		clear: both;
		width: 130px;
		margin: 20px 0 0 5px;
	}

	#settings-content{
		display: block;
		float: left;
		width: calc(100% - 190px);
		height: 100%;
		overflow: auto;
	}
	#settings-head{
		display: block;
		float: left;
		clear: both;
		margin: 25px 0 0 0;
		width: calc(100% - 20px);
		height: 34px;
		border-bottom: 1px solid #e0e0e0;
	}
	#settings-head h1{
		display: block;
		float: left;
		clear: both;
		margin: 0 0 0 2px;
		color: #2d3c4b;
		font-size: 18px;
		font-weight: normal;
		line-height: 34px;
	}
	#settings-head button#closeSettings{
		float: right;
		margin: 0;
		line-height: 12px;
	}
	#settings-body{
		display: block;
		float: left;
		clear: both;
		width: calc(100% - 20px);
		height: 100%;
	}
</style>
<div id="settings-menu">
	<h1>Settings</h1>
	<div class="menu-section">
		<label>General</label>
		<ul>
			<li><a>Account Settings</a></li>
		</ul>
	</div>
	<div class="menu-section">
		<label>Profiles</label>
		<ul>
			{{#each employerProfiles}}
				<li>
					<a id="profile-name" class="selected">{{this.attributes.name}}</a>
					<span>{{this.attributes.location.address1}}</span>
				</li>
			{{/each}}
		</ul>
		<button>Add New Profile</button>
	</div>
</div>
<div id="settings-content">
	<div id="settings-head">
		<h1>Profile Settings</h1>
		<button id="closeSettings">Close</button>
	</div>
	<div id="settings-body"></div>
</div>