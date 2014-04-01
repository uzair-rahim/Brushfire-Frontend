<style type="text/css">
	#app-header .btn-group:last-child{
		margin: 3px 0 0 -5px;
	}
	#nav-menu{
		float: right;
	}
	.filter-section{
		display: block;
		float: left;
		width: 100%;
		clear: both;
		border-bottom: 1px solid #ced2d9;
		padding: 0 0 10px 0;
		box-shadow: 0 1px #ffffff;
	}

	.flyout.candidates h1{
		display: block;
		float: left;
		clear: both;
		margin: 10px;
		font-size: 14px;
		line-height: 14px;
		color: #444444;
	}
	.flyout.candidates label{
		font-weight: bold;
		margin: 10px;
	}
	.flyout.candidates a.clear-all{
		display: block;
		float: left;
		clear: both;
		margin: 4px 10px 10px 10px;
	}
	.flyout.candidates .auto-apply{
		display: block;
		float: left;
		clear: both;
		margin: 4px 10px 0 0;
	}
	.flyout.candidates .auto-apply label{
		font-weight: normal;
	}

	.flyout.candidates .checkbox-group label{
		text-transform: capitalize;
		margin: 2px 10px;
		font-weight: normal;
	}
	.filter-section label{
		float: left;
		clear: both;
	}

	.filter-section ul.rating{
		display: block;
		float: left;
		clear: both;
		margin: 0px 0px 0px 6px;
	}

	.filter-section ul.rating li{
		display: block;
		float: left;
		width: 26px;
		height: 24px;
		margin: 0px;
		background-image: url("images/icon-stars.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 248px 24px
	}

	#button-group{
		display: block;
		float: left;
		clear: both;
		margin: 10px;
	}
	@media screen and (max-width: 400px){
		.flyout{
			height: 380px;
			overflow: auto;
		}
	}
</style>
<div id="app-header">
	<div id="header-nav">
		<a id="app-logo" class="bf"></a>
		<div id="nav-icons">
			<!--
			<div class="btn-group">
				<button id="notifications" class="dropDown right new">0</button>
				<ul id="notifications-dropdown" class="dropDown-menu">
					<li><a>1 New candidates</a></li>
					<li><a>3 New Messages</a></li>
					<li><a>7 New Candidates</a></li>
				</ul>
			</div>
			-->
			<div class="btn-group">
				<button id="nav-extras" class="dropDown right"><span class="more icon"></span></button>
				<ul id="nav-extras-dropdown" class="dropDown-menu">
					<li><a id="settings">{{language.settings}}</a></li>
					<li class="divider"></li>
					<li><a id="logout">{{language.signOut}}</a></li>
					<li class="divider"></li>
					<li><a id="help">Help</a></li>
					<li><a id="report-problem">Report a Problem</a></li>
				</ul>
			</div>
		</div>
		<ul id="nav-menu">
			<li><a id="jobs" data-menu="jobs">{{language.jobs}}</a></li>
			<li><a id="network" data-menu="network">{{language.network}}</a></li>
			<li><a id="candidates" data-menu="candidates">{{language.candidates}}</a></li>
		</ul>
	</div>
	<div id="header-actions">
		<ul id="header-location"></ul>
		<div id="display-icons">
			<button disabled id="filter"><span class="filter icon"></span></button>
			<!-- <button disabled><span class="search icon"></span></button> -->
			<!-- <button><span class="expand icon"></span></button> -->
		</div>
	</div>
</div>
<div id="app-filter" class="flyout candidates">
	<h1>9 total matches</h1>
	<a id="filter-clear-all" class="clear-all">Clear All</a>
	<div class="auto-apply">
		<input id="auto-apply" type="checkbox"/>
		<label for="auto-apply">Auto Apply Selection</label>
	</div>
	<div class="filter-section">
		<label>Position</label>
		<ul class="checkbox-group">
			{{#each jobTypes}}
				<input id="{{guid}}" type="checkbox"/>
				<label for="{{guid}}">{{name}}</label>
			{{/each}}
		</ul>
	</div>
	<!--
	<div class="filter-section">
		<label>Tip Percentage</label>
	</div>
	<div class="filter-section">
		<label>Match Percentage</label>
		<ul id="rating-filter" class="rating">
			<li>&nbsp;</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
		</ul>
	</div>
	<div class="filter-section">
		<ul class="checkbox-group" style="margin-top:6px;">
			<li>
				<input id="referred" type="checkbox"/>
				<label for="referred">Referred Candidates</label>		
			</li>
			<li>
				<input id="application" type="checkbox"/>
				<label for="application">Application Request Sent</label>		
			</li>
			<li>
				<input id="interview" type="checkbox"/>
				<label for="interview">Interview Request Sent</label>		
			</li>
		</ul>
	</div>
	-->
	<div id="button-group">
		<button class="primary" id="search-filter">Search</button>
		<a id="cancel-filter">Cancel</a>
	</div>
</div>
<div id="app-body"></div>