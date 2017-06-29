var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('myCtrl', function($scope) {
   
	
	$scope.showCollapse=[true,true,true,true,true,true,true]
	$scope.btnColor=[30,30,30,30,30,30,30];
	$scope.boxColor=[.01,.01,.01,.01,.01,.01,.01];
	$scope.btnSelection=['inherit','inherit','inherit','inherit','inherit','inherit','inherit'];
	$scope.myButton=['#1b465f','#2f6175','#2f6175','#2f6175'];
	$scope.showCommand=false;
	$scope.showSubcommand=true;
	$scope.toggleText=["demo","Choose vehicle ID","Choose location"];
	$scope.items = ['Inf','Arnb','Mor','Duro','basecamp 1','basecamp 2','basecamp 3','basecamp 4','Position:inside','Position:outside','status:critical','status:major','status:minor','status:warning'];
	$scope.choice=[];
	$scope.checkboxModel = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    $scope.resetAllFlag=true;
   
	$scope.isSelected=function(pos){
			
		
		var ind=-1;
		for(var i=0;i<$scope.choice.length;i++)
		{
			if($scope.choice[i][0]==$scope.items[pos])
			{
				ind=i;
			}
		}
		if(ind<0)
		{
			var valueToPush = new Array();
			valueToPush[0] =  $scope.items[pos];
			valueToPush[1] =pos;
			$scope.choice.push(valueToPush);
			$scope.checkboxModel[pos]=true;
		}
		else
		{
			$scope.choice.splice(ind,1);
			$scope.checkboxModel[pos]=false;
		}
		for(var j=0;j<$scope.checkboxModel.length;j++)
		{
			if($scope.checkboxModel[j]==true)
			{
				$scope.resetAllFlag=false;
				break;
			}
			else
			{
				$scope.resetAllFlag=true;
			}
		}
		if($scope.checkboxModel[4]==false && $scope.checkboxModel[5]==false && $scope.checkboxModel[6]==false && $scope.checkboxModel[7]==false)
		{
			$scope.btnSelection[2]='inherit';
		}
		else
		{
			$scope.btnSelection[2]='#007FFF';
		}
		
		if($scope.checkboxModel[8]==false && $scope.checkboxModel[9]==false)
		{
			$scope.btnSelection[3]='inherit';
		}
		else
		{
			$scope.btnSelection[3]='#007FFF';
		}
		
		if($scope.checkboxModel[10]==false && $scope.checkboxModel[11]==false && $scope.checkboxModel[12]==false && $scope.checkboxModel[13]==false)
		{
			$scope.btnSelection[5]='inherit';
		}
		else
		{
			$scope.btnSelection[5]='#007FFF';
		}
			
	};
	$scope.removeItem = function (x) {
		$scope.checkboxModel[$scope.choice[x][1]]=false;
		if($scope.checkboxModel[4]==false && $scope.checkboxModel[5]==false && $scope.checkboxModel[6]==false && $scope.checkboxModel[7]==false)
		{
			$scope.btnSelection[2]='inherit';
		}
		for(var j=0;j<$scope.checkboxModel.length;j++)
		{
			if($scope.checkboxModel[j]==true)
			{
				$scope.resetAllFlag=false;
				break;
			}
			else
			{
				$scope.resetAllFlag=true;
			}
		}
		if($scope.checkboxModel[4]==false && $scope.checkboxModel[5]==false && $scope.checkboxModel[6]==false && $scope.checkboxModel[7]==false)
		{
			$scope.btnSelection[2]='inherit';
		}
		else
		{
			$scope.btnSelection[2]='#007FFF';
		}
		
		if($scope.checkboxModel[8]==false && $scope.checkboxModel[9]==false)
		{
			$scope.btnSelection[3]='inherit';
		}
		else
		{
			$scope.btnSelection[3]='#007FFF';
		}
		
		if($scope.checkboxModel[10]==false && $scope.checkboxModel[11]==false && $scope.checkboxModel[12]==false && $scope.checkboxModel[13]==false)
		{
			$scope.btnSelection[5]='inherit';
		}
		else
		{
			$scope.btnSelection[5]='#007FFF';
		}
        $scope.choice.splice(x, 1);
	} ;

	$scope.removeResetAll = function () {
		
		$scope.resetAllFlag=true;
		for(var j=0;j<$scope.checkboxModel.length;j++)
		{
			if($scope.checkboxModel[j]==true)
			{
				$scope.checkboxModel[j]=false;
			}
		}
		for(var k=0;k<$scope.checkboxModel.length;k++)
		{
			
				$scope.btnSelection[k]='inherit';
			
		}
		$scope.choice.length=0;
	} ;
	
	$scope.loadDiff=function(num) {
		if(num==0)
		{
			$scope.showCommand=false;
			$scope.showSubcommand=true;
			$scope.myButton[0]='#1b465f';
			$scope.myButton[1]='#2f6175';
			$scope.myButton[2]='#2f6175';
			$scope.myButton[3]='#2f6175';
		}
		
		if(num==1)
		{
			$scope.showCommand=true;
			$scope.showSubcommand=false;
			$scope.myButton[0]='#2f6175';
			$scope.myButton[1]='#1b465f';
			$scope.myButton[2]='#2f6175';
			$scope.myButton[3]='#2f6175';
		}
   
  };


  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };
  $scope.inlineOptions2 = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };
  $scope.dateOptions2 = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };


  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 11 || date.getDay() === 61);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null :  $scope.dt;
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
	
   
   
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
     $scope.inlineOptions2.minDate = $scope.inlineOptions2.minDate ? $scope.dt1 : $scope.dt1;
    $scope.dateOptions2.minDate = $scope.inlineOptions2.minDate;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt2 = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
	
    $scope.myFunc = function(id) {
	if(id==1)
	{
		$scope.showCollapse[1] = !$scope.showCollapse[1];
		
		if($scope.showCollapse[1]==false)
		{
			 $scope.boxColor[1]=30;
			 $scope.btnColor[1]=.01;
			 $scope.toggleText[1]='  Search... ';
		}
		else
		{
			$scope.boxColor[1]=.01;
			 $scope.btnColor[1]=30;
			$scope.toggleText[1]='Choose vehicle ID';
		}
	}
	
	if(id==2)
	{
		$scope.showCollapse[2] = !$scope.showCollapse[2];
		if($scope.showCollapse[2]==false)
		{
			 $scope.boxColor[2]=30;
			 $scope.btnColor[2]=.01;
			 $scope.toggleText[2]='  Search...';
		}
		else
		{
			$scope.boxColor[2]=.01;
			 $scope.btnColor[2]=30;
			 $scope.toggleText[2]='Choose location';
		}
	}
	if(id==3)
	{
		$scope.showCollapse[3] = !$scope.showCollapse[3];
		if($scope.showCollapse[3]==false)
		{
			 $scope.boxColor[3]=30;
			 $scope.btnColor[3]=.01;
		}
		else
		{
			$scope.boxColor[3]=.01;
			 $scope.btnColor[3]=30;
		}
	}
	if(id==4)
	{
		$scope.showCollapse[4] = !$scope.showCollapse[4];
		if($scope.showCollapse[4]==false)
		{
			 $scope.boxColor[4]=30;
			 $scope.btnColor[4]=.01;
		}
		else
		{
			$scope.boxColor[4]=.01;
			$scope.btnColor[4]=30;
		}
	}	
	
	if(id==5)
	{
		$scope.showCollapse[5] = !$scope.showCollapse[5];
		if($scope.showCollapse[5]==false)
		{
			 $scope.boxColor[5]=30;
			 $scope.btnColor[5]=.01;
		}
		else
		{
			$scope.boxColor[5]=.01;
			$scope.btnColor[5]=30;
		}
	}
	
	if(id==6)
	{
		$scope.showCollapse[6] = !$scope.showCollapse[6];
		if($scope.showCollapse[6]==false)
		{
			 $scope.boxColor[6]=30;
			 $scope.btnColor[6]=.01;
		}
		else
		{
			$scope.boxColor[6]=.01;
			$scope.btnColor[6]=30;
		}
	}
  };
  
  $scope.loadBody = function(num) {
	if(num==1)
	{
		tpl.contentUrl= 'subcommand_body.html';
	}
	
	if(id==2)
	{
		$scope.showMe2 = !$scope.showMe2;
		if($scope.showMe2==false)
		{
			 $scope.myColor2='#24455e';
		}
		else
		{
			$scope.myColor2='inherit';
		}
	}
	
	
	
	
	
  }
  
   
});
