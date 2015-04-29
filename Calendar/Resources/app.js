///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Login Page
var loginPage = Ti.UI.createWindow({
	backgroundColor: 'black'
});
loginPage.open();
var logo = Ti.UI.createView({
	backgroundImage: 'Pictures/VSlogo.jpg',
	top : 5,
	width: 250,
	height: 100
});
loginPage.add(logo);

var userName = Ti.UI.createTextField({
	hintText: 'Vandal ID',
	top: 150,
	left: 100,
	right: 100,
	backgroundColor: 'white'
});
loginPage.add(userName);
var password = Ti.UI.createTextField({
	hintText: 'Password',
	passwordMask: true,
	top: 190,
	left: 100,
	right: 100,
	backgroundColor: 'white'
});
loginPage.add(password);
var rememberme = Ti.UI.createLabel({
	text: 'Remember Me',
	top: 230,
	color: 'white'
});
loginPage.add(rememberme);
var typeCheckBox = Ti.UI.createButton({
	image: 'Pictures/uncheckedbox.png',
	checked: false,
	width: 20,
	height: 20,
	right: '20%',
	top: 230
});
loginPage.add(typeCheckBox);
typeCheckBox.addEventListener('click',function(e){
	typeCheckBox.image = 'Pictures/checkedbox.png';
});
var loginButton = Ti.UI.createButton({
title:'Login',
color:'black',
borderRadius: 10,
width:'auto',
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
top: 270,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
loginPage.add(loginButton);
loginButton.addEventListener('click',function(e){
	landingPage.open();
	loginPage.close();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////Landing page
var landingPage = Ti.UI.createWindow({
	backgroundColor: 'black'
});
var view1 = Ti.UI.createView({
	backgroundColor: '#b18e5f',
	top : 105,
	left: 0,
	right: 0,
	height: 70
});
landingPage.add(view1);
var calendarButton = Ti.UI.createButton({
	title: 'Calendar',
	textAlign: 'center',
	color: 'black',
	font:{
		fontSize:'30sp',
		fontWeight:'bold',
	},
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
});
view1.add(calendarButton);
calendarButton.addEventListener('click',function(e){
	win.open();
	landingPage.close();
});
var view2 = Ti.UI.createView({
	backgroundColor: 'black',
	top: 170,
	left: 0,
	right: 0,
	height: 70
});
landingPage.add(view2);
var scheduleButton = Ti.UI.createButton({
	title: 'My Schedule',
	textAlign: 'center',
	color: '#b18e5f',
	font:{
		fontSize:'30sp',
		fontWeight:'bold',
	},
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
});
view2.add(scheduleButton);
scheduleButton.addEventListener('click',function(e){
	mySchedulePage.open();
	landingPage.close();
});
var view3 = Ti.UI.createView({
	backgroundColor: '#b18e5f',
	top: 240,
	left: 0,
	right: 0,
	height: 70
});
landingPage.add(view3);
var makeAppButton = Ti.UI.createButton({
	title: 'Make Appointment',
	textAlign: 'center',
	color: 'black',
	font:{
		fontSize:'30sp',
		fontWeight:'bold',
	},
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
});
view3.add(makeAppButton);
makeAppButton.addEventListener('click',function(e){
	makeAppPage.open();
	landingPage.close();
});
var view4 = Ti.UI.createView({
	backgroundColor: 'black',
	top: 310,
	left: 0,
	right: 0,
	height: 70
});
landingPage.add(view4);

var cancelAppButton = Ti.UI.createButton({
	title: 'Notifications',
	textAlign: 'center',
	color: '#b18e5f',
	font:{
		fontSize:'30sp',
		fontWeight:'bold',
	},
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
});
view4.add(cancelAppButton);
cancelAppButton.addEventListener('click',function(e){
	notificationWin.open();
	landingPage.close();
});

var logo2 = Ti.UI.createView({
	backgroundImage: 'Pictures/VSlogo.jpg',
	top : 5,
	width: 250,
	height: 100
});
landingPage.add(logo2);
var logoutButton = Ti.UI.createButton({
title:'Log Out',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
landingPage.add(logoutButton);
logoutButton.addEventListener('click',function(e){
	loginPage.open();
	landingPage.close();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////Calendar Page
// Taking Screen Width
var screenWidth = 322;
var needToChangeSize = false;

var screenWidthActual = Ti.Platform.displayCaps.platformWidth;

if (Ti.Platform.osname === 'android') {
if (screenWidthActual >= 641) {
screenWidth = screenWidthActual;
needToChangeSize = true;
}
}

// Main Window of the Month View.
var win = Ti.UI.createWindow({
backgroundColor : '#FF000000',
navBarHidden : true
});

// Button at the buttom side
var backButton = Ti.UI.createButton({
bottom : '20dp',
height : '40dp',
width : '200dp'
});

// Previous Button - Tool Bar
var prevMonth = Ti.UI.createButton({
left : '15dp',
width : 'auto',
height : 'auto',
title : '<'
});

// Next Button - Tool Bar
var nextMonth = Ti.UI.createButton({
right : '15dp',
width : 'auto',
height : 'auto',
title : '>'
});

// Month Title - Tool Bar
var monthTitle = Ti.UI.createLabel({
width : '200dp',
height : '24dp',
textAlign : 'center',
color : '#3a4756',
font : {
fontSize : 20,
fontWeight : 'bold'
}
});

// Tool Bar
var toolBar = Ti.UI.createView({
top : '0dp',
width : '322dp',
height : '50dp',
backgroundColor : '#bd9a71',
layout : 'vertical'
});

// Tool Bar - View which contain Title Prev. & Next Button
var toolBarTitle = Ti.UI.createView({
top : '3dp',
width : '322dp',
height : '24dp'
});

toolBarTitle.add(prevMonth);
toolBarTitle.add(monthTitle);
toolBarTitle.add(nextMonth);

// Tool Bar - Day's
var toolBarDays = Ti.UI.createView({
top : '2dp',
width : '322dp',
height : '22dp',
layout : 'horizontal',
left : '-1dp'
});

toolBarDays.sunday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Sun',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.monday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Mon',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.tuesday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Tue',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.wednesday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Wed',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.thursday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Thu',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.friday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Fri',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.saturday = Ti.UI.createLabel({
left : '0dp',
height : '20dp',
text : 'Sat',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});

toolBarDays.add(toolBarDays.sunday);
toolBarDays.add(toolBarDays.monday);
toolBarDays.add(toolBarDays.tuesday);
toolBarDays.add(toolBarDays.wednesday);
toolBarDays.add(toolBarDays.thursday);
toolBarDays.add(toolBarDays.friday);
toolBarDays.add(toolBarDays.saturday);

// Adding Tool Bar Title View & Tool Bar Days View
toolBar.add(toolBarTitle);
toolBar.add(toolBarDays);

// Function which create day view template
dayView = function(e) {
var label = Ti.UI.createLabel({
current : e.current,
width : '46dp',
height : '44dp',
backgroundColor : '#FFDCDCDF',
text : e.day,
textAlign : 'center',
color : e.color,
font : {
fontSize : 20,
fontWeight : 'bold'
}
});
return label;
};

monthName = function(e) {
switch(e) {
case 0:
e = 'January';
break;
case 1:
e = 'February';
break;
case 2:
e = 'March';
break;
case 3:
e = 'April';
break;
case 4:
e = 'May';
break;
case 5:
e = 'June';
break;
case 6:
e = 'July';
break;
case 7:
e = 'August';
break;
case 8:
e = 'September';
break;
case 9:
e = 'October';
break;
case 10:
e = 'November';
break;
case 11:
e = 'December';
break;
};
return e;
};

// Calendar Main Function
var calView = function(a, b, c) {
var nameOfMonth = monthName(b);

//create main calendar view
var mainView = Ti.UI.createView({
layout : 'horizontal',
width : '322dp',
height : 'auto',
top : '50dp'
});

//set the time
var daysInMonth = 32 - new Date(a, b, 32).getDate();
var dayOfMonth = new Date(a, b, c).getDate();
var dayOfWeek = new Date(a, b, 1).getDay();
var daysInLastMonth = 32 - new Date(a, b - 1, 32).getDate();
var daysInNextMonth = (new Date(a, b, daysInMonth).getDay()) - 6;

//set initial day number
var dayNumber = daysInLastMonth - dayOfWeek + 1;

//get last month's days
for ( i = 0; i < dayOfWeek; i++) {
mainView.add(new dayView({
day : dayNumber,
color : '#8e959f',
current : 'no',
dayOfMonth : ''
}));
dayNumber++;
};

// reset day number for current month
dayNumber = 1;

//get this month's days
for ( i = 0; i < daysInMonth; i++) {
var newDay = new dayView({
day : dayNumber,
color : '#3a4756',
current : 'yes',
dayOfMonth : dayOfMonth
});
mainView.add(newDay);
if (newDay.text == dayOfMonth) {
newDay.color = 'white';
// newDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
newDay.backgroundColor = '#FFFFF000';
var oldDay = newDay;
}
dayNumber++;
};
dayNumber = 1;

//get remaining month's days
for ( i = 0; i > daysInNextMonth; i--) {
mainView.add(new dayView({
day : dayNumber,
color : '#8e959f',
current : 'no',
dayOfMonth : ''
}));
dayNumber++;
};

// this is the new "clicker" function, although it doesn't have a name anymore, it just is.
mainView.addEventListener('click', function(e) {
if (e.source.current == 'yes') {

// reset last day selected
if (oldDay.text == dayOfMonth) {
oldDay.color = 'white';
// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday.png';
oldDay.backgroundColor = '#FFFFF000';
} else {
oldDay.color = '#3a4756';
// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytile-Decoded.png';
oldDay.backgroundColor = '#FFDCDCDF';
}
oldDay.backgroundPaddingLeft = '0dp';
oldDay.backgroundPaddingBottom = '0dp';

// set window title with day selected, for testing purposes only
backButton.title = nameOfMonth + ' ' + e.source.text + ', ' + a;

// set characteristic of the day selected
if (e.source.text == dayOfMonth) {
// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
e.source.backgroundColor = '#FFFF00FF';
} else {
// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytile_selected.png';
e.source.backgroundColor = '#FFFF0000';
}
e.source.backgroundPaddingLeft = '1dp';
e.source.backgroundPaddingBottom = '1dp';
e.source.color = 'white';
//this day becomes old 
oldDay = e.source;
}
});

return mainView;
};

// what's today's date?
var setDate = new Date();
a = setDate.getFullYear();
b = setDate.getMonth();
c = setDate.getDate();

// add the three calendar views to the window for changing calendars with animation later

var prevCalendarView = null;
if (b == 0) {
prevCalendarView = calView(a - 1, 11, c);
} else {
prevCalendarView = calView(a, b - 1, c);
}
prevCalendarView.left = (screenWidth * -1) + 'dp';

var nextCalendarView = null;
if (b == 0) {
nextCalendarView = calView(a + 1, 0, c);
} else {
nextCalendarView = calView(a, b + 1, c);
}
nextCalendarView.left = screenWidth + 'dp';

var thisCalendarView = calView(a, b, c);
if (needToChangeSize == false) {
thisCalendarView.left = '-1dp';
}

monthTitle.text = monthName(b) + ' ' + a;

backButton.title = monthName(b) + ' ' + c + ', ' + a;

// add everything to the window
win.add(toolBar);
win.add(thisCalendarView);
win.add(nextCalendarView);
win.add(prevCalendarView);
win.add(backButton);


var slideNext = Titanium.UI.createAnimation({
// left : '-322',
duration : 500
});

slideNext.left = (screenWidth * -1);

var slideReset = Titanium.UI.createAnimation({
// left : '-1',
duration : 500
});

if (needToChangeSize == false) {
slideReset.left = '-1';
} else {
slideReset.left = ((screenWidth - 644) / 2);
}

var slidePrev = Titanium.UI.createAnimation({
// left : '322',
duration : 500
});

slidePrev.left = screenWidth;

// Next Month Click Event
nextMonth.addEventListener('click', function() {
if (b == 11) {
b = 0;
a++;
} else {
b++;
}

thisCalendarView.animate(slideNext);
nextCalendarView.animate(slideReset);

setTimeout(function() {
thisCalendarView.left = (screenWidth * -1) + 'dp';
if (needToChangeSize == false) {
nextCalendarView.left = '-1dp';
} else {
nextCalendarView.left = ((screenWidth - 644) / 2);
}
prevCalendarView = thisCalendarView;
thisCalendarView = nextCalendarView;
if (b == 11) {
nextCalendarView = calView(a + 1, 0, c);
} else {
nextCalendarView = calView(a, b + 1, c);
}
monthTitle.text = monthName(b) + ' ' + a;
nextCalendarView.left = screenWidth + 'dp';
win.add(nextCalendarView);
}, 500);
});

// Previous Month Click Event
prevMonth.addEventListener('click', function() {
if (b == 0) {
b = 11;
a--;
} else {
b--;
}
thisCalendarView.animate(slidePrev);
prevCalendarView.animate(slideReset);
setTimeout(function() {
thisCalendarView.left = screenWidth + 'dp';
if (needToChangeSize == false) {
prevCalendarView.left = '-1dp';
} else {
prevCalendarView.left = ((screenWidth - 644) / 2);
}
nextCalendarView = thisCalendarView;
thisCalendarView = prevCalendarView;
if (b == 0) {
prevCalendarView = calView(a - 1, 11, c);
} else {
prevCalendarView = calView(a, b - 1, c);
}
monthTitle.text = monthName(b) + ' ' + a;
prevCalendarView.left = (screenWidth * -1) + 'dp';
win.add(prevCalendarView);
}, 500);
});

var homeButton4 = Ti.UI.createButton({
title:'Home',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
height: 25,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
win.add(homeButton4);
homeButton4.addEventListener('click',function(e){
	landingPage.open();
	win.close();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////My Schedule Page
var mySchedulePage = Ti.UI.createWindow({
	backgroundColor: 'black'
});
var logo3 = Ti.UI.createView({
	backgroundImage: 'Pictures/VSlogo.jpg',
	top : 5,
	width: 250,
	height: 100
});
mySchedulePage.add(logo3);
// Tool Bar
var toolBar = Ti.UI.createView({
top : '100dp',
width : '322dp',
height : '25dp',
backgroundColor : '#bd9a71',
layout : 'vertical'
});
// Tool Bar - Day's
var toolBarDays = Ti.UI.createView({
top : '0dp',
width : '322dp',
height : '22dp',
layout : 'horizontal',
left : '-1dp'
});
toolBarDays.sunday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Sun',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756',
top:'0dp'
});
toolBarDays.monday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Mon',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.tuesday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Tue',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.wednesday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Wed',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.thursday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Thu',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.friday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Fri',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.saturday = Ti.UI.createButton({
left : '0dp',
height : '20dp',
title : 'Sat',
width : '46dp',
textAlign : 'center',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#3a4756'
});
toolBarDays.add(toolBarDays.sunday);
toolBarDays.add(toolBarDays.monday);
toolBarDays.add(toolBarDays.tuesday);
toolBarDays.add(toolBarDays.wednesday);
toolBarDays.add(toolBarDays.thursday);
toolBarDays.add(toolBarDays.friday);
toolBarDays.add(toolBarDays.saturday);
// Adding Tool Bar Title View & Tool Bar Days View
toolBar.add(toolBarDays);
mySchedulePage.add(toolBar);
var homeButton3 = Ti.UI.createButton({
title:'Home',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
mySchedulePage.add(homeButton3);
homeButton3.addEventListener('click',function(e){
	landingPage.open();
	mySchedulePage.close();
});

var sundayView = Ti.UI.createView({
	top: 125,
	width: 322,
	height: 300,
	layout: 'vertical'
});

var mondayView = Ti.UI.createView({
	top: 125,
	width: 322,
	height: 300,
	layout: 'vertical'
});

var data4 = [
 {title: 'Appointments', editable:false, font:{ fontSize:'18'}, color:'white', alignment:'center'} ,{title: 'Mark Rounds: 12:30PM - 1:00PM'}, {title: 'Lori Eveleth: 1:30PM - 2:00PM'}, {title: 'Swipe Left to Delete Appointment', editable:false, color:'white'}
];

var mondayTable = Ti.UI.createTableView({
	data:data4,
	editable:true,
	backgroundColor: '#b18e5f',
	color: 'white'
	
});


toolBarDays.monday.addEventListener('click',function(e){
	mondayView.add(mondayTable);
	mySchedulePage.add(mondayView);
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////Make Appointment Page
var makeAppPage = Ti.UI.createWindow({
	backgroundColor: 'black'
});
var logo3 = Ti.UI.createView({
	backgroundImage: 'Pictures/VSlogo.jpg',
	top : 5,
	width: 250,
	height: 100
});
makeAppPage.add(logo3);
var homeButton2 = Ti.UI.createButton({
title:'Home',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
makeAppPage.add(homeButton2);
homeButton2.addEventListener('click',function(e){
	landingPage.open();
	makeAppPage.close();
});





var transformPicker = Titanium.UI.create2DMatrix().scale(0.35);
var picker = Ti.UI.createPicker({
	top : 25,
	width: 600,
	height: 10,
	transform:transformPicker
});
var data = [];
data.push(Titanium.UI.createPickerRow({title:'Select College'}));
data.push(Titanium.UI.createPickerRow({title:'Business & Economics'}));
data.push(Titanium.UI.createPickerRow({title:'Engineering'}));
data.push(Titanium.UI.createPickerRow({title:'Education'}));
data.push(Titanium.UI.createPickerRow({title:'Art and Architecture'}));
picker.add(data);

makeAppPage.add(picker);

var transformPicker2 = Titanium.UI.create2DMatrix().scale(0.35);
var picker2 = Ti.UI.createPicker({
	top : 110,
	width: 600,
	height: 10,
	transform:transformPicker2
});
var data2 = [];
data2.push(Titanium.UI.createPickerRow({title:'Select Professor'}));
data2.push(Titanium.UI.createPickerRow({title:'Mark Rounds'}));
data2.push(Titanium.UI.createPickerRow({title:'Norman Pendegraft'}));
data2.push(Titanium.UI.createPickerRow({title:'John Miller'}));
data2.push(Titanium.UI.createPickerRow({title:'Lori Eveleth'}));
picker2.add(data2);

makeAppPage.add(picker2);

var datebox = Ti.UI.createTextField({
	hintText: '(mm/dd/yyyy)',
	font:{
		fontSize: '10'
	},
	width: 100,
	height: 10,
	backgroundColor: 'white',
	top: 270
});
makeAppPage.add(datebox);

var searchButton = Ti.UI.createButton({
	title: 'Search',
	backgroundColor: '#b18e5f',
	top: 260,
	right: 70,
	color: 'black',
	borderRadius: 10,
	font:{
		fontSize: '10'
	}
});
makeAppPage.add(searchButton);
searchButton.addEventListener('click',function(e){
	makeAppPage.add(picker3);
	makeAppPage.add(makeAppButton);
	makeAppPage.add(memoBox);
});

var transformPicker3 = Titanium.UI.create2DMatrix().scale(0.35);
var picker3 = Ti.UI.createPicker({
	top: 250,
	width: 600,
	height: 10,
	transform:transformPicker3
});
var data3 = [];
data3.push(Titanium.UI.createPickerRow({title:'12:00PM - 12:30PM'}));
data3.push(Titanium.UI.createPickerRow({title:'1:30PM - 2:00PM'}));
data3.push(Titanium.UI.createPickerRow({title:'2:30PM - 3:00PM'}));
data3.push(Titanium.UI.createPickerRow({title:'3:30PM - 4:00PM'}));
data3.push(Titanium.UI.createPickerRow({title:'4:00PM - 4:30PM'}));
picker3.add(data3);

var makeAppButton = Ti.UI.createButton({
	title: 'Request Appointment',
	backgroundColor: '#b18e5f',
	top: 470,
	color: 'black',
	borderRadius: 10,
	font:{
		fontSize: '10',
		fontWeight: 'bold'
	}
});

makeAppButton.addEventListener('click',function(e){
	alert('Appointment Request has been Sent!');
});

var memoBox = Ti.UI.createTextField({
	backgroundColor: 'white',
	color: 'black',
	top: 410,
	width: 210,
	hintText:'Reason for Appointment',
	font:{
		fontSize:'12'
	}
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////Cancel Appointment Page
var cancelAppPage = Ti.UI.createWindow({
	backgroundColor: 'black'
});
var logo4 = Ti.UI.createView({
	backgroundImage: 'Pictures/VSlogo.jpg',
	top : 5,
	width: 250,
	height: 100
});
cancelAppPage.add(logo4);
var homeButton = Ti.UI.createButton({
title:'Home',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});
cancelAppPage.add(homeButton);
homeButton.addEventListener('click',function(e){
	landingPage.open();
	cancelAppPage.close();
});


/////////////////////////////////////////////////////////////////////////////////////////////
/////notification Page
//
//Notifications page
//
var notificationWin = Titanium.UI.createWindow({
	backgroundColor:'black',
});

var view3 = Titanium.UI.createView({
	backgroundColor:'black',
	height: 400,
	top:20
});

var label1 = Titanium.UI.createLabel({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	backgroundColor:'#b18e5f',
	text:'Notifications',
	textAlign:'center',
	font:{
		fontSize:30, 
		fontWeight:'bold'
		},
	height:50,
	width:'90%',
	color: 'white',
	top: 0
});

var textfield1 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 5,
	color:'gray',
	height: 50,
	width: '90%',
	hintText:'Type message here',
	top: 55
});

var sendTo = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 5,
	height: 50,
	width: '90%',
	hintText: 'Enter Contact',
	top: 110
});

var homeButton9 = Ti.UI.createButton({
title:'Home',
color:'black',
borderRadius: 10,
bordercolor:'black',
backgroundColor: '#b18e5f',
textAlign:'center',
bottom: 0,
left: 0,
right: 0,
font:{
fontSize:'20sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});

homeButton9.addEventListener('click', function(e){
	landingPage.open();
	notificationWin.close();
	
});

var send = Ti.UI.createButton({
	title: 'Send',
	backgroundColor: '#b18e5f',
	top: 180,
	height: 35,
	width: 90,
	color: 'black',
	borderRadius: 10,
	font:{
		fontSize: '15',
		fontStyle: 'bold'
	}
});

send.addEventListener('click',function(e){
	alert('Notification Sent');
});




view3.add(label1);
view3.add(textfield1);
view3.add(sendTo);
notificationWin.add(homeButton9);
view3.add(send);
notificationWin.add(view3);