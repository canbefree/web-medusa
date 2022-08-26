#! /bin/bash 
set -e 
# 淘宝
# npm config set registry https://registry.npmmirror.com & npm install
# 腾讯
npm config set registry http://mirrors.cloud.tencent.com/npm/ & npm install
# 华为
# npm config set registry https://mirrors.huaweicloud.com/repository/npm/ & npm install 

# 验证
npm config get registry

if [ -f /workspace/.init_dev_env.sh ]; then 
    source /workspace/.init_dev_env.sh
fi

if [ ! -z $GIT_USERNAME ];then
    git config --global user.name $GIT_USERNAME
fi

if [ ! -z $GIT_EMAIL ] ;then
    git config --global user.email $GIT_EMAIL
fi
