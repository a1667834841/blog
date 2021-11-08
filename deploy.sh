#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'ggball.top' > CNAME

# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com/a1667834841/blog.git
#   git config --global user.name "a1667834841"
#   git config --global user.email "1667834841@qq.com"
# else
#   msg='来自github actions的自动部署'
#   githubUrl=https://a1667834841:${GITHUB_TOKEN}@github.com/a1667834841/blog.git
#   git config --global user.name "a1667834841"
#   git config --global user.email "1667834841@qq.com"
# fi
# git init
# git add -A
# git commit -m "${msg}"
# git remote add origin https://a1667834841:${GITHUB_TOKEN}@github.com/a1667834841/blog.git
# git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

git config --global user.name "1667834841@qq.com"
git config --global user.email "1667834841@qq.com"
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  codingUrl=git@e.coding.net:personal/blog.git
else
  msg='来自github actions的自动部署'
  codingUrl=https://bSjYQdAhrG:${CODING_TOKEN}@e.coding.net/personal/blog.git #令牌用户名:令牌
fi

git init
git add -A
git commit -m "conding测试"
git remote add origin https://e.coding.net/ggball/personal/blog.git
git push origin -f master 

cd -
rm -rf docs/.vuepress/dist
