<style type="text/css">
	#settings-list{
		display: block;
		float: left;
		width: 190px;
		height:100%;
	}

	#settings-list h1{
		display: block;
		float: left;
		clear: both;
		margin: 20px 30px;
		line-height: 30px;
		color: #666666;
		font-size: 18px;
		font-weight: lighter;
	}
	#settings-list ul{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0 0 30px;
	}
	#settings-list ul li{
		display: block;
		float: left;
		clear: both;
		width: 100%;
	}
	#settings-list ul li a{
		line-height: 25px;
		color: #666666;
	}
	#settings-list ul li a.selected,
	#settings-list ul li a:hover{
		color: #222222;
	}
	#settings-form{
		display: block;
		float: left;
		width: calc(100% - 190px);
		height:100%;
		line-height: 14px;
	}
	#settings-form .form-header{
		display: block;
		float: left;
		width: calc(100% - 60px);
		margin: 15px 30px;
		border-bottom: 1px solid #e0e0e0;
	}
	#settings-form .form-header .heading{
		display: block;
		float: left;
		line-height: 40px;
		color: #333333;
		font-size: 18px;
		font-weight: lighter;
	}
	#settings-form .form-header .close{
		float: right;
		font-size: 14px;
		line-height: 14px;
		padding: 15px 6px 0 0;
		color: #888888;
	}
	@media screen and (max-width: 600px){
		#settings-list{
			clear: both;
			width: 100%;
		}

		#settings-list h1{
			margin: 20px;
		}

		#settings-list ul{
			margin: 0 0 0 20px;
		}

		#settings-list ul li{
			clear: none;
			width: auto;
			margin: 0 20px 0 0;
		}

		#settings-form{
			clear: both;
			width: 100%;
			
		}

		#settings-form .form-header{
			width: calc(100% - 40px);
			margin: 20px;
		}
	}
</style>
<div id="settings-list">
	<h1>Settings</h1>
	<ul>
		<li><a class="selected">Account Settings</a></li>
		<li><a>Profile Settings</a></li>
	</ul>
</div>
<div id="settings-form">
	<div class="form-header">
		<div class="heading">Account Settings</div>
		<div class="close">x</div>
	</div>
</div>