define(['../../utils/constant', '../../utils/utils'], function (constant, utils) {
    var Service = function ($rootScope,  $resource) {
        var svc = $resource(constant.apiBase + '/organization/:method/:method2', null, {
            queryOrganization: {
                method: 'POST',
                params: {
                    method: 'query'
                },
                timeout: constant.reqTimeout
            },
            getTree: {
                method: 'POST',
                params: {
                    method: 'tree'
                },
                timeout: constant.reqTimeout
            },
            add: {
                method: 'POST',
                params: {
                    method: 'add'
                },
                timeout: constant.reqTimeout
            },
            del:{
            	method: 'POST',
                params: {
                    method: 'del'
                },
                timeout: constant.reqTimeout
            },
            modify: {
                method: 'POST',
                params: {
                    method: 'modify'
                },
                timeout: constant.reqTimeout
            },
            move: {
                method: 'POST',
                params: {
                    method: 'move'
                },
                timeout: constant.reqTimeout
            },
            moveUser: {
                method: 'POST',
                params: {
                    method: 'move-user'
                },
                timeout: constant.reqTimeout
            },
            getOrganizationDetails: {
                method: 'GET',
                params: {
                    method: 'get'
                },
                timeout: constant.reqTimeout
            },
            addUser: {
                method: 'POST',
                params: {
                    method: 'add-user'
                },
                timeout: constant.reqTimeout
            },
            deleteUser: {
                method: 'POST',
                params: {
                    method: 'delete-user'
                },
                timeout: constant.reqTimeout
            }
        });
        svc.organizationShared = {};
        svc.tree = {};

        // 获取expandedNodes
        var getExpandedNodes = (function(){
        	var childrenEleName = 'children';
        	var dataEleName = 'checked';
        	var expandEleVal = true;
        	// 特定的一个对象,代表当前node和子node都不应该expand
        	// 非该对象的数组,至少代表当前的node是应该expand的.
        	var nullArray = [];
        	// 处理每一个元素,辅助函数fun
        	var processItem = function(data, chEleName, eleName, eleVal) {
        		if (!data) {
        			return nullArray;
        		}
        		chEleName = chEleName | childrenEleName;
        		eleName = eleName | dataEleName;
        		eleVal = eleVal | expandEleVal;
        		var currentNodeOk = false;
        		if (data[dataEleName] === expandEleVal) {
        			currentNodeOk = true;
        		}
        		if (data[childrenEleName]  instanceof Array) {
        			var childExpandedNodes = processArray(data[childrenEleName], chEleName, eleName, eleVal);
        			if (childExpandedNodes !== nullArray) {
        				//  add current node
        				var expandedNodes = [data];
        				return expandedNodes.concat(childExpandedNodes);
        			}
        		} 
        		if (currentNodeOk) {
					return [];
				} else {
					return nullArray;
				}
        	};
        	// 处理数组
        	var processArray = function(data, chEleName, eleName, eleVal) {
        		if (!(data instanceof Array)) {
        			return nullArray;
        		}
        		var currentArrayOk = false;
        		var expandedNodes = [];
        		for ( var i = 0; i<data.length; i++){
        			var currentArrayExpNodes = processItem(data[i], chEleName, eleName, eleVal);
        			if (currentArrayExpNodes !== nullArray ) {
        				currentArrayOk = true;
        				expandedNodes = expandedNodes.concat(currentArrayExpNodes);
        			}
        		}
        		if (currentArrayOk) {
        			return expandedNodes;
        		} else {
        			return nullArray;
        		}
        	};
        	return processArray;
        })();
        svc.syncTree = function(params, isNeedResetExpandedNodes) {
            // only owner can operate the group in frontend.
            params.needOwnerMarkup = true;
            svc.getTree(params, function (res) {
                svc.tree.data = res.data;
                if(isNeedResetExpandedNodes){
                    var expandedNodes = [];
                    expandedNodes.push(svc.tree.data[0]);
                    svc.tree.expandedNodes = expandedNodes;
                }
                svc.tree.msg = '';
            }, function (res) {
                svc.tree.msg =$rootScope.translate('relMgr.msg.organizationTree.failed');
                console.log('syncTree failed' + res);
            });
        };
        return svc;
    };

    return {
        name: "OrganizationService",
        svc: ["$rootScope", "$resource", Service]
    };
});
