pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'             
                echo 'Building' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'mv dist/ /www/hzjioBlog/'
                echo './deploy staging'                
                echo './run-smoke-tests'
            }
        }
    }

    post {        
        always {            
            echo 'One way or another, I have finished'            
            // deleteDir() /* clean up our workspace */        
        }        
        success {            
            echo 'I succeeeded!'        
        }        
        unstable {            
            echo 'I am unstable :/'        
        }        
        failure {            
            echo 'I failed :('        
        }        
        changed {            
            echo 'Things were different before...'        
        }    
    }
}
