pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
   stage('Cloning Git') {
      steps {
        git 'git@gitlab.com:ben.cavas/express_jenkins.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }     
  }
}