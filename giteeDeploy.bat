# 删除dist文件夹
rd /s /q D:\project\vscode\theme-vdoing-blog\docs\.vuepress\dist

echo '删除dist文件夹成功'

# 生成静态文件
npm run build

# 进入生成的文件夹
cd  d:
cd D:\project\vscode\theme-vdoing-blog\docs\.vuepress\dist


git config --global user.name "ggball"
git config --global user.email "167834841@qq.com"

git init
git add -A
git commit -m "来自gitee的部署"
git remote add origin https://gitee.com/zxqzhuzhu/theme-vdoing-blog.git
git push -f https://gitee.com/zxqzhuzhu/theme-vdoing-blog.git master:page # 推送到github page分支

echo '成功提交'