# BookMark-VanillaJS
Creating BookMark with Pure JavaScript @bradtraversy

# 1. Create Event for submitting button

# 2. stop page refreshing

# 3. get form values
3-1) can't get value
3-2) add .value
3-3)get site URL value

# 4. create Object : Save siteName, siteUrl in localStorage

# 5. localStorage

# 6. Save bookmark info in localStorage
6-1) if localStorage is null, we need to initialize in array - var bookmarks=[]
6-2) Add book mark to array
6-3) Set to localStorage
6-4) change JSON to string file
6-5) if localStorage is not null, fetch it from localStorage
6-6) prace String to JSON file
6-7) add bookmark to array
6-8) reset back to localStorage

# 7. Display(fetch) bookmark under Form
7-1) feching it from localStorage
7-2) add onload Event in index.html
7-3) display bookmark in <div id="bookmakrResults"> in index.html
7-4) Build output

# 8. Create 'Delete' bookmark function
8-1) Fetch the book mark from localStorage
8-2) Loop through them
8-3) Checking if current one we're looping through, matches this URL
8-4) If it does, we're going to splice ti out
8-5) Reset localStorage
8-6) But for now, items are deleted after refreshing pages -> refecth bookmarks
8-7) refech after adding bookmarks as well

# 9. Fix UI : can't add bookmakrs when value is null

# 10. Checking https ulr form

# 11. Clear Form after adding value
