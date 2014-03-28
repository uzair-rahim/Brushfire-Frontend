<style type="text/css">
	.toolbar{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0;
	}
	.toolbar button{
		margin: 0 6px 0 0;
	}

	.table-container{
		display: block;
		float: left;
		width: 100%;
		height: calc(100% - 50px);
	}

	.table-container.collapsed{
		width: calc(100% - 444px);
	}

	.card-container{
		display: none;
		float: left;
		margin: 0 0 0 10px;
		width: 0px;
		height: calc(100% - 50px);
	}

	.card-container.expanded{
		display: block;
		width: 430px;
	}

	#jobs-table tr.selected{
		background-color: #feffd8;
	}

 	#tableCheckBox + label{
 		margin: 4px 0 7px 0;
 	}

 	.dataTables_scroll{
 		border: 1px solid #cccccc;
 	}

 	table.data{
 		min-width: 1000px;
 	}

 	table.data,
 	table.data tbody tr{
 		border: none;
 	}

 	table.data tr.selected{
		background-color: #feffd8;
	}

	#jobs-table .dropDown-menu.status{
		position: fixed;
		width: 100px;
		min-width: 100px;
	}

	#jobs-table tr td{
		height: 45px;
	}

	#jobs-table tr td span.bold{
		font-weight: bold;
	}

	#jobs-table tr td span.light{
		display: block;
		clear: both;
		font-size: 11px;
		color: #888888;
		margin: 0 0 10px 0;
	}

	#jobs-table div.shift{
		float:left;
		clear:both;
		font-size: 12px;
		line-height:16px; 
	}

	#jobs-table div.shift span{
		font-weight: bold;
	}


	.card-container .card-container-header{
 		display: block;
 		float: left;
 		clear: both;
 		width: 100%;
 	}

 	.card-container-header ul.pills{
		clear: none;
		margin: 0 0 10px 0;
	}

	.card-container-header ul.pills li{
		margin: 0;
	}

	.card-container-header ul.pills li a{
		display: block;
		float: left;
		line-height: 24px;
		padding: 0 12px;
		color: #2d3c4b;
	}

	.card-container-header ul.pills li a span{
		color: #888888;
	}

	.card-container-header ul.pills li a.selected{
		color: #fcfeff;
		background-color: #2d3c4b;
		border-radius: 2px;
	}

 	.card-container .card-container-header .close{
 		display: block;
 		float: right;
 		width: 10px;
 		height: 10px;
 		margin: 15px 0 0 0;
 		font-size: 10px;
 		color: #9ea3aa;
 	}

	.card-container .card .card-header h2
	{
		font-size: 18px;
		line-height: 52px;
		margin-left: 10px;
		font-weight: normal;
		text-transform: capitalize;

		background-image: url(images/icon-share.png);
		background-position: right;
		background-repeat: no-repeat;
	}

	.card-container .card
	{
		display: block;
		float: left;
		width: calc(100% - 20px);
		background: #fff;
		border: 1px solid #cbd0d5;
		padding: 0 10px;
	}

	.card-container .card a
	{
		color: #256999;
		font-size: 13px;
		line-height: 16px;
	}

	.card-container .card a:hover
	{
		text-decoration: underline;
	}

	.card-container .card button.dropDown,
	.card-container .card .toggle button
	{
		margin-top: 3px;
	}

	 .card .card-header,
	 .card .card-footer
	{
		border-width: 0px;
		border-style: solid;
		border-color: #cbd0d5;
	}

	 .card .card-header
	{
		border-bottom-width: 1px;
	}

	 .card .card-footer
	{
		border-top-width: 1px;
		padding: 10px 0;
	}

	.card-container .card input.wage
	{
		width: 40px;
		margin-right: 2px;
		padding-left: 20px;
	}

	.card-container .card input.wage + span
	{
		display: inline-block;
		position: relative;
		float: left;
		font-size: 14px;
		top: 18px;
		left: 10px;
		color: #959ba2;
	}

	.card-container .card input.shift-time
	{
		width: 130px;
	}

	.card-container .card .input
	{
		display: inline-block;
		width: auto;
	}

	.card-container .card .input + span
	{
		font-size: 13px;
		color: #626970;
		font-weight: bold;
		margin-right: 10px;
	}

	.card-container .card .card-additions 
	{
		margin: 16px 0 5px 0;
	}

	.card-container .card .primary
	{
		margin-right: 10px;
	}

	.card-description{
		display: none;
	}

	.card-description textarea{
		width: 382px;
		margin: 5px 0 10px 0;
	}

	.dropDown-menu li a{
		line-height: 20px !important;
		text-decoration: none !important;
		text-transform: capitalize;
	}

	#job-position{
		text-transform: capitalize;
	}

	@media screen and (max-width: 900px){
		.table-container{
			clear: both;
			width: calc(100% - 2px);
		}
		.table-container.collapsed{
			width: calc(100% - 2px);
			height: 200px;
		}

		.card-container{
			clear: both;
			width: calc(100% - 2px);
			height: 400px;
			margin: 23px 0 0 0;
		}

		.card-container.expanded{
			width: calc(100% - 2px);
			height: calc(100% - 264px);
			margin: 23px 0 0 0;
		}
	}

	@media screen and (max-height: 700px){
		.app-body-content{
			overflow-y: auto;
		}

	}

