@echo off

title 创建日志文件

cls


::获取前一个文件路径
set filepath= ./2021-10-15_note.md

::获取当前日期

set date=%date:~0,4%-%date:~5,2%-%date:~8,2%
:: 表情
set cdate=**mood:** :smile:  									**date: %date%**
:: 未完成事项开头表示
set not_finish=-												


::创建日志文件
setlocal enabledelayedexpansion
:: 防止乱码
chcp 65001 
for /f "delims=" %%a in (%filepath%) do (
	set target=%%a
	echo !target!| findstr "[ ]" >nul && (
		echo !target!
	) || (
		echo "不包含"
	)	
)


echo %cdate%  >> %date%_note.md
echo ## 今日计划  >> %date%_note.md
echo ------  >> %date%_note.md
echo - [ ]  >> %date%_note.md
echo ## 明日计划  >> %date%_note.md
echo ------  >> %date%_note.md
echo - [ ]  >>%date%_note.md
echo ## 随写 >> %date%_note.md
echo ------ >> %date%_note.md

::echo 创建完成

start "" "./%date%_note.md"

