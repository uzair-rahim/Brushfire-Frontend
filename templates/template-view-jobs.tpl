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
 		margin:0 10px 0 0; 
 		width: 100%;
 		min-width: 550px;
 		overflow: auto;
 		border: 1px solid #c6cad0;
 	}
 	.table-container.collapsed{
 		width: calc(100% - 450px);
 	}

 	.card-container{
		display: none;
 		float: left;
 		width: 0px;
 	}
 	.card-container.expanded{
		display: block;
 		width: 430px;
 	}

 	.card-container .card-container-header{
 		display: block;
 		float: left;
 		clear: both;
 		width: 100%;
 	}

 	.card-container .card-container-header .close{
 		display: block;
 		float: right;
 		clear: both;
 		width: 10px;
 		height: 10px;
 		margin: 12px 0 0 0;
 		font-size: 10px;
 		color: #9ea3aa;
 	}

 	#jobs-table{
 		min-width: 1000px;
 		border: none;
 	}

 	#jobs-table tr{
		border: none;
	}

	#jobs-table tr.selected{
		background-color: #feffd8;
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

 	#tableCheckBox + label{
 		margin: 4px 0 7px 0;
 	}

	.card-container .card .card-header h2
	{
		font-size: 18px;
		line-height: 52px;
		margin-left: 10px;
		font-weight: normal;
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
		margin: 16px 0;
	}

	.card-container .card .primary
	{
		margin-right: 10px;
	}
	.dropDown-menu.status{
		position: fixed;
		width: 100px;
		min-width: 100px;
	}	

 </style>
 <div class="toolbar">
	 <button class="primary" id="createajob">{{language.newJob}}</button>
	 <button class="secondary" id="deletejobs" disabled><span class="trash icon"><span></span></span></button>
</div>
<div class="table-container">
	<table class="data" id="jobs-table">
		<thead>
	 		<tr>
	 			<th class="checkbox">
	 				<input type="checkbox" id="tableCheckBox"/>
	 				<label for="tableCheckBox"></label>
				</th>
	 			<th>Job</th>
	 			<th>Shifts</th>
	 			<th>Applicants</th>
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
				<td class="jobName">{{jobName}}</a></td>
				<td>{{{jobShifts shifts}}}</td>
				<td><span class="bold">2 New</span> of 15</td>
				<td>
					<div class="btn-group">
						<button class="dropDown">Posted</button>
						<ul class="dropDown-menu status">
							<li><a>Closed</a></li>
							<li><a>Posted</a></li>
							<li><a>Shared</a></li>
						</ul>					
					</div>
				</td>
				<td>{{createdBy.firstname}} {{createdBy.lastname}}<span class="light">on {{dateConverter created}}</span></td>
				<td>{{timeSince updated}}</td>
			</tr>
			{{/each}}
	 	</tbody>
	</table>
</div>
<div class="card-container">
<!--
	<div class="card-container-header">
		<div id="hide-card" class="close">X</div>
	</div>
-->
	<div class="card">
		<div class="card-header">
			<h2>Bar Tender</h2>
		</div>
		<div class="card-required">
			<div class="input">
				<label for="job-position" class="required">Position</label>
				<div class="btn-group">
					<button id="job-position" class="dropDown">Bar Tender</button>
					<ul class="dropDown-menu">
						<li><a>Bar Back</a></li>
						<li class="current"><a>Bar Tender</a></li>
						<li><a>Busser</a></li>
						<li><a>Cook</a></li>
						<li><a>Dishwasher</a></li>
						<li><a>Host</a></li>
						<li><a>Server</a></li>
						<li><a>Store Manager</a></li>	
					</ul>					
				</div>
			</div>
			<span>@</span>
			<div class="input">
				<label for="job-wage" class="required">Wage</label>
				<input type="text" id="job-wage" class="wage" value="9.50"/>
				<span>$</span>
				<div class="btn-group">
					<button class="dropDown">Hourly</button>
					<ul class="dropDown-menu">
						<li class="current"><a>Hourly</a></li>
						<li><a>Weely</a></li>
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
					<button>M</button><button>T</button><button>W</button><button>T</button><button>F</button><button class="active">S</button><button class="active">S</button>
				</div>
			</div>
			<span>@</span>
			<div class="input">
				<input type="text" class="shift-time" value="10:00 AM - 4:00 PM"/>
			</div>
		</div>
		<div class="card-additions">
			<a href="#">Add Shift</a>
			<br>
			<a href="#">Add Description</a>
		</div>
		<div class="card-footer">
			<button class="primary">Save</button><button id="cancel-job">Cancel</button>
		</div>
	</div>
 </div>