@echo off
chcp 936

echo ≤‚ ‘:

for /f %%i in ('git log --format^=%%h^,%%at^,%%ct') do echo %%i


pause
