var hide = $(".hide") 
var darkmode = $(".darkmode") 

hide.change(function(){      
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
       chrome.tabs.sendMessage(tabs[0].id, {todo: "hideSidebar" });
   });
});

darkmode.change(function(){      
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
       chrome.tabs.sendMessage(tabs[0].id, {todo: "darkmode" });
   });
});




