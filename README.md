# FlaskForm
Deploying a Flask application ansible 

## Basic usage:
If you are new with python and or web applications I invite you to see the Wiki. 

https://github.com/JorgeFrancoIbanez/FlaskForm/wiki

## Ansible - Deploy the server

To deploy your server you need to set the server IP into "**/etc/ansible/hosts**" as:

 "**/etc/ansible/hosts**" :

    [web]
    IP_of_host ansible_ssh_private_key_file=~/path/to/private_key  ansible_user=user_of_host_server

Change the IP inside "**../ansible/conf/virthost.conf**" for your own 

    <VirtualHost *:80>
	    	    ServerName **IP_of_host**
                    ServerAdmin admin@mywebsite.com
    .........


Finally call the deploy playbook: 

    ansible-playbook ../ansible/yaml/deploy.yml


If there are problems with the private key (no permissions) a possible solution is changing the key private permissions:
    $ sudo chmod 600
