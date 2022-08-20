function EventHandler(arr){
	this.array=arr;
	//
	 this.getEventsBetweenDates=function(start,end){
	 var arr2 = arr.filter(function(element){
	 		var startD=element["dateStart"];
	 		var endD=element["dateEnd"];
	 		if (startD >= start && endD <= end) {
   				return element;
			}
		});
	 	return arr2;
	 	//console.log(arr2);
	 }
	 this.getByMonth=function(month){
	 	this.array = arr.filter(function(element){
	 	var startD=element["dateStart"];
	 	var startMonth=startD.split('/')[1];
	 	var intMonth=parseInt(startMonth);
	 		if(intMonth==month)
   				return element;
   		});
   		return this.array;
	 	//console.log(this.array);
			
	 }
	 this.getUniqueDateAndSort=function(){
	 	//getunique

		var filteredArr=this.array.filter(function(element){
		var unique=element.dateStart + '|' + element.dateEnd;
				if(!this[unique]){
					this[unique]=true;
					return true;
				}
		},Object.create(null));
		
	 	//sort
	 	var arr2=filteredArr.sort((a,b) => (a.dateStart > b.dateStart) ? 1 : ((b.dateStart > a.dateStart) ? -1 : 0));
		
		return arr2;
	}
	this.getSummary=function(arg){
		if(arg.constructor === Array)
		{
			var arrObj=arg;
			const summary = arrObj.map(function(element,index){
	 		var startD=element["dateStart"];
	 		var endD=element["dateEnd"];
	 			if(startD==endD){
	 				return "On "+startD+": "+element["name"]+"("+element["description"]+")";
   					//console.log(element)
   					//return element;
	 			}
	 			else if(startD != endD){
	 				return element="From "+startD+" to "+endD+": "+element["name"]+"("+element["description"]+")";
	 				//console.log(element)
	 				//return element;
	 			}
	 	});
			console.log(summary);
	 	//return summary;
		}
		else if(arg==undefined)
		{

			const summary = this.array.map(function(element,index){
	 		var startD=element["dateStart"];
	 		var endD=element["dateEnd"];
	 			if(startD==endD){
	 				return "On "+startD+": "+element["name"]+"("+element["description"]+")";
   					//console.log(element)
   					//return element;
	 			}
	 			else if(startD != endD){
	 				return element="From "+startD+" to "+endD+": "+element["name"]+"("+element["description"]+")";
	 				//console.log(element)
	 				//return element;
	 			}
	 			console.log(summary);
	 	//return summary;
	 	});
		}
		else if (typeof arg === 'object' && arg !== null && !Array.isArray(arg)){
			/*let args= Object.keys(arg).map(key => (
				{name:arg["name"], description: arg["description"],dateStart: arg["dateStart"],dateEnd: arg["dateEnd"]
				})

			);
			//console.log(args);
			//Object.values(object1)
	 			const summary = args.map(function(element,index){
	 		var startD=element["dateStart"];
	 		var endD=element["dateEnd"];
	 			if(startD==endD){
	 				return "On "+startD+": "+element["name"]+"("+element["description"]+")";
   					//console.log(element)
   					//return element;
	 			}
	 			else if(startD != endD){
	 				return element="From "+startD+" to "+endD+": "+element["name"]+"("+element["description"]+")";
	 				//console.log(element)
	 				//return element;
	 			}
	 			//console.log(summary);
	 	//return summary;
	 	});*/
	 	return 0;
   		
		
			
		}
		
	 	
	 	
	 		
	}
}
var check = new EventHandler(events);
//check.getEventsBetweenDates("2022/02/01","2022/02/16")
var num=06;
var event = [
	{name: "Park Picnic", description: "Picnic event in the park", dateStart: "2022/06/12", dateEnd: "2022/06/12"}];
//check. getByMonth(num);
//check.getUniqueDateAndSort();
check.getSummary();