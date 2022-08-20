npm config set registry https://registry.npm.taobao.org & npm install


if [ -f /workspace/.init_dev_env.sh ]; then 
    source /workspace/.init_dev_env.sh
fi

if [ ! -z $GIT_USERNAME ];then
    git config --global user.name $GIT_USERNAME
fi

if [ ! -z $GIT_EMAIL ] ;then
    git config --global user.email $GIT_EMAIL
fi
