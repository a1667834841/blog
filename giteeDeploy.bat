# 删除dist文件夹
rd /s /q D:\project\vscode\theme-vdoing-blog\docs\.vuepress\dist

echo '删除dist文件夹成功'

# 生成静态文件
npm run build

# 进入生成的文件夹
cd  d:
cd D:\project\vscode\theme-vdoing-blog\docs\.vuepress\dist


git config --global user.name "a1667834841"
git config --global user.email "1667834841@qq.com"

git init
git add -A
git commit -m "本地"
git remote add origin git@github.com:a1667834841/blog.git
git push -f git@github.com:a1667834841/blog.git master:gh-pages  # 推送到github page分支

git init
git add -A
git commit -m "conding测试"
git remote add origin https://e.coding.net/ggball/personal/blog.git
git push origin -f master 

 https://bSjYQdAhrG:9d5dfb3e3df15ff28f60ea65270ff3243d0f505c@e.coding.net/personal/blog.git

echo '成功提交'