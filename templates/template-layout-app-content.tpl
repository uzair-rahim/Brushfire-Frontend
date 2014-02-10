<style type="text/css">
	#app-header .btn-group:last-child{
		margin: 3px 0 0 -5px;
	}
	#nav-menu{
		float: right;
	}
</style>
<div id="app-header">
	<div id="header-nav">
		<a id="app-logo" class="bf"></a>
		<div id="nav-icons">
			<div class="btn-group">
				<button id="notifications" class="dropDown right new">0</button>
				<ul id="notifications-dropdown" class="dropDown-menu">
					<li><a>1 New Applicants</a></li>
					<li><a>3 New Messages</a></li>
					<li><a>7 New Candidates</a></li>
				</ul>
			</div>
			<div class="btn-group">
				<button id="nav-extras" class="dropDown right"><span class="more icon"></span></button>
				<ul id="nav-extras-dropdown" class="dropDown-menu">
					<li><a id="settings">{{language.settings}}</a></li>
					<li class="divider"></li>
					<li><a id="logout">{{language.signOut}}</a></li>
				</ul>
			</div>
		</div>
		<ul id="nav-menu">
			<li><a id="jobs" data-menu="jobs">{{language.jobs}}</a></li>
			<li><a id="jobs" data-menu="network">{{language.network}}</a></li>
		</ul>
	</div>
	<div id="header-actions">
		<ul id="header-location"></ul>
		<!--
		<div id="display-icons">
			<button disabled><span class="filter icon"></span></button>
			<button disabled><span class="search icon"></span></button>
			<button><span class="expand icon"></span></button>
		</div>
		-->
	</div>
</div>
<div id="app-body"></div>