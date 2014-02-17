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
		margin: 0 10px 0 0;
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
		overflow: hidden;
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
		margin: 20px 0 2px 15px;
		color: #2d3c4b;
		font-size: 22px;
		font-weight: bold;
		line-height: 24px;
	}
	div.profile-cover div.profile-info div.address{
		display: block;
		float: left;
		clear: both;
		margin: 0 0 0 15px;
		color: #959ba2;
		font-size: 16px;
		line-height: 18px;
	}
	div.editable-list-container{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0 0 0;
	}
	div.editable-list-container > label{
		display: block;
		float: left;
		clear: both;
		color: #2d3c4b;
		font-size: 12px;
		line-height: 16px;
		font-weight: bold;
		text-transform: uppercase;
	}
	div.editable-list-container ul.editable-list{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0;
	}
	div.editable-list-container ul.editable-list > li{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 100%;
		border-bottom:1px dotted #bfbfbf;
	}
	div.editable-list-container ul.editable-list > li:hover{
		background-color: #f9f9f9;
	}
	div.editable-list-container ul.editable-list > li label{
		display: block;
		float: left;
		width: 80px;
		margin: 0 0 0 2px;
		color: #626970;
		font-size: 12px;
		font-weight: bold;
		line-height: 30px;
	}
	div.editable-list-container ul.editable-list > li span{
		display: block;
		float: left;
		margin: 0 0 0 2px;
		color: #6d757b;
		font-size: 12px;
		line-height: 30px;
	}
	div.editable-list-container ul.editable-list > li span.empty{
		color: #b1b1b1;
		font-style: italic;
	}
	div.editable-list-container ul.editable-list > li div.edit-mode{
		display: none;
		float: left;	
	}
	div.editable-list-container ul.editable-list > li div.edit-mode input{
		display: block;
		float: left;
		clear: both;
		font-size: 12px;
		margin: 7px 0 5px 0;
		padding: 4px 6px;
	}
	div.editable-list-container ul.editable-list > li div.edit-mode button{
		display: block;
		float: left;
		margin: 2px 5px 7px 0;
		padding: 4px 10px;
	}
	div.editable-list-container ul.editable-list > li a{
		display: block;
		float: right;
		margin: 0 2px 0 0;
		font-size: 12px;
		color: #4ea6e5;
		line-height: 30px;
	}
	div.editable-list-container ul.editable-list > li:hover a,
	div.editable-list-container ul.editable-list > li a:hover{
		text-decoration: underline;
	}
	div.editable-list-container ul.editable-list > li ul{
		display: block;
		float: left;
		margin: 5px 0;
	}
	div.editable-list-container ul.editable-list > li ul li{
		display: block;
		float: left;
		clear: both;
		text-align: left;
		line-height: 20px;
		width: 140px;
	}
	div.editable-list-container ul.editable-list > li ul li span{
		display: inline;
		float: right;
		line-height: 20px;
	}
</style>
<ul class="pills">
	<li><a class="selected">Profile Info</a></li>
	<li><a>Profile Admins</a></li>
</ul>
<div class="profile-cover">
	<div class="profile-map">
		<img src="http://maps.googleapis.com/maps/api/staticmap?center={{employerProfileInfo employerProfile 'address' 'value'}}&zoom=13&size=600x200&maptype=roadmap&markers=color:red%7Clabel:C%7C{{employerProfileInfo employerProfile 'address' 'value'}}&sensor=false"/>
	</div>
	<div class="profile-info">
		<div class="name">{{employerProfileInfo employerProfile "name" "value"}}</div>
		<div class="address">{{employerProfileInfo employerProfile "address" "value"}}</div>
	</div>
</div>
<div class="editable-list-container">
	<label>Profile Info</label>
	<ul class="editable-list">
		<li class="editable">
			<label>Name</label>
			<span class='{{employerProfileInfo employerProfile "name"}}'>{{employerProfileInfo employerProfile "name" "value"}}</span>
			<div class="edit-mode">
				<input type="text" id="employer-name" value='{{employerProfileInfo employerProfile "name"}}'/>
				<button class="primary save-changes">Save</button>
				<button class="cancel-edit">Cancel</button>
			</div>
			<a>Edit</a>
		</li>
		<li class="editable">
			<label>Address</label>
			<span class='{{employerProfileInfo employerProfile "address"}}'>{{employerProfileInfo employerProfile "address" "value"}}</span>
			<div class="edit-mode">
				<input type="text" id="employer-address" value='{{employerProfileInfo employerProfile "address" "value"}}'/>
				<button class="primary save-changes">Save</button>
				<button class="cancel-edit">Cancel</button>
			</div>
			<a>Edit</a>
		</li>
		<li>
			<label>Description</label>
			<span class='{{employerProfileInfo employerProfile "description"}}'>{{employerProfileInfo employerProfile "description" "value"}}</span>
			<a>Edit</a>
		</li>
		<li class="editable">
			<label>Website</label>
			<span class='{{employerProfileInfo employerProfile "website"}}'>{{employerProfileInfo employerProfile "website" "value"}}</span>
			<div class="edit-mode">
				<input type="text" id="employer-website" value='{{employerProfileInfo employerProfile "website" "value"}}'/>
				<button class="primary save-changes">Save</button>
				<button class="cancel-edit">Cancel</button>
			</div>
			<a>Edit</a>
		</li>
		<li>
			<label>Email</label>
			<span class='{{employerProfileInfo employerProfile "email"}}'>{{employerProfileInfo employerProfile "email" "value"}}</span>
			<a>Edit</a>
		</li>
		<li class="editable">
			<label>Phone</label>
			<span class='{{employerProfileInfo employerProfile "phone"}}'>{{employerProfileInfo employerProfile "phone" "value"}}</span>
			<div class="edit-mode">
				<input type="text" id="employer-phone" value='{{employerProfileInfo employerProfile "phone" "value"}}'/>
				<button class="primary save-changes">Save</button>
				<button class="cancel-edit">Cancel</button>
			</div>
			<a>Edit</a>
		</li>
		<li>
			<label>Hours</label>
			<ul>
				<li>Mon: <span>9:00AM to 9:00PM</span></li>
				<li>Tue: <span>9:00AM to 9:00PM</span></li>
				<li>Wed: <span>9:00AM to 9:00PM</span></li>
				<li>Thu: <span>9:00AM to 9:00PM</span></li>
				<li>Fri: <span>9:00AM to 9:00PM</span></li>
				<li>Sat: <span>9:00AM to 9:00PM</span></li>
				<li>Sun: <span>9:00AM to 9:00PM</span></li>
			</ul>
			<a>Edit</a>
		</li>
	</ul>
</div>