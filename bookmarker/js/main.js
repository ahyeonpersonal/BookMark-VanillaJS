//1. Create Event for submiting button

document.getElementById("myForm").addEventListener('submit', saveBookmark);
function saveBookmark(e){
    //console.log('working');
    
    //2. stop page refreshing
    e.preventDefault();
    
    //3. get form values
    
    //3-1 : But with this log, we get whole element, not Value
    //var siteName = document.getElementById('siteName');
    
    //3-2 : Get Value
    var siteName = document.getElementById('siteName').value;
    //3-3 : get Site URL value
    var siteUrl = document.getElementById('siteUrl').value;
    //console.log(siteName);
    
    
    //9,10
    if(!validateForm(siteName, siteUrl)){
        return false;
    }
    
    
    //4. We need storage to save siteName, siteUrl : create Object
    var bookmark={
        name: siteName,
        url : siteUrl
    }
    //console.log(bookmark);
    
    
    //5. local storage test
    /* How we can parse the JSON into a string , save it
       and then, when we need to get it back,
       we can parse it back JSON
    */
    //save 'Hello World' string as a 'test' in localStorage
    
    
    /*
    localStorage.setItem('test','Hello world'); // <= google panel > Application > Local Storage > File://
    console.log(localStorage.getItem('test')); //<= Result : Hello world
    localStorage.removeItem('test'); //removing localStorage
    console.log(localStorage.getItem('test')); //<= Result : null
    */
    
    //6. save BookMark info in localStorage
    if(localStorage.getItem('bookmarks') === null){
        //6-1.if it is null, we need to initalize in array
        //6-1. Init array
        var bookmarks=[];
        //6-2. Add bookmark to array
        bookmarks.push(bookmark);
        // 6-3. Set to localStorage
        //localStorage.setItem('bookmarks',bookmarks);
        //6-4. on above line, since bookmarks is JSON array, we need to save it as string
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        //if there something is already saved in bookmarks 
        //6-5. fetch it from localStorage
        //var bookmarks = localStorage.getItem('bookmarks');
        
        //6-6. parce it as JSON
        //JSON.parse : make string into JSON
        //JSON.stringfy : make JSON into string
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        
        //6-7. add bookmark to array
        bookmarks.push(bookmark);
        //6-8. reset back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    //11.Clear Form
    document.getElementById('myForm').reset();
    
    //8-7
    fetchBookmarks();
    

};    
    
//8. Create 'delete bookmark function'
function deleteBookmark(url){
    /*
    To delete bookmark,
    1. fetch the bookmark from localStorage
    2. loop through them
    3. checking if current one we're looping through matches this URL
    4. if it does, we're going to splice it out 
    5. reset localStorage
    */
    
    //8-1.getbookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //8-2.loop through bookmarks
    for(var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url == url){ //8-3.checking 
            //8-4.remove from array
            bookmarks.splice(i,1);
        }
    }
    //8-5. reset localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // 8-6. But for now, items are deleted after refreshing pages
    // => Re-fetch bookmarks
    fetchBookmarks();
    //This also need after we add bookmarks! 8-7
}

//7. Display(Fetch) bookmarks under Form
function fetchBookmarks(){
    //7-1. fetching it from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //console.log(bookmarks);
    
    //7-2. add onload Event in index.html
    
    //7-3. display bookmarsk in <div id="bookmarksResults"> in index.html
    var bookmarksResults = document.getElementById('bookmarksResults');
    
    //7-4. Build output
    //bookmarksResults.innerHTML='Hello';
    
    bookmarksResults.innerHTML = '';
    /*
    loop through the bookmarks that are in localStorage and then
    output them one by one inside <div id="bookmarksREsults">
    */
    for( var i=0 ; i<bookmarks.length; i++){
        
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        
        //if you want to put a <div> or something, we could append to it by doing +=
        bookmarksResults.innerHTML += '<div class="well">' + 
                                      '<h3>' + name +
                                      //Visit button
                                      '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
                                      //Delete button, and add function :deleteBookmark
                                      '<a onclick = "deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a>' +
                                      '</h3>' + 
                                      '</div>';
                            
        
    }
}

function validateForm(siteName, siteUrl){
    
    //9. user still can submit data, eventhough values are blank
    if(!siteName || !siteUrl){
        alert('Please fill in the form');
        return false;
    }
    
    //10. checking https url form
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(!siteUrl.match(regex)){
        alert("Please use a valid URL");
        return false;
    }
    
    return true;
}
    



