pipeline{
    agent{
        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
    }
    environment {
        HOME = "${env.WORKSPACE}"
    }

    options {
        ansiColor('xterm')
    }


    stages {
        stage ("Init dependensies") {
            steps {
                sh 'npm i'

                script {
                    // Install Xvfb
                    sh 'sudo apt-get update && sudo apt-get install -y xvfb'

                    // Start Xvfb
                    sh 'Xvfb :1 -screen 0 1024x768x24 &'
                    sleep 3 // Give Xvfb some time to start (adjust if necessary)

                    // Set the DISPLAY environment variable
                    sh 'export DISPLAY=:1'
                }
            }
        }
        stage ("Run tests") {
            parallel {
                stage ("Run on Firefox") {
                    steps {
                        sh 'npm run cy:run:firefox'
                    }
                }
                stage ("Run on Chrome") {
                    steps {
                        sh 'npm run cy:run:chrome'
                    }
                }
            }
        }
    }
    post {
        always {
            // sh 'npm run generate:report'
            // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            cleanWs()
        }
    }
}