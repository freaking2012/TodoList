//Angular JS starts

function TodoCtrl($scope)
{
	$scope.todos=[];
	
	$('#myModal').css({'position':'fixed','height':'100%','top': '30%'});
		
		if(localStorage.length!="undefined")
	{
		//alert("length: "+localStorage.length);
		for(var i=0;i<localStorage.length;i++)
		{
			var task = localStorage.getItem(localStorage.key(i));
			if(task.split('|')[1]=='true')
			$scope.todos.push({id:localStorage.key(i),text:task.split('|')[0],done:true});			
		else
			$scope.todos.push({id:localStorage.key(i),text:task.split('|')[0],done:false});
			//alert(task.split('|')[1]);
			//alert(localStorage.key(i));
		}
		$scope.TodoText='';
		
	}
	else{
			$scope.todos = [{text:"Add ToDos to this list",done:false},
					{text:"Clear all the ToDos after completing them",done:false}];
	}	
	
	
		
		

	
	
	
	
	
	
	$scope.clearCompleted = function(){
		
			//localStorage.clear();
		
		var count=0;
		$scope.todos = _.filter($scope.todos,function(todo){
			if(todo.done==true)			
			{				
				//document.writeln(todo.id);
				//alert(todo.id);
				localStorage.removeItem(todo.id);
				count++;
			
			}
			//alert(todo.id+todo.done);
			
			
			return !todo.done;	
				
		})
		if(count==0)
			{
				$("#popUpMsg").text("No item selected. No item removed. Tit for Tat !!");
				$("#myModal").modal();				
			}
		//document.write($scope.todos);
	}
	
	$scope.addTodo = function(){
		
		if($scope.TodoText=='')
		{
			$("#popUpMsg").text("Hello!! Please enter a To Do Item First.");
			$("#myModal").modal();
			return;
		}
		
		var nextId = localStorage.length+1;
		$scope.todos.push({id:"todo"+nextId,text:$scope.TodoText,done:false});
		
		if (typeof(Storage) != "undefined") {
			
			localStorage.setItem("todo"+nextId,$scope.TodoText+"|"+false);
		}
		$scope.TodoText='';
	}
	$scope.stateChanged = function(chk)
	{
		//document.write(chk.id);
		var itemId = chk.id;
		//alert(itemId);
		localStorage.setItem(chk.id,localStorage.getItem(chk.id).split('|')[0]+"|"+chk.done);
		
		
	}
	
	$scope.textClicked = function(todo)
	{	
	
	
		//alert(itemId);
		for(var i=0;i<$scope.todos.length;i++)
		{
			
			if($scope.todos[i].id==todo.id)
			{
			
				if(todo.done==true)
				{
					todo.done=false;
					
				}
				else
				{
					todo.done=true;
					
				}
				localStorage.setItem(todo.id,localStorage.getItem(todo.id).split('|')[0]+"|"+todo.done);
				break;
			}
		}
	}
	
	
	
}



