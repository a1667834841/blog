@echo off

title 创建日志文件

cls



::获取当前日期

set date=%date:~0,4%-%date:~5,2%-%date:~8,2%

set cdate=**mood:** :smile:  																		**date: %date%**


::创建日志文件


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