</style>
<div class="toolbar">
	<button class="primary" id="createajob">{{language.newJob}}</button>
	<button class="secondary" id="deletejobs" disabled><span class="trash icon"><span></span></span></button>
</div>
<div class="table-container">
	<table id="jobs-table" class="data">
	    <thead>
	        <tr>
	        	<th class="checkbox">
	 				<input type="checkbox" id="tableCheckBox"/>
	 				<label for="tableCheckBox"></label>
				</th>
	            <th>Job</th>
	 			<th>Shifts</th>
	 			<th>Candidates</th>
	 			<th>Status</th>
	 			<th>Created By</th>
	 			<th>Last Modified</th>
	        </tr>
	    </thead>
	    <tbody>
	    	{{#each jobs}}
	        <tr>
	        	<td class="checkbox">
	 				<input type="checkbox" id="tableCheckBox-{{@index}}"/>
	 				<label for="tableCheckBox-{{@index}}"></label>
				</td>
	            <td class="jobName">{{jobName}}</td>
	            <td>
	            	{{#if_eq shifts.length 0}}
						<span style="color:#bbbbbb;">-</span>
					{{else}}
						{{#each shifts}}
							<div class="shift"><span>{{{jobShiftDays this}}}</span>{{{jobShiftHours this}}}</div>
						{{/each}}
					{{/if_eq}}
				</td>
	            <td><span class="bold">2 New</span> of 15</td>
	            <td>
	            	<div class="btn-group">
						<button class="dropDown">Posted</button>
						<ul class="dropDown-menu status">
							<li><a>Closed</a></li>
							<li><a>Posted</a></li>
						</ul>					
					</div>
	            </td>
	            <td>
	            	{{createdBy.firstname}} {{createdBy.lastname}}<span class="light">on {{dateConverter created}}</span>
	            </td>
	            <td>
	            	{{timeSince updated}}
	            </td>
	        </tr>
	        {{/each}}
	    </tbody>
	</table>
</div>
<div class="card-container">
	<div class="card-container-header">
		<ul class="pills">
			<li><a class="selected">Job Info</a></li>
			<li><a>Candidates <span>(0)</span></a></li>
		</ul>
		<div id="hide-card" class="close">X</div>
	</div>
	<div class="card">
		<div class="card-header">
			<h2 data-guid="">{{jobTypes.[0].name}}</h2>
		</div>
		<div class="card-required">
			<div class="input">
				<label for="job-position" class="required">Position</label>
				<div class="btn-group">
					<button id="job-position" class="dropDown" data-dropdown="{{jobTypes.[0].guid}}">{{jobTypes.[0].name}}</button>
					<ul class="dropDown-menu">
						{{#each jobTypes}}
							<li><a id="{{guid}}">{{name}}</a></li>
						{{/each}}
					</ul>					
				</div>
			</div>
			<span>@</span>
			<div class="input">
				<label for="job-wage" class="required">Wage</label>
				<input type="text" id="job-wage" class="wage"/>
				<span>$</span>
				<div class="btn-group">
					<button id="wage-frequency" class="dropDown">Hourly</button>
					<ul class="dropDown-menu">
						<li class="current"><a>Hourly</a></li>
						<li><a>Weekly</a></li>
						<li><a>Bi-Weekly</a></li>
						<li><a>Monthly</a></li>	
						<li><a>Annually</a></li>	
					</ul>			
				</div>
			</div>
		</div>
		<div class="card-shift">
			<div class="input">
				<label>Shift</label>
				<div class="btn-group toggle">
					<button>M</button><button>T</button><button>W</button><button>T</button><button>F</button><button>S</button><button>S</button>
				</div>
			</div>
			<span>@</span>
			<div class="input">
				<input type="text" class="shift-time" value="3:00 AM - 3:00 PM" disabled/>
			</div>
		</div>
		<div class="card-additions">
			<a>Add Shift</a>
			<br>
			<a id="add-job-description">Add Description</a>
		</div>
		<div class="card-description">
			<div class="input">
				<label for="job-description">Description</label>
				<textarea id="job-description"></textarea>
			</div>
		</div>
		<div class="card-footer">
			<button class="primary" id="save-job">Save</button><button id="cancel-job">Cancel</button>
		</div>
	</div>
</div>