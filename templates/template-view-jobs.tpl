 <style type="text/css">
 	.toolbar{
 		display: block;
 		float: left;
 		clear: both;
 		margin: 10px 0;
 	}
 	.toolbar button{
 		margin: 0 6px 0 0;
 	}
 	#jobs-table{
 		clear: both;
 	}
 	.modal.window{
 		width: 300px;
 	}
 	#tableCheckBox + label{
 		margin: 4px 0 7px 0;
 	}
 	.field-container{
 		display: block;
 		float: left;
 		clear: both;
 		width: 280px;
 		margin: 0 0 10px 0;
 	}
 	.field-container .scrollable{
 		width: 300px;
 		max-height: 300px;
 		overflow-x: hidden;
 		overflow-y: auto;
 	}
 	.field-container textarea.description{
 		width: 280px;
 	}
 	.field-container label{
 		float: left;
 	}

 	.field-container input#wage{
 		float:left;
 		clear:left;
 		width:40px;
 	}

 	.field-container .btn-group.wage{
 		width:53px;
 		margin: 16px 0 0 0;
 	}

 	.field-container .shift{
 		display: block;
 		float: left;
 		clear: both;
 		width: 300px;
 	}

 	.field-container .shift .from,
 	.field-container .shift .to{
 		display: block;
 		float: left;
 	}

 	.field-container .shift .from input,
 	.field-container .shift .to input{
 		width: 66px;
 	}

 	.field-container .shift .from .btn-group,
 	.field-container .shift .to .btn-group{
 		width: 46px;
 	}

	.field-container .shift .divider{
		display: block;
		float: left;
		line-height: 12px;
		margin: 18px 6px 0 6px;
	}

	.field-container .shift .days{
		display: block;
		float: left;
		clear: both;
		width: 300px;
		margin: 6px 0;
		background-color: red;
	}

 	.field-container .add{
 		display: block;
 		float: left;
 		clear: both;
 		color:#6089ab;
 		line-height: 16px;
 		text-indent: 2px;
 		margin: 4px 0;
 		text-decoration: underline;
 	}

 </style>
 <div class="toolbar">
 	<button class="primary" id="createajob">Create a Job</button>
 	<button class="secondary" id="deletejobs" disabled><span class="trash icon"><span></span></span></button>
 </div>
 <table class="data" id="jobs-table">
 	<thead>
 		<tr>
 			<th class="checkbox">
 				<input type="checkbox" id="tableCheckBox"/>
 				<label for="tableCheckBox"></label>
			</th>
 			<th>Job Name</th>
 			<th>Shifts</th>
 			<th>Created By</th>
 		</tr>
 	</thead>
 	<tbody>
 		{{#each jobs}}
 			<tr>
 				<td class="checkbox">
 					<input type="checkbox" id="tableCheckBox-{{@index}}"/>
 					<label for="tableCheckBox-{{@index}}"></label>
				</td>
				<td>{{jobName}}</td>
				<td>
					{{#each shifts}}
						{{#if mon}}Mon{{/if}} {{#if tue}}, Tue{{/if}} {{#if wed}}, Wed{{/if}} {{#if thu}}, Thu{{/if}} {{#if fri}}, Fri{{/if}} {{#if sat}}, Sat{{/if}} {{#if sun}}Sun{{/if}}| {{startHour}}:{{startMin}} - {{endHour}}:{{endMin}}
					{{/each}}
					</td>
				<td>{{ownerGuid}}</td>
		{{/each}}
 	</tbody>
 </table>
 <div id="modal-job" class="modal-bg ease-out">
	<div class="modal window">
		<h1>Edit Job</h1>
		<div class="field-container">
			<label for="title">Position Title:</label>
			<input type="text" id="title"/>
		</div>
		<div class="field-container">
			<label for="wage">Wage:</label>
			<input type="text" id="wage"/>
			<div class="btn-group wage">
				<button class="dropDown">Hour</button>
				<ul class="dropDown-menu">
					<li><a>Hour</a></li>
					<li><a>Day</a></li>
					<li><a>Week</a></li>
				</ul>
			</div>
		</div>
		<div class="field-container">
			<label for="shift">Shift:</label>
			<div class="scrollable">
				<div class="shift">
					<div class="from">
						<input type="text" name="from"/>
						<div class="btn-group">
							<button class="dropDown">AM</button>
							<ul class="dropDown-menu">
								<li><a>AM</a></li>
								<li><a>PM</a></li>
							</ul>
						</div>
					</div>
					<div class="divider">-</div>
					<div class="to">
						<input type="text" name="to"/>
						<div class="btn-group">
							<button class="dropDown">AM</button>
							<ul class="dropDown-menu">
								<li><a>AM</a></li>
								<li><a>PM</a></li>
							</ul>
						</div>
					</div>
					<div class="days">
						<table class="data">
							<thead>
								<tr>
									<th>Mon</th>
									<th>Tue</th>
									<th>Wed</th>
									<th>Thu</th>
									<th>Fri</th>
									<th>Sat</th>
									<th>Sun</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" id="mon"/>
										<label for="mon"></label>
									</td>
									<td>
										<input type="checkbox" id="tue"/>
										<label for="tue"></label>
									</td>
									<td>
										<input type="checkbox" id="wed"/>
										<label for="wed"></label>
									</td>
									<td>
										<input type="checkbox" id="thu"/>
										<label for="thu"></label>
									</td>
									<td>
										<input type="checkbox" id="fri"/>
										<label for="fri"></label>
									</td>
									<td>
										<input type="checkbox" id="sat"/>
										<label for="sat"></label>
									</td>
									<td>
										<input type="checkbox" id="sun"/>
										<label for="sun"></label>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="add" id="add-shift">Add another shift</div>
		</div>
		<div class="field-container">
			<label for="description">Job Description:</label>
			<textarea id="description"></textarea>
		</div>
		<div class="btn-group">
			<button class="primary">Save</button>
			<button id="modal-cancel">Cancel</button>
		</div>
	</div>
</div>