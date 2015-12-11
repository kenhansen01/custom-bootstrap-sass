# Customize Bootstrap-sass
### Also with angular and requirejs
This builds on [Customizing a Bootstrap SASS build with Bower](https://github.com/treyhunner/custom-bootstrap-example.git). 

In a future release, I will add a demo page and server to the build. For now this will produce a dist folder that can be dropped into your project. The dist folder includes jQuery, Bootstrap, Angular and Require. 

Before installing, make any customizations you require to the files inside the custom-sass folder. Once you have customized these files run `` npm install `` this will install all of the node dependencies, and then will install the bower dependencies and then will process the gulpfile to produce the dist folder.