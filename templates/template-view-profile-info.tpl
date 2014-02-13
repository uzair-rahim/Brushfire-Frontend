<style type="text/css">
	ul.pills{
		display: block;
		float: left;
		clear: both;
		margin: 18px 0;
	}
	ul.pills li{
		display: block;
		float: left;
		margin: 0 20px 0 0;
	}
	ul.pills li a{
		display: block;
		float: left;
		line-height: 24px;
		padding: 0 12px;
		color: #2d3c4b;
	}
	ul.pills li a.selected{
		color: #fcfeff;
		background-color: #2d3c4b;
		border-radius: 2px;
	}
	div.profile-cover{
		display: block;
		float: left;
		clear: both;
		width: calc(100% - 2px);
		margin: 0 0 10px 0;
		border :1px solid #e2e4e5;
	}
	div.profile-cover div.profile-map{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 164px;
		background-color: #f0f0f0;
	}
	div.profile-cover div.profile-info{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 84px;
		background-color: #ffffff;
		border-top :1px solid #e2e4e5;
	}
	div.profile-cover div.profile-info div.name{
		display: block;
		float: left;
		clear: both;
		margin: 20px 0 2px 10px;
		color: #2d3c4b;
		font-size: 22px;
		font-weight: bold;
		line-height: 24px;
	}
	div.profile-cover div.profile-info div.address{
		display: block;
		float: left;
		clear: both;
		margin: 0 0 0 10px;
		color: #959ba2;
		font-size: 16px;
		line-height: 18px;
	}
	div.editable-list{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0 0 0;
	}
	div.editable-list > label{
		display: block;
		float: left;
		clear: both;
		color: #2d3c4b;
		font-size: 12px;
		line-height: 16px;
		font-weight: bold;
		text-transform: uppercase;
	}
	div.editable-list ul{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0;
	}
	div.editable-list ul li{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 100%;
		border-bottom:1px dotted #bfbfbf;
	}
	div.editable-list ul li:hover{
		background-color: #f9f9f9;
	}
	div.editable-list ul li label{
		display: block;
		float: left;
		width: 80px;
		margin: 0 0 0 2px;
		color: #626970;
		font-size: 12px;
		font-weight: bold;
		line-height: 30px;
	}
	div.editable-list ul li span{
		display: block;
		float: left;
		margin: 0 0 0 2px;
		color: #6d757b;
		font-size: 12px;
		line-height: 30px;
	}
	div.editable-list ul li span.empty{
		color: #b1b1b1;
		font-style: italic;
	}
	div.editable-list ul li a{
		display: block;
		float: right;
		margin: 0 2px 0 0;
		font-size: 12px;
		color: #4ea6e5;
		line-height: 30px;
	}
	div.editable-list ul li:hover a,
	div.editable-list ul li a:hover{
		text-decoration: underline;
	}
</style>
<ul class="pills">
	<li><a class="selected">Profile Info</a></li>
	<li><a>Profile Admins</a></li>
</ul>
<div class="profile-cover">
	<div class="profile-map"></div>
	<div class="profile-info">
		<div class="name">{{employerProfiles.name}}</div>
		<div class="address">{{employerProfiles.location.address1}}, {{employerProfiles.location.city}} {{employerProfiles.location.state}} {{employerProfiles.location.zip}}</div>
	</div>
</div>
<div class="editable-list">
	<label>Profile Info</label>
	<ul>
		<li>
			<label>Name</label>
			<span>{{employerProfiles.name}}</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Address</label>
			<span>{{employerProfiles.location.address1}}, {{employerProfiles.location.city}} {{employerProfiles.location.state}} {{employerProfiles.location.zip}}</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Description</label>
			<span class="empty">Tell us a little about your store.</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Website</label>
			<span>{{employerProfiles.url}}</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Email</label>
			<span>congress.ave@hopdoddy.com</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Phone</label>
			<span>{{employerProfiles.phone}}</span>
			<a>Edit</a>
		</li>
		<li>
			<label>Hours</label>
			<a>Edit</a>
		</li>
	</ul>
</div>