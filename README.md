# sawatborvorn
Step
- Install Vscode and add live server and tailwindcss plugin
- Install node  https://nodejs.org/en/download
- On the project need to install npm => 
```c
npm init -y
```
After install will show detail below and add the package.json to the project
we need it to keep track of our dependcies that we install 
```c
{
  "name": "sawatborvorn",
  "version": "1.0.0",
  "description": "Step\r - Install node  https://nodejs.org/en/download\r - On the project need to install npm => \r ```c\r npm init -y\r ```",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- Install tailwind 
```
npm install tailwindcss
```
After install we can check it package.json and node_modulse add it to the project that when all tailwind files stored
```
"dependencies": {
    "tailwindcss": "^3.3.3"
  }
```

###How is the tailwind work.
We can use tailwind on it own or we can use it as plugin with post CSS.
when we use it by create style.css that we use tailwind to process into vanilla css output file at build time
with all of the final css rule inside. Everytime we make a change to our style.css we need to run tailwind script to process it.

![Alt text](readmeImage/tailwind_process.png)

Step
- Create scr folder 
- Create public folder
- Create styles.css in src 
- styles.css add the base functionalily of tailwind (tailwind directive) (go to tailwind doc https://tailwindcss.com/docs/installation ) 
- Go to package.json and add the script
```
 "scripts": {
    
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
    "watch": "tailwindcss build src/styles.css -o public/styles.css --watch" //continous watch that change and complie
  },
```
- Run the script using npm command it will create styles.css in the public folder
```
npm run build-css
```
- Create index.html in the public folder
Tailwind give us a low-level utillty classes to style html element.
- Create tailwind config file (we create one with --full so we can see sample the file how tailwind work then we create empty one)
```
npx tailwindcss init --full  
npx tailwindcss init --full  
```
![Alt text](readmeImage/tailwindConfigFull.png)
![Alt text](readmeImage/tailwindConfig.png)

- To add style on tailwind it normaly do it on the tailwind config as defaul value by extend
```c
 extend: {
        colors:{
          primary:'#FF6363',
          secondary:{
             100:'#E2E2D5',
             200:'#888883'
        }
        }
      },
```
### Link 
- https://tailwindcss.com/docs/installation
- https://tailwind-elements.com/docs/standard/components/gallery/
- https://www.youtube.com/watch?v=-GmnyjgI4Jc
- https://www.youtube.com/watch?v=WK6u8YDYqak&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=8
- https://www.youtube.com/watch?v=arftp8kFBBg