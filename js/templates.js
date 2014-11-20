angular.module("video-ads").run(["$templateCache",function($templateCache){"use strict";$templateCache.put("shared/alert/alert.html",'<div ng-messages=alertStatus><div ng-message=success class="alert alert-success">{{successMessage}}</div><div ng-message=info class="alert alert-info">{{infoMessage}}</div><div ng-message=error class="alert alert-danger">{{errorMessage}}</div></div>'),$templateCache.put("shared/chart/chart.html","<highchart id=chart1 config=semiCircleConfig></highchart>"),$templateCache.put("shared/delivery/delivery-progress.html",'<div class=progress-bar role=progressbar style="width: {{ videoad.delivery }}%"><span class=delivery>{{ (videoad.impression_count / videoad.impression_target) * 100 |number: 0 }}%</span></div>'),$templateCache.put("shared/navbar/navbar.html",'<div class="navbar navbar-fixed-top" role=navigation><div class=container-fluid><div class=navbar-header><a class=navbar-brand href="/"><h1 class=visuallyhidden>Onion Video Server</h1><img ng-src={{logoUrl}} alt="Logo"></a></div><div class="navbar-form navbar-right" ng-show=showSearchBar><input type=search class=form-control placeholder=Search ng-model=searchTerm ng-keypress="($event.which === 13)?search():0;"> <button ng-show=showSearchBar class="btn btn-small btn-danger" ng-click=clearSearch()><i class="glyphicon glyphicon-remove"></i></button></div><button type=submit class="btn btn-success save-videoad pull-right" ng-show=showSaveButton ng-click=saveVideoAd();>Save</button></div></div>'),$templateCache.put("shared/videoplayermodal/videoplayermodal.html",'<div><button type=button class="btn btn-primary btn-lg" data-toggle=modal data-target="#video-{{ video.id }}"><i class="fa fa-film"></i>Play video</button><div class="modal fade" id=video-{{video.id}} tabindex=-1 role=dialog aria-labelledby=videoLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><h4 class=modal-title id=myModalLabel>Your video sir...</h4></div><div class="modal-body video-modal"><video class="video-js vjs-default-skin"><source ng-repeat="source in video.sources" ng-src={{source.url}} type="{{source.content_type}}"></video></div></div></div></div></div>'),$templateCache.put("components/detail/pixels.html",'<div id=pixels-wrapper><table id=pixel-list class="table table-striped"><tr><th>Event</th><th>Pixel URLs</th></tr><tr ng-repeat="(event, urls) in videoad.pixels" data-event={{event}}><td>{{event}}</td><td><div class="pull-left pixel-group"><div class=pixel ng-repeat="url in urls track by $index"><div class=pull-left style="width: 90%; overflow: hidden">{{url}}</div><div class=pull-right ng-click="removePixel(event, $index);"><span class="btn fa fa-remove"></span></div></div><div class="new-pixel-container input-group"><input class=form-control type=url placeholder="Add new pixel"><div class=input-group-btn><button class="btn btn-primary" ng-click=addPixel($event)>Add</button></div></div></div></td></tr></table></div>'),$templateCache.put("components/detail/targeting.html",'<div class=targeting-group ng-repeat="group in target" ng-show="group && group[\'rules\'].length > 0"><div class=row><div class=targeting-rows><div class=col-md-12><div class=targeting-row ng-repeat="row in group[\'rules\']" ng-show=row><div class="targeting-row-container row"><div class="col-md-4 col"><select class=form-control ng-model=row[0] placeholder=Key ng-options="target for target in targets"></select></div><div class="col-md-3 col"><select class=form-control ng-model=row[1]><option value=is>is</option><option value="is not">is not</option></select></div><div class="col-md-4 col"><input placeholder=Value class=form-control ng-model=row[2]></div><div class="col-md-1 col"><button class="btn btn-danger form-control" type=submit ng-click="removeTargetingRow($parent.$index, $index);"><i class="fa fa-remove"></i></button></div></div></div></div></div><div class=col-md-12><div class=targeting-row><div class="targeting-row-container row"><div class="col-md-8 col"><button class="btn btn-success btn-sm form-control add-targeting-button" type=submit ng-click=addTargetingRow($index);><i class="fa fa-plus"></i> Add Row</button> <button class="btn btn-sm btn-warning remove-group form-control" ng-click=removeTargetingGroup($index);><i class="fa fa-remove"></i> Delete group</button></div><div class="priority col-md-3 col"><select class=form-control ng-model="group[\'priority\']" ng-options="priority for priority in priorities"></select></div></div></div></div></div></div><div class=targeting-button><button class="btn btn-success" type=submit ng-click=addTargetingGroup();>Add group</button></div><div id=confirm-remove-group-modal tabindex=-1 role=dialog aria-labelledby=confirmRemoveGroupModal aria-hidden=true class="modal fade"><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>Confirm Remove Group</h4></div><div class=modal-body>Are you sure you want to remove this targeting group?</div><div class=modal-footer><button type=button class="btn btn-default" data-dismiss=modal>Cancel</button> <button id=confirm-remove-group-modal-button type=button class="btn btn-danger">Remove Group</button></div></div></div></div>'),$templateCache.put("components/detail/videoAdDetail.html",'<div class="row video-ad-form"><alert></alert><div class="modal fade" id=myModal tabindex=-1 role=dialog aria-labelledby=myModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal><span aria-hidden=true>&times;</span><span class=sr-only>Close</span></button><h4 class=modal-title id=myModalLabel>Video Preview:</h4></div><div class=modal-body><video class="video-js vjs-default-skin" controls preload=auto width=100% height=100% poster={{video.poster}}><source ng-src={{source.url}} type={{source.content_type}} ng-repeat="source in video.sources"><p class=vjs-no-js>To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target=_blank>supports HTML5 video</a></p></video></div></div></div></div><div class=col-md-12><ng-form class=form-horizontal name=videoAdDetailForm novalidate><input type=hidden ng-model=videoad.id name=id value="{{videoad.id}}"><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input name=Name class=form-control placeholder="Advertisement Name" required ng-model=videoad.name required></div></div><div class=form-group><label for=client class="col-md-3 control-label">Client</label><div class=col-md-6><input name=Client class=form-control placeholder="Client Name" required ng-model=videoad.client></div></div><div class=form-group><label for=campaign class="col-md-3 control-label">Campaign Name</label><div class=col-md-6><input name=Campaign class=form-control placeholder="Campaign Name" required ng-model=videoad.campaign></div></div><div class=form-group><label for=startDate class="col-md-3 control-label">Start Date</label><div class=col-md-2><datepicker required type=text date=videoad.start></datepicker></div><label for=endDate class="col-md-2 control-label">End Date</label><div class=col-md-2><datepicker required type=text date=videoad.end></datepicker></div></div><div class=form-group><label for=impressionTarget class="col-md-3 control-label">Impression Target</label><div class=col-md-2><input type=number class=form-control required placeholder="Impression Target" ng-model=videoad.impression_target></div><label for=impressionTarget class="col-md-2 control-label">Total Impressions</label><div class=col-md-2><input type=number class=form-control placeholder="Total Impressions" ng-model=videoad.impression_count disabled></div></div><div class=form-group><div class=col-md-3>&nbsp;</div><div class=col-md-6><div class="progress progress-striped delivery" delivery videoad=videoad></div></div></div><div class=form-group><label for=clickThrough class="col-md-3 control-label">Clickthrough</label><div class=col-md-6><input type=url class=form-control placeholder="Clickthrough URL" ng-model=videoad.click_through></div></div><div class=form-group><label for=name class="col-md-3 control-label">GAM Attribute</label><div class=col-md-6><input class=form-control placeholder="GAM Attribute" ng-model=videoad.gam_attribute></div></div><div class=form-group><label for=vast_url class="col-md-3 control-label">VAST URL</label><div class=col-md-6><input class=form-control placeholder="VAST URL" ng-model=videoad.vast_url disabled></div></div><div class="form-group group-margin"><label for=targeting class="col-md-3 control-label">Page Targeting</label><div class="col-md-6 targeting" targeting target=videoad.targeting.page targets=page_targets></div></div><div class="form-group group-margin"><label for=targeting class="col-md-3 control-label">User Targeting</label><div class="col-md-6 targeting" targeting target=videoad.targeting.user targets=user_targets></div></div><div class="form-group group-margin"><label for=pixels class="col-md-3 control-label">Event Tracking Pixels</label><div class="col-md-6 pixels" pixels videoad=videoad></div></div><div class=form-group ng-repeat="video in videoad.videos"><label for=video class="col-md-3 control-label">Video: {{videoad.id}}</label><div class=col-md-6 ng-show="videoad.videos.length > 0"><video-edit-form index=$index adid=videoad.id video=videoad.videos[$index]></video-edit-form></div></div></ng-form><button class="btn btn-success col-md-offset-3" type=submit ng-disabled="videoad.id === null || videoad.id === undefined" ng-click=addVideo();><i class="fa fa-plus"></i> Add Video</button></div></div>'),$templateCache.put("components/detail/videoDetail.html",'<div class="row videos-container"><input ng-model=video.id value={{video.id}} type="hidden"><div class="poster-image col-sm-12 col-md-4" ng-show=video.name><img ng-src="{{video.poster | placeholder}}" alt=""><video-player-modal></video-player-modal></div><div class="poster-image col-sm-12 col-md-4" ng-show=!video.name><input type=hidden class="form-control fake-input" value={{video.name}} disabled><video-field></video-field></div><div class="col-sm-12 col-md-8"><div class=form-group ng-show=video.name><label class="col-md-4 col-md-offset-1">Name</label><div class=col-md-7><input class=form-control value={{video.name}} ng-model=video.name disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">Start Time</label><div class=col-md-6><datepicker type=text date=video.start></datepicker></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">Impression Count</label><div class=col-md-7><input type=number class=form-control value={{video.impression_count}} disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">Start Count</label><div class=col-md-7><input type=number class=form-control value={{video.start_count}} disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">1st Qtr Count</label><div class=col-md-7><input type=number class=form-control value={{first_quartile_count}} disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">Midpoint Count</label><div class=col-md-7><input type=number class=form-control value={{video.midpoint_count}} disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">3rd Qtr Count</label><div class=col-md-7><input type=number class=form-control value={{video.third_quartile_count}} disabled></div></div><div class=form-group><label class="col-md-4 col-md-offset-1">Complete Count</label><div class=col-md-7><input type=number class=form-control value={{video.complete_count}} disabled></div></div></div></div>'),$templateCache.put("components/detail/videoField.html",'<div ng-if=article.video class=video-embed-container style="position: relative"><video-embed video-id={{article.video}}></video-embed><div style="position: absolute; top: 2%; right: 1%"><button ng-click=thumbnailModal(); class="btn btn-info"><span class="fa fa-picture-o"></span></button> <button ng-click=removeVideo(); class="btn btn-danger"><span class="fa fa-trash-o"></span></button></div></div><div ng-if="!article.video && !uploadProgress" class=video-upload-container style="position: relative"><button ng-click=uploadVideo(); class="btn btn-success" style="width: 100%"><span class="fa fa-video-camera"></span>Upload Video</button> <input type=file id={{index}}-file-field style=display:none></div><div ng-if="!article.video && uploadProgress"><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: {{uploadProgress}}%"><span class=sr-only>60% Complete</span></div></div></div>'),$templateCache.put("components/exclusion/exclusion.html",'<div class=row><div class="alert alert-success">Success</div><div class="alert alert-danger">Error</div><div class=col-md-12><form class=form-horizontal><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input class=form-control placeholder=Name ng-model=exclusion.name></div></div><div class=form-group><label for=targeting class="col-md-3 control-label">Page Targeting</label><div class="col-md-6 targeting" targeting target=exclusion.targeting.page targets=page_targets></div></div><div class=form-group><label for=targeting class="col-md-3 control-label">User Targeting</label><div class="col-md-6 targeting" targeting target=exclusion.targeting.user targets=user_targets></div></div><div id=save-button class=form-group><label for=targeting class="col-md-3 control-label">Save</label><div class=col-md-6><button type=submit class="btn btn-primary" ng-click=save();>Save</button></div></div></form></div></div>'),$templateCache.put("components/login/login.html",'<div class=login-container><div class=login-form><form><input class=form-control ng-model=username placeholder=Name required> <input type=password class=form-control ng-model=password placeholder=Password required> <button class="btn add-btn btn-success" type=submit ng-click=submitLogin()><span>Login</span></button></form></div></div>'),$templateCache.put("components/videoAdList/dirPagination.tpl.html",'<ul class=pagination ng-if="1 < pages.length"><li ng-if=boundaryLinks ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click=setCurrent(1)>&laquo;</a></li><li ng-if=directionLinks ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }"><a href="" ng-click=setCurrent(pageNumber)>{{ pageNumber }}</a></li><li ng-if=directionLinks ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if=boundaryLinks ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click=setCurrent(pagination.last)>&raquo;</a></li></ul>'),$templateCache.put("components/videoAdList/videoAdList.html",'<div class=row><div class="col-sm-3 col-md-2 sidebar"><button class="btn btn-default add-btn btn-success" ng-click=newVideoAd();><span><i class="fa fa-video-camera"></i> Add Video</span></button><h2>Filter</h2><ul class="nav nav-sidebar"><li><a ng-click="params.filter = \'active\'; changeFilter();" ng-class="{\'active\': (params.filter == \'active\' || params.filter == undefined)}">Active</a></li><li><a ng-click="params.filter = \'future\'; changeFilter();" ng-class="{\'active\': (params.filter == \'future\')}">Future</a></li><li><a ng-click="params.filter = \'all\'; changeFilter();" ng-class="{\'active\': (params.filter == \'all\')}">All</a></li></ul><h2>Sort</h2><ul class="nav nav-sidebar"><li><a ng-click="orderBy = \'start\'; reverse=!reverse; changeOrder();" ng-class="{active:orderBy == \'start\'}"><i class="fa fa-calendar"></i> Start Date <i class=fa ng-class="{\'fa-chevron-up\' : orderBy == \'start\', \'fa-chevron-down\' : orderBy == \'start\' && !reverse}"></i></a></li><li><a href="" ng-click="orderBy = \'end\'; reverse=!reverse; changeOrder();" ng-class="{active:orderBy == \'end\'}"><i class="fa fa-calendar"></i> End Date <i class=fa ng-class="{\'fa-chevron-up\' : orderBy == \'end\', \'fa-chevron-down\' : orderBy == \'end\' && !reverse}"></i></a></li></ul><h2>Options</h2><ul class="nav nav-sidebar"><li><a href="/exclusion/global/">Manage Exclusions</a></li><li><a href="javascript:if((window.metadata===undefined||window.metadata.targeting===undefined)&&(window.targeting===undefined)){alert(\'There aren\\\'t any targeting parameters on this page!\');}else{var testing_url=\'http://videoads.theonion.com/test/?\'; var targetingObj = (window.metadata && window.metadata.targeting) || window.targeting;for(var i in targetingObj){testing_url+=i;testing_url+=\'=\';testing_url+=targetingObj[i];testing_url+=\'&\'};window.open(testing_url, \'Video Ad Testing\', \'width=400,height=400,menubar=no,toolbar=no,location=no,status=no\');}">Video Ad Testing</a></li></ul></div><div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"><div class="loading col-md-12 on-fade" ng-if=loading><span>L<div class=loader></div>ading</span></div><div class="loading col-md-12 on-fade" ng-if=errors><span>Oh noes! Something went amuck. Holler at us: foo@foo.com</span></div><ul class="video-ad-container col-md-12 on-fade" ng-if="!loading && !errors"><li dir-paginate="videoad in videoAds | itemsPerPage: 8" total-items=totalItems class="video-ad col-md-3"><a href="/edit/{{videoad.id}}/"><ul><li class=poster-chart><img ng-src={{videoad.videos[0].poster|placeholder}} alt=""><delivery-chart impressions={{videoad.delivery}} class=chart></delivery-chart></li><li class=name>{{videoad.name}}</li><li>Client: {{videoad.client}}</li><li>Delivery: {{(videoad.impression_count / videoad.impression_target) * 100 |number: 0}}%</li><li>Start: {{videoad.start|convertToLocal}}</li><li>End: {{videoad.end|convertToLocal}}</li><li ng-show=videoad.vast_url>VAST: {{videoad.vast_url}}</li><li ng-hide=videoad.vast_url>{{videoad.video.name}}</li></ul></a></li></ul><dir-pagination-controls on-page-change=pageChanged(newPageNumber)></dir-pagination-controls></div></div>')}]);
//# sourceMappingURL=templates.js.map