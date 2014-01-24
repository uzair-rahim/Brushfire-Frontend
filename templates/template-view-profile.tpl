<style type="text/css">
	.profile-container{
		display: block;
		float: left;
		width: 100%;
	}
	.profile-preview{
		display: block;
		float: left;
		width: 300px;
		height: 600px;
		margin: 0 0 0 50px;
		background-image: url('images/mobile.png');
		background-repeat: no-repeat;
		background-position: 0 0;
	}
	.profile-preview .preview-container{
		display: block;
		float: left;
		clear: both;
		width: 253px;
		height: 422px;
		margin: 87px 0 0 24px;
	}
	.profile-preview .preview-container .cover-photo{
		display: block;
		float: left;
		clear: both;
		width: 253px;
		height: 80px;
		background-color: #eaeaea; 
	}
	.profile-preview .preview-container .name{
		display: block;
		float: left;
		clear: both;
		font-size: 14px;
		margin: 8px 0 4px 0;
		font-weight: bold;
		text-indent: 8px;
	}
	.profile-preview .preview-container .address{
		display: block;
		float: left;
		clear: both;
		font-size: 12px;
		font-weight: normal;
		line-height: 24px;
		text-indent: 8px;
	}
	.edit-table{
		width: 100%;
	}
	.edit-table tr{
		border-bottom: 1px solid #eaeaea;
	}
	.edit-table tr:hover,
	.edit-table tr.selected{
		background-color: #f7f7f7;
	}
	.edit-table td{
		vertical-align: top;
		line-height: 28px;
		text-indent: 4px;
	}

	.edit-table td:nth-child(1){
		width: 120px;
		font-weight: bold;
	}

	.edit-table td:nth-child(2){
		color: #666666;
	}

	.edit-table td:nth-child(3){
		display: none;
	}

	.edit-table td:nth-child(4){
		width: 40px;
		color: #6089ab;
	}
	.field-container{
		display: block;
		float: left;
		margin: 6px 0;
	}
	.field-container .buttons{
		float: left;
		clear: both;
		margin: 10px 0 4px 0;
	}
	input[type="checkbox"]:checked + label:after, input[type="checkbox"]:checked + label:hover:after, input[type="checkbox"]:checked + label:focus:after, input.partial[type="checkbox"]:checked + label:after, input.partial[type="checkbox"]:checked + label:hover:after, input.partial[type="checkbox"]:checked + label:focus:after, input[type="radio"]:checked + label:after, input[type="radio"]:checked + label:hover:after, input[type="radio"]:checked + label:focus:after{
		left: calc(-100% + 9px);
	}
	button.dropDown{
		margin: 0 0 0 -5px;
	}
	button.dropDown:before{
		right: -3px;
	}
	.logo{
		display: block;
		float: left;
		clear: both;
		width: 100px;
		height: 100px;
		margin: 8px 0;
		border: 1px solid #dddddd;
		background-color: #ededed;
	}
	.cover{
		display: block;
		float: left;
		clear: both;
		width: 420px;
		height: 160px;
		margin: 8px 0;
		border: 1px solid #dddddd;
		background-color: #ededed;
	}
	td .btn-group{
		margin-left: 0;
	}
</style>

<div class="profile-container">
	<table class="edit-table">
		<tbody>
			<tr>
				<td>Name:</td>
				<td>PF Changs</td>
				<td>
					<div class="field-container">
						<input type="text" name="name" id="name" value="PF Changs"/>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Address:</td>
				<td>201 San Jancinto Blvd, Austin, TX 78701</td>
				<td>
					<div class="field-container">
						<input type="text" name="address" id="address" value="201 San Jancinto Blvd, Austin, TX 78701"/>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Phone:</td>
				<td>(512) 457-8300</td>
				<td>
					<div class="field-container">
						<input type="text" name="phone" id="phone" value="5124578300"/>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Website:</td>
				<td>http://www.pfchangs.com</td>
				<td>
					<div class="field-container">
						<input type="text" name="website" id="website" value="http://www.pfchangs.com"/>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Open Hours:</td>
				<td>Mon - Thu, Sun: 11a - 11p | Fri - Sat: 11a - 12a</td>
				<td>
					<div class="field-container">
						<input type="text" name="hours" id="hours" value="Mon - Thu, Sun: 11a - 11p | Fri - Sat: 11a - 12a"/>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>PPA:</td>
				<td>$$$$</td>
				<td>
					<div class="field-container">
						<div class="btn-group">
							<button id="ppa" class="dropDown">$$$$ Splurge $60+</button>
							<ul class="dropDown-menu">
								<li><a>$ Cheap ($10 or less)</a></li>
								<li><a>$$ Moderate ($11 to $30)</a></li>
								<li><a>$$$ Spendy ($31 to $60)</a></li>
								<li><a>$$$$ Splurge ($60 or more)</a></li>
							</ul>
						</div>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Endorsements:</td>
				<td>Allow on profile</td>
				<td>
					<div class="field-container">
						<input type="checkbox" id="allow" checked/>
						<label for="allow" style="margin:0 0 0 -5px">Allow on profile</label>
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Logo:</td>
				<td>
					<div class="logo"></div>
				</td>
				<td>
					<div class="field-container">
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td>Cover Photo:</td>
				<td>
					<div class="cover"></div>
				</td>
				<td>
					<div class="field-container">
						<div class="buttons">
							<button class="primary">Save</button>
							<button class="cancel">Cancel</button>
						</div>
					</div>
				</td>
				<td>Edit</td>
			</tr>
		</tbody>
	</table>
</div>