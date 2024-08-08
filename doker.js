// what is Docker
// Docker is a software platform that allows you to build, 
// test, and deploy applications quickly.

// Yes, using Docker is an excellent way to share applications while avoiding dependency issues. 
// Docker containers package an application along with all of its dependencies, libraries, and configuration files, ensuring that the application runs consistently in any environment. Here’s why Docker is beneficial for sharing applications:


////////////////////////////////////////////////////////////////////////////////////

// what is docker image

// It is a kind of ready-to-use software read-only template
// Images is made with source codes, libraries, external dependencies and tools
// Images can not be updated
// If you want to make changes in images you have to create new image.
// Images can not run directly

// Example: 
// node js setup
// React js setup
// code of application
// dependencies
// any other supporting tool
// docker file to

// we can say that images is a template of project


/////////////////////////////////////////////////////////////////////////////////////////

// what is docker conatiner

// In Docker, a container is a lightweight, standalone, and executable package of software 
// that includes everything needed to run an application: code, runtime, system tools, 
// libraries, and settings. 

// the container is package that run your application with images
// conatiner is an isolated process
// mean conatainer run independently on computer   

/////////////////////////////////////////////////////////////////////////////////////////

// what is docker hub 
// to give permission to access or run docker cmd
// sudo chmod 777 /var/run/docker.sock

////////////////////////////////////////////////////////////////////////////////////////

// Docker command

// to create docker images
// docker build -t <image name> .
// docker build -t basic-app .

///////////////////////////////////////////////////////////////////////////////////////

// run docker image with port maping
// docker run -p 3000:3000 basic-app

//////////////////////////////////////////////////////////////////////////////////////

// to run images
// docker run <image_name>

// to delete images
// docker rmi <image_id>

// docker rmi dd56ec6599b2 --force 

// to stop container 
// docker stop <container_id>

// to run stop container
// docker start <container_id>

// to delete container 
// docker rm <container_id>

////////////////////////////////////////////////////////////

// is use delete all container, imgaes and cash for local system
// docker system prune -a

////////////////////////////////////////////////////////////

// what is valuem in docker

////////////////////////////////////////////////////////////


// how to create volume  in docker 
// -v we use for create volume

// docker run --name basic-container -p 5000:5000 --rm -v /home/shoaibhusain/shoaib/Docker/basicApp:/app basic-app

//////////////////////////////////////////////////////////////